const BasicButtonStyling = (props) => {
  const { text, className } = props;
  return (
    <button
      type="button"
      className={className}
      data-te-ripple-init
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {text}
    </button>
  );
};

export default BasicButtonStyling;