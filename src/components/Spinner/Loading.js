import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "330px" }}>
      <ClipLoader color="#3b5998" size={50} />
    </div>
  );
}

export default Spinner;
