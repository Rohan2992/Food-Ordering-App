import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>
        {status} : {statusText}
      </h1>
      <p>OOPS!</p>
      <p>Something went wrong..</p>
    </div>
  );
};

export default Error;
