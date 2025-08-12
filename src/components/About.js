import User from "../components/User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent render called");
    return (
      <div className="p-16 border border-gray-100 shadow-2xl items-center w-9/12 mx-auto my-4">
        <userContext.Consumer>
          {({ loggedInUser }) => <h3 className="text-amber-200">Logged in as: {loggedInUser}</h3>}
        </userContext.Consumer>
        <p>
          We are a leading food delivery service, committed to bringing
          delicious meals to your doorstep.
        </p>
        <p>
          Our mission is to connect you with the best restaurants in your area,
          ensuring a delightful dining experience.
        </p>
        <User name={"Aliya from function props"} />
        <UserClass
          name={"Aliya from class props"}
          location={"Mumbai"}
          contact={"ComingfromStateVariable"}
        />
        {/* <UserClass name={"Anjum from class props"} location={"Mumbai"} contact={"ComingfromStateVariable"}/> */}
      </div>
    );
  }
}

// const About= () => {
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             <p>We are a leading food delivery service, committed to bringing delicious meals to your doorstep.</p>
//             <p>Our mission is to connect you with the best restaurants in your area, ensuring a delightful dining experience.</p>
//             <User name={"Aliya from function props"}/>
//             <UserClass name={"Aliya from class props"} location={"Mumbai"} contact={"ComingfromStateVariable"}/>
//         </div>
//     );
// }

export default About;
