import Image from "../../images/under-construction.png";

const UnConstructor = () => {
  return (
    <img
      src={Image}
      alt=""
      style={{
        position: "relative",
        top: "50%",
        translate: "0 -60%",
      }}
    />
  );
};

export default UnConstructor;
