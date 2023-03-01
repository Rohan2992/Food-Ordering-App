import React from "react";
import userContext from "../utils/userContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location"
      }
    };
    console.log(this.props.name + " - " + "Constructor is called");
  }

  componentDidMount() {
    //Best place to make an API call

    // console.log(this.props.order + " - " + "Component did Mount");
    // const data = await fetch("https://api.github.com/users/rohan2992");
    // const json = await data.json();
    // this.setState({
    //   userInfo: {
    //     name: "Real Name",
    //     location: "Muzaffarnagar"
    //   }
    // });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  // To re-render based on some condition
  componentDidUpdate(prevProps, prevState) {
    //for specifying the conditions
    // if(this.state.<> !== prevState.count){}
    console.log("Component did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log(this.props.order + " - " + "Render is called");
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <p>I am the class Based Component of the Food Villa</p>
        {console.log(this.state)}

        <h3>{this?.state?.userInfo?.name}</h3>
        <h4>{this?.state?.userInfo?.location}</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <userContext.Consumer>
          {({ user }) => (
            <>
              <p>{user.name}</p>
              <p>{user.mail}</p>
            </>
          )}
        </userContext.Consumer>
        {/* <p></p> */}
        {/* <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count
        </button> */}
      </>
    );
  }
}

export default Profile;
