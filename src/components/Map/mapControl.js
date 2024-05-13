import React from 'react';
import {MapControl} from '@vis.gl/react-google-maps';
import { PlaceAutocomplete } from './placeAutocomplete';

export const CustomMapControl = ({
  controlPosition,
  onPlaceSelect
}) => {

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control">
          <PlaceAutocomplete onPlaceSelect={onPlaceSelect} />
      </div>
    </MapControl>
  );
};