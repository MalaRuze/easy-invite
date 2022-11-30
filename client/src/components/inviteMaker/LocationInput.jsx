import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Input, Switch } from "antd";

function LocationInput(props) {
  const [adress, setAdress] = useState(props.defaultInput.locationName);
  const [adressLink, setAdressLink] = useState(props.defaultInput.locationLink);
  const [includeLink, setIncludeLink] = useState(
    props.defaultInput.locationLink
  );

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const placeId = results[0].place_id;
    const googleMapLink =
      "https://www.google.com/maps/search/?api=1&query=" +
      latLng.lat +
      "%2C" +
      latLng.lng +
      "&query_place_id=" +
      placeId;
    setAdressLink(googleMapLink);
    setAdress(value);
    const locationName = {
      target: {
        name: "locationName",
        value: value,
      },
    };
    const locationLink = {
      target: {
        name: "locationLink",
        value: googleMapLink,
      },
    };
    const finalData = [locationName, locationLink];
    props.handleChange(finalData);
    // props.handleChange(locationLink);
    // props.handleChange(locationName);
  };

  function handleToggle() {
    setIncludeLink(!includeLink);
    const useLocationLink = [
      {
        target: {
          name: "useLocationLink",
          value: !includeLink,
        },
      },
    ];
    props.handleChange(useLocationLink);
  }

  return (
    <div className="pt-2 grid grid-cols-7">
      <div className="col-span-6 w-11/12">
        <p className="pb-2">Location</p>
        <PlacesAutocomplete
          value={adress}
          onChange={setAdress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="relative">
              <Input
                {...getInputProps({
                  placeholder: "Type address",
                })}
              />
              <div className="absolute bg-white z-20 w-full px-4 rounded drop-shadow-md">
                {suggestions.map((suggestion) => {
                  return (
                    <div
                      className="pb-2 pt-1 text-sm hover:text-easyPurple"
                      {...getSuggestionItemProps(suggestion)}
                    >
                      <span
                        onClick={() => handleSelect(suggestion.description)}
                      >
                        {suggestion.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div>
        <p className="pb-2 break-keep">Link</p>
        <Switch
          className="bg-easyGrey align-middle"
          checked={includeLink}
          defaultChecked={true}
          onChange={handleToggle}
        />
      </div>
    </div>
  );
}

export default LocationInput;
