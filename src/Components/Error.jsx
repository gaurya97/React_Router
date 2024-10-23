import { useRouteError } from "react-router-dom";
const Error = () => {
  const ErrorMassage = useRouteError();
  console.log(ErrorMassage);
  return (
    <div>
      <div className="Navbar">
        <pre>
          <p>
            unexpected error {ErrorMassage.status} : {ErrorMassage.statusText}
          </p>
        </pre>
      </div>
    </div>
  );
};
export default Error;

