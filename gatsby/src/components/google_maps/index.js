import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Flex } from 'rebass';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const GoogleMap = ({ height, width, lat, lng, zoom, google, onMarkerClick, onInfoWindowClose, onMapClicked, selectedPlace }) => {
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

  const markerClickHandler = (props, marker, e) => {
    setControls({
      ...controls,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !controls.showingInfoWindow
    })
  }

  const mapClickedHandler = props => {
    if (controls.showingInfoWindow) {
      setControls({
        ...controls,
        showingInfoWindow: !controls.showingInfoWindow,
        activeMarker: null
      })
    }
  } 

  return (
    <Map
      google={google}
      zoom={zoom}
      style={style}
      initialCenter={controls.center}
      onClick={mapClickedHandler}
      ref={mapRef}>
      <Marker
        onClick={markerClickHandler} 
        name={'Title'}
        title={'Place Title'}
        position={{
          lat,
          lng
        }} />
      <InfoWindow
        visible={controls.showingInfoWindow}
        marker={controls.activeMarker}
        style={{
          backgroundColor: '#222 !important'
        }}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#222"
          p={2}>
          <h2>
            { `Title` }
          </h2>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center">
            <Text as="span" lineHeight="copy">
              {
                `Address`
              }
            </Text>
            <Text as="span">
              { `City` }
            </Text>
            <Text as="span" width={1} mt={2}>
              {`phone number`}
            </Text>
          </Flex>
        </Flex>
      </InfoWindow>
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
  lat: 9.934346,
  lng: -84.093777,
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQhuBToZuEqTLByGci9Lne77f3Po57BVc'
})(GoogleMap);