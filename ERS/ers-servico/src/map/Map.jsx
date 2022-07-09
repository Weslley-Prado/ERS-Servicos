import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';



// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -23.512804328309684,
//   lng: -46.46914110732811

// };

// export default function Map() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyAD4K4vZN0IagbESNGPdGlap_LWdLYQUOE"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

let altura = window.screen.height;
let largura = window.screen.width;
console.log(altura);
console.log(largura);
let containerStyle = {
    width: '430px',
    height: '500px',
    margin: "15px",
    top: '75%'
}

// if(altura == 1310){
//     containerStyle = {
//     width: '430px',
//     height: '500px',
//     margin: "15px",
//     top: "780px",
// }
// }


if(altura === 844){
    containerStyle = {
        height: '300px',
      };
}

if(altura === 667){
    containerStyle = {
        height: '320px'
      };
}


 

export class Mapa extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [
            { latitude: -23.512905168085698, longitude: -46.469743263217254, local: "ERS Serviços" }]
        }
      }

      
      
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          />
        })
      }

      render() {
        return (
            <div className='Mapa'>
            
          <Map 
          containerStyle={containerStyle}
            google={this.props.google}
            zoom={15}
            initialCenter={{ lat: -23.512905168085698, lng: -46.469743263217254 }}
          >
    
            {this.displayMarkers()}
            
          </Map>
          </div>
          
        );
      }
    }

  export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyAD4K4vZN0IagbESNGPdGlap_LWdLYQUOE',
    }
  ))(Mapa)

