import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  //   console.log(user.name, user.mail);
  return (
    <h1 className="p-4 m-3 font-bold text-center" data-testid="description">
      Designed And Developed by {user.name} for support Contact at {user.mail}
    </h1>
  );
};

export default Footer;
