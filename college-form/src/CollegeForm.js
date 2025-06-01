import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: ""
      }
    },
    state: "",
    coordinates: {
      latitude: "",
      longitude: ""
    }
  },
  courses_offered: []
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
    case "establishment_year":
      return { ...state, [action.type]: action.payload };

    case "building":
    case "street":
    case "state":
      return {
        ...state,
        address: {
          ...state.address,
          [action.type]: action.payload
        }
      };

    case "city_name":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            name: action.payload
          }
        }
      };

    case "pinCode":
    case "landmark":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.type]: action.payload
            }
          }
        }
      };

    case "latitude":
    case "longitude":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.type]: action.payload
          }
        }
      };

    case "courses_offered":
      return {
        ...state,
        courses_offered: action.payload.split(",").map((course) => course.trim())
      };

    case "reset":
      return initialState;

    default:
      throw new Error("invalid action type");
  }
}

function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (type, value) => {
    try {
      dispatch({ type, payload: value });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmitted(false);
  };

  return (
    <div>
      <h2>College Form</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="College Name" value={state.name} onChange={(e) => handleChange("name", e.target.value)} />
        <input placeholder="Establishment Year" type="number" value={state.establishment_year} onChange={(e) => handleChange("establishment_year", e.target.value)} />
        
        <h4>Address:</h4>
        <input placeholder="Building" value={state.address.building} onChange={(e) => handleChange("building", e.target.value)} />
        <input placeholder="Street" value={state.address.street} onChange={(e) => handleChange("street", e.target.value)} />
        <input placeholder="State" value={state.address.state} onChange={(e) => handleChange("state", e.target.value)} />
        <input placeholder="City" value={state.address.city.name} onChange={(e) => handleChange("city_name", e.target.value)} />
        <input placeholder="Pin Code" value={state.address.city.locality.pinCode} onChange={(e) => handleChange("pinCode", e.target.value)} />
        <input placeholder="Landmark" value={state.address.city.locality.landmark} onChange={(e) => handleChange("landmark", e.target.value)} />
        <input placeholder="Latitude" value={state.address.coordinates.latitude} onChange={(e) => handleChange("latitude", e.target.value)} />
        <input placeholder="Longitude" value={state.address.coordinates.longitude} onChange={(e) => handleChange("longitude", e.target.value)} />
        
        <input placeholder="Courses (comma separated)" value={state.courses_offered.join(", ")} onChange={(e) => handleChange("courses_offered", e.target.value)} />

        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {submitted && (
        <div>
          <h3>College Details</h3>
          <p><b>Name:</b> {state.name}</p>
          <p><b>Year:</b> {state.establishment_year}</p>
          <p><b>Address:</b></p>
          <ul>
            <li>{state.address.building}, {state.address.street}, {state.address.city.name}</li>
            <li>{state.address.city.locality.landmark} - {state.address.city.locality.pinCode}</li>
            <li>{state.address.state}</li>
            <li>Coordinates: ({state.address.coordinates.latitude}, {state.address.coordinates.longitude})</li>
          </ul>
          <p><b>Courses:</b> {state.courses_offered.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default CollegeForm;
