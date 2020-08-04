import React, {Component, PureComponent} from "react";
import {PropTypes} from "prop-types";

//export default class Home extends PureComponent{ // when using this need not to implement shouldComponentUpdate
export default class Home extends Component{
    
    //creation life cycle methods
    constructor(props, context){
        super(props, context); // props: are immutable and shared by parent to use
        this.state = { // state : is mutable and remains within the component
            msg: "This is the Home Page", // We are copying the props to state variable coming from parent  
            secondMsg: props.someMsg          
        }                

        console.log("Constructor called first and only one time when component gets invoked.");

        this.textInput = React.createRef(); //creating ref element : Needs to be avoided in actual use unless necessary
    }

    componentWillMount(){
        console.log("componentWillMount")

        //view not accessible in component will mount
        // this.textInput.current.focus();
        // this.textInput.current.value = "Setting Up Reference Value in component did mount";
    }

    componentDidMount(){
        console.log("componentDidMount");

        //accessing the actual DOM using ref keyword
        //setTimeout(() => {
            //this.textInput.current.focus();
            //this.textInput.current.value = "Setting Up Reference Value in component did mount";    
        //}, 3000);       
    }

    //destructuring life-cycle method
    //component will unmount
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    
    //Update LifeCyle
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps -", nextProps);
    }

    //life cycle method
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate -");
        console.log("nextProps -", nextProps );
        console.log("nextState -", nextState);
        // if (nextState.sessionName !== this.state.sessionName || nextProps.sessionName !== this.props.sessionName) {
        //     return true; //go and call the render
        // }else
        //     return false; // do not call the render
        return true;
    }

    // getSnapshotBeforeUpdate(prevState){
    //     console.log("getSnapshotBeforeUpdate ");
    //     console.log("prevState - ",prevState);
    //     return prevState;
    // }
    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate -");
        console.log("prevState -", prevState);
        console.log("prevProps -", prevProps);
        // this.setState({
        //     sessionName: "Learn React "
        // })
    }

    //To Handle the error : error boundry
    // componentDidCatch(error, info) { // Display fallback UI 
    //     console.log("Component Did catch")	
    //     this.setState({ hasError: true }); // You can also log the 	error to an error reporting service 
	//     logErrorToMyService(error, info); 
    // }

    changeMessage = ()=>{
        this.setState({ // when updated like this render gets called so change gets reflected on UI
            msg: this.state.msg + 1
        })

        //this.textInput.current.value = "This change is done on click"; //if using this comment the above setState
    }

    readUserInput = (evt) => {//evt : belongs to the html element raising the event in our case its input box        
        let targetValue = evt.target.value; //javascripts basic way

        //if (isNaN(targetValue) || targetValue == "") {
            this.setState({
                inputValue: targetValue
            })    
        //}        
    }

    render(){
        console.log("Component LC Render - ", this.state.msg);
        return(//React.Fragment Returns one parent element without any additional div or parent
            <div className={"loadimage"} style={{backgroundImage: "url(./images/hm_pic4.jpg)"}}>
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>

                    <button onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>

                    {/* <p><b>{this.state.msg}</b></p>
                    <button onClick={this.changeMessage} >Click Me</button>
                    <input type="text" placeholder="Please provide your input" value={this.state.inputValue} onChange={this.readUserInput}/>
                    {/*this is ref element to be accessed directly in code
                    <input type="text" ref={this.textInput} value="learning ref in react"/>  */}
            </div>
        )
    }
}  

Home.propTypes = {
    msg: PropTypes.string.isRequired
}

Home.defaultProps = {
    msg : "This is the default message, in case value not returned from parent"
}


//old_code

    // this.state = { // state : is mutable and remains within the component
    //     msg: "This is the Home Page", // We are copying the props to state variable coming from parent
    //     sessionName: "props.sessionName",
    //     inputValue: "Initial Value"
    // } 

    // changeSessionName = () => {
    //     //setState - this API accepts the update state and re-renders along with lifecycle methods
    //     this.setState({
    //         sessionName: "React"
    //     },
    //         ()=>{
    //             console.log("Session Has been updated")
    //         }
    //     )

    //     // below way must be avoided
    //     //this.state.sessionName = "Angular";
    //     //this.forceUpdate();// calls render method directly without going to should component update
    //     //forceUpdate - this should be avoided, it skips life cycle methods of component
    // }

    // readUserInput = (evt) => {//evt : belongs to the html element raising the event in our case its input box        
    //     let targetValue = evt.target.value; //javascripts basic way
    //     console.log("There are changes in input box", evt.target)

    //     //if (isNaN(targetValue) || targetValue == "") {
    //         this.setState({
    //             inputValue: targetValue
    //         })    
    //     //}        
    // }

    // render(){
    //     console.log("Render of Home - child component")
    //     return( //React.Fragment : Holds the criteria to have a top single child in return and also doesnot renders additional div
    //         <React.Fragment>
    //             <h1><i>This is going to be the Home</i></h1>
    //             {/* <br/>
    //             <i>{this.state.msg}</i>
    //             <br />
    //             <i>{this.props.msg}</i>
    //             <br/>
    //             <b><i>{this.props.timer}</i></b>
    //             <br/>*/}
    //             <b><i>Session Name From Props = {this.props.sessionName}</i></b> 
    //             <br/>
    //             <b><i>Session Name From State = {this.state.sessionName}</i></b>
    //             <button onClick={this.changeSessionName}>Change Session Name</button>  
    //             <br/>
    //             {/* <button onClick={() => this.props.returnMsg(this.state.inputValue)}>Send Back To Parent</button>  
                
    //             <br/>                 */}
             

    //             <b>{this.state.inputValue}</b>

    //         </React.Fragment>
    //     )
    // }

