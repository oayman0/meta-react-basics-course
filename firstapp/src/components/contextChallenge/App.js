import { useContext, useState } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { MyContext } from './Context.js';
import img1 from '../../assets/images/img1.jpg'
import MyVideo from './video.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <MyContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox" 
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      {/* <List imageSize={imageSize} /> */}
          <MyVideo/> 
      <img
      src={img1}
      alt="Omar"
      width="200px"
      height="200px"
    /> 
      <img
      src={require('../../assets/images/d1.jpg')}
      alt="Omar"
      width="100px"
      height="100px"
    />
     
      <List/>
      </MyContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place}) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place}) {
    const imageSize=useContext(MyContext);
  return (
    <>
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
   
    </>
  );
}
