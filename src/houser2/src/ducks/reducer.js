const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    imageUrl: "",
    mortgage: 0,
    rent: 0
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const RESET_STATE = "RESET_STATE";

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImageUrl(url) {
    return {
        type: UPDATE_IMAGE_URL,
        payload: url
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: Number(mortgage)
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: Number(rent)
    }
}

export function resetState() {
    return {
        type: RESET_STATE,
        payload: {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0,
            imageUrl: "",
            mortgage: 0,
            rent: 0
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, { name: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, { imageUrl: action.payload });
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload });
        case UPDATE_RENT:
            return Object.assign({}, state, { rent: action.payload });
        case RESET_STATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}