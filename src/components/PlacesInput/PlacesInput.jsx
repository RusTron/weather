import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaceAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { placesActions } from '../../store/reducers/placesReducer';
import { weatherActions } from '../../store/reducers/weatherReducer';
import { loadingActions } from '../../store/reducers/loadingReducer';
import './PlacesInput.scss';
import { getData } from '../../axios';

export const PlacesInput = () => {
  const dispatch = useDispatch();
  const selectedPlace = useSelector(({ places }) => places);
  const loaded = useSelector(({ loading }) => loading.loaded);

  const changeAddress = (newValue) => {
    const action = placesActions.setAddress(newValue);
    dispatch(action);
  };

  const selectedAddress = (address) => {
    const action = placesActions.setSelectedAddress(address);
    dispatch(action);
  };

  const getTemperatureFromServer = (latLng) => {
    getData(latLng).then((res) => {
      const action = weatherActions.setTemperature(res.data.list
        .map((item) => ({ date: item.dt_txt, temp: +(item.main.temp - 273.15).toFixed(2) })));
      dispatch(action);
    });
  };

  const changeLoading = (value) => {
    const action = loadingActions.setLoading(value);
    dispatch(action);
  };

  const searchOptions = {
    types: ['(cities)'],
  };

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      changeAddress(value);
      selectedAddress(value);
      getTemperatureFromServer(latLng);
      changeLoading(true);
    } catch (e) {
      console.log(e);// eslint-disable-line
    }
  };
 debugger; // eslint-disable-line
  return (
    <div className="form-input">
      <PlaceAutocomplete
        value={selectedPlace.address}
        onChange={changeAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
        highlightFirstSuggestion
        onKeyPress={(e) => console.log(e)}
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
        }) => (
          <div>
            <input
              {...getInputProps({// eslint-disable-line
                placeholder: 'Type address',
                className: 'form-control',
                'aria-haspopup': true,
              })}
            />
            <div className="mt-2 position-relative">
              {loading ? (
                <div className="dropdown-menu">...loading</div>
              ) : (
                suggestions
                && suggestions.length > 0 && (
                  <div className="dropdown-menu show">
                    {suggestions.map((suggestion) => (
                      <div
                        {...getSuggestionItemProps(suggestion, {// eslint-disable-line
                          className: 'dropdown-item',
                          key: suggestion.description,
                        })}
                      >
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </PlaceAutocomplete>
      {loaded ? (
        <h2 className="title">
          {`Прогноз погоды в ${selectedPlace.selectedAddress} на ближайшие 5 суток`}
        </h2>
      ) : (
        <h2 className="title">
          Введите населенный пункт
        </h2>
      )}
    </div>
  );
};
