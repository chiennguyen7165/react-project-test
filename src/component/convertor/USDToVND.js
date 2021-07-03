const USTtoVND = function (props) {
  const convert = function (usd) {
    return usd * 23632;
  };

  return (
    <div>
      <span>USD</span>
      <input
        className="form-control mt-3 mb-3"
        onChange={(e) => {
          const usd = e.target.value;
          const vnd = convert(usd);
          props.onHandleChange({
            usd: usd,
            vnd: vnd,
          });
        }}
        value = {props.value}
      />
    </div>
  );
};

export default USTtoVND;
