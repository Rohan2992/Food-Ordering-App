import { Component } from "react";
import FunctionBasedProfileComponent from "./Profile";
import ClassBasedProfileComponent from "./ProfileClass";

// const About = () => {
//   return (
//     <>
//       <div>
//         <h3>This is the About Us Page.</h3>
//         <p>This is a webPage build using React.</p>
//         <FunctionBasedProfileComponent />
//         <ClassBasedProfileComponent />
//       </div>
//     </>
//   );
// };

// Converting functional components to class based components

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    };
    console.log("Parent - " + "Constructor called");
  }

  componentDidMount() {
    console.log("Parent - " + "Component Did Mount");
  }

  // componentDidUpdate() {
  //   console.log("Parent - " + "Component Did Update");
  // }

  render() {
    console.log("Parent - " + "Render is called");
    return (
      <>
        <div>
          <h3>This is the About Us Page.</h3>
          <p>This is a webPage build using React.</p>
          <ClassBasedProfileComponent order="First Element" />
          {/* <ClassBasedProfileComponent order="Second Element" /> */}
          {/* <FunctionBasedProfileComponent /> */}
        </div>
      </>
    );
  }
}

export default Profile;
