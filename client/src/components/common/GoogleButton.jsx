const GoogleButton = ({ handleGoogleLogin , googleTitle}) => {
  return (
    <>
      {googleTitle !== "signup" ? (
        <button
          type="button"
          style={{
            marginTop: "2vh",
            borderRadius: "5px",
            border: "none",
            marginRight: "10px",
            width: "100%",
            whiteSpace: "pre-wrap",
          }}
          onClick={() => handleGoogleLogin()}
        >
          <i className="fa-brands fa-google"> </i>
          <>Continute with Google</>
        </button>
      ) : (
        <button
          type="button"
          style={{
            marginTop: "2vh",
            borderRadius: "5px",
            border: "none",
            marginRight: "10px",
            width: "100%",
            whiteSpace: "pre-wrap",
          }}
          onClick={() => handleGoogleLogin()}
        >
          <i className="fa-brands fa-google"> </i>
          <>Sign up with Google</>
        </button>
      )}
    </>
  );
};

export default GoogleButton;
