import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
      count: 0,
      userData: null, // State to hold user data
    };
    console.log(this.props.name + "UserClass constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "UserClass componentDidMount called");
    // Simulating an API call to fetch contact information

    const data = await fetch("https://api.github.com/users/aliya1628");
    const jsonData = await data.json();
    console.log("Data fetched:", jsonData);

    this.setState({
      userData: jsonData,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "UserClass componentDidUpdate called");
    // This method is called after the component updates
    // You can perform actions based on state or props changes here
  }

  componentWillUnmount() {
    console.log(this.props.name + "UserClass componentWillUnmount called");
  }

  render() {
    console.log(this.props.name + "UserClass render called");
    const { name } = this.props; //destructuring props
    const { contact } = this.state; //destructuring state
    
    return (
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
        <h3>User Class Component</h3>
        <div>
          <h3>Name: {name}</h3>
          <h3>
            Data Fetched from API:
            {this.state.userData ? this.state.userData.login : "Loading..."}
          </h3>
          <h3>Location: {this.props.location}</h3>
          <h3>Contact: {contact}</h3>
          <h2>count : {this.state.count}</h2>
          <button className="bg-amber-200 p-2 m-2 rounded-lg"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            count Increase
          </button>
        </div>
      </div>
    );
  }
}
export default UserClass;
