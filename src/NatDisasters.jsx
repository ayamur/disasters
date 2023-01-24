import Element from "./Element";

const NatDisaster = (props) => {
  return (
    <>
      <div>{props.name}
        <Element name='Wind' types={['Hurricane', 'Tornado']} />
        <Element name='Water' types={['Tsunami', 'Flooding', 'Blizzard', 'Hail']} />
        <Element name='Fire' types={['Drought', 'Wildfire', 'Lightning']} />
        <Element name='Earth' types={['Earthquake', 'Volcanic Activity', 'Landslide']} />
      </div>
    </>
  );
}

export default NatDisaster;