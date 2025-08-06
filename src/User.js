const User = (props) => {
  return (
    <div>
      <h3>User Functional Component</h3>
      <div className="user-card">
        <h3>Name: {props.name}</h3>
        <h3>Location: Mumbai</h3>
        <h3>Contact: @aliya1628</h3>
      </div>
    </div>
  );
};
export default User;
