import logo from "../assets/img/logo/p_logo.png";

const LoadingScreen = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
