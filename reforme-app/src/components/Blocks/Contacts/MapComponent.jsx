import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
   lat: 40.74487786365968,
   lng: -73.98492166177462,
};

function MapComponent() {
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDzpieGatuas_pBcT6v3L1I91usX-km3tY"
   })

   const [map, setMap] = React.useState(null)

   const onLoad = React.useCallback(function callback(map) {
      setMap(map)
   }, [])

   const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
   }, [])

   // A function for processing a click on a label
   const handleMarkerClick = () => {
      const url = `https://maps.app.goo.gl/3j56iAsHeL8Kr53e8`;
      window.open(url, '_blank');
   };



   return (
      isLoaded ? (
         <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
               disableDefaultUI: true,
            }}
         >
            <Marker position={center} onClick={handleMarkerClick} />
         </GoogleMap>
      ) : <></>
   );
};

export default MapComponent;
