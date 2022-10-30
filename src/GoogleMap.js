import KEY from './Key';
import './GoogleMap.css'
import GoogleMapReact from 'google-map-react';
import Google_Maps_icon from './img/Google_Maps_icon.png';

const AnyReactComponent = () => <div><img className='googleMap_icon' src={Google_Maps_icon} alt="Background" /></div>;

function GoogleMap(props) {
  return (
    <div className='googleMapApi' onClick={()=>{console.log(props.storePos)}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        center={props.storePos}
        fullscreenControl={true}
        draggable={false}
      >
        <AnyReactComponent
          lat={props.storePos.lat}
          lng={props.storePos.lng}
        />
      </GoogleMapReact>
    </div>
  );
}


GoogleMap.defaultProps = {
  center: {
    lat:0,
    lng:0,
  },
  zoom: 17
};

export default GoogleMap