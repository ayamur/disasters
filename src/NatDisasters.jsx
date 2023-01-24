import Element from "./Element";

const NatDisaster = (props) => {
  return ( 
    <>
    <div>{props.name}
    <Element name='Wind'/>
    <Element name='Water'/>
    <Element name='Fire'/>
    <Element name='Earth'/>
    </div>
    </>
   );
}
 
export default NatDisaster;