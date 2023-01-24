import Types from "./Types";

const Element = (props) => {
  return (
    <div>
      {props.name}
      {props.types?.map(types =>
        <Types name={types} />
      )}
    </div>
  );
}

export default Element;