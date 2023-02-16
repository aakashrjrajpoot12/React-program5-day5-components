import React from 'react';
class MyPureComponent extends React.PureComponent{
  render(){
    console.log("Inside pure comp");
    return(
      <>
      <h1>Pure Comp</h1>{this.props.feedback}
      </>

    );
  }
}
export default class PureCompDemo extends React.Component{
  state={
    myfeedback :"good"
  }
  componentDidMount(){
    setInterval(()=>this.setState({myfeedback :"Excellent"}),5000);
  }
  render(){
    console.log("Inside Pure CompDemo")
    return(
      <>
      <MyPureComponent feedback={this.state.myFeedback}/>
      </>
    );
  
    }
}