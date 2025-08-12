import { useRouteError } from "react-router";   
const Error = () => {
    const error = useRouteError();
   // console.error(error);
    return (
        <div className="error">
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
        </div>
    );
}

export default Error;