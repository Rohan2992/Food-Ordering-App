import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText, data } = useRouteError();
  return (
    <div>
      <h2>{data}</h2>
      <h3>
        {status} : {statusText}
      </h3>
      <p>OOPS!</p>
      <p>Something went wrong..</p>
    </div>
  );
};

export default Error;
