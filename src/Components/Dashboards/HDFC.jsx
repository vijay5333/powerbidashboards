const HDFCPage = ({ handleNavClick }) => {
  return (
    <div>
      <button
        className={`btn w-100 text-start`}
        onClick={() => handleNavClick("hdfc", "hdfc")}
      >
        HDFC
      </button>
    </div>
  );
};

export default HDFCPage;
