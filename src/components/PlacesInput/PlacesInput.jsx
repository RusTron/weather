import React, { useState } from 'react';
import {setCoordinates } from '../../store/reducers/placesReducer';
import { placesReducer } from '../../store';
import PlaceAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import './PlacesInput.scss';

export const PlacesInput = () => {
  const dispatch = useDispatch();
  // const coordinates = useSelector({places});

  const [address, setAddress] = useState("");
  // const [coordinates, setCoordinates] = useState({
  //   lat: null,
  //   lng: null,
  // });

  /*   const countriesOptions = [
    { value: "my", label: "Malaysia", checked: true },
    { value: "id", label: "Indonesia" },
    { value: "sg", label: "Singapore" }
  ]; */

  const changeCoordinates = (newValue) => {
    const action = setCoordinates(newValue)
    dispatch(action);
  };

  const searchOptions = {
    types: ["(cities)"],
  };

  const handleSelect = async value => {
    try{
      const results = await geocodeByAddress(value);
      console.log(results);
      const latLng = await getLatLng(results[0]);
      console.log(latLng);
      setAddress(value);
      setCoordinates(latLng);
    }
    catch(e){
      console.log(e);
    }
    
    /*     document
      .getElementById("tags")
      .scrollIntoView({ behavior: "smooth", block: "end" }); */
  };

  return (
    <div>
      {/* <GooglePlacesAutocomplete
        apiKey="AIzaSyA2hfHczmot7yaRhuZKFYgWpbdH4LAUo7w"
        selectProps={{
          value,
          onChange: setValue,
        }}
        debounce={500}
        minLengthAutocomplete={2}
        types={['(regions)']}
      /> */}
       <PlaceAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
        highlightFirstSuggestion
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading
        }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Type address",
                className: "form-control",
                "aria-haspopup": true
              })}
            />
            <div className="mt-2 position-relative">
              {loading ? (
                <div className="dropdown-menu">...loading</div>
              ) : (
                suggestions &&
                suggestions.length > 0 && (
                  <div className="dropdown-menu show">
                    {suggestions.map(suggestion => {
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className: "dropdown-item"
                          })}
                        >
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </PlaceAutocomplete>
    </div>
  )
}
