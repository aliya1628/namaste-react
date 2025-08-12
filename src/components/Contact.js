const Contact = () => {
  return (
    <div className="p-16 border border-gray-100 shadow-2xl items-center w-9/12 mx-auto my-4">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>

      <form className="p-4 m-4">
        <input
          type="text"
          className="border border-gray-200 p-2 m-2 rounded-lg"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-200 p-2 m-2 rounded-lg"
          placeholder="Contact"
        />
        <button className="px-4 py-2 bg-green-200 rounded-lg">Submit</button>
      </form>
      <div className="p-4 m-4">
        <p>
          If you have any questions or feedback, feel free to reach out to us!
        </p>
        <p>Email: example@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
