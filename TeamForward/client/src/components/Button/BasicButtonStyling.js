const BasicButtonStyling = (props) => {
  const { text, ...otherProps } = props;
  return (
    <button
      type="button"
      data-te-ripple-init
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default BasicButtonStyling;
