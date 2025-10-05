import { useRouteError } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div>{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;
