const CustomHeader = (props) => {
  return (
    <div>
      <img
        src={props.srcLogo}
        width="250px"
        height="150px"
        alt="imagen-introduccion"
      ></img>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>{props.otherp}</p>
      <br></br>
      <h1>{props.secondaryTitle}</h1>
      <p>{props.answer2}</p>
      <a href={props.redirect} target="_blanck">
        {props.buttonText}
      </a>
      <h2>
        <br></br>
        <strong>{props.myname}</strong>
      </h2>
      <p>{props.to}</p>
      <img src={props.srcGlobant} alt="imagen-logo"></img>
    </div>
  );
};

export default CustomHeader;
