const User = (props) => {
  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg items-center">
      <h3>User Functional Component</h3>
      <div>
        <h3>Name: {props.name}</h3>
        <h3>Location: Mumbai</h3>
        <h3>Contact: @aliya1628</h3>
      </div>
    </div>
  );
};
export default User;
