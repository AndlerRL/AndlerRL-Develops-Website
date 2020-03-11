import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Text, Flex } from 'rebass';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const GoogleMap = ({ height, lat, lng, zoom, google }) => {
  const [controls, setControls] = useState({
    center: {
      lat,
      lng
    },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  })

  const style = {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    margin: 0,
    height
  }

  const mapRef = useRef()

  return (
    <Map
      google={google}
      zoom={zoom}
      style={style}
      initialCenter={controls.center}
      ref={mapRef}>
      <Marker
        name={'Title'}
        title={'Place Title'}
        position={{
          lat,
          lng
        }} />
    </Map>
  )
}

GoogleMap.propTypes = {
  height: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

GoogleMap.defaultProps = {
  lat: 9.948064,
  lng: -84.138022,
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQhuBToZuEqTLByGci9Lne77f3Po57BVc'
})(GoogleMap);