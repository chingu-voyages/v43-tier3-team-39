const Button = (props) => {
    const {text, className} = props;
  return (
    <button
      type="button"
      class={className}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {text}
    </button>
  );
};

export default Button;
