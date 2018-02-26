import {GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT} from '../actions/actions-countries';
import countriesData from './../data/countries.json';

const initialState= {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = function(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries:state.countries});
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === parseInt(action.id,10));
            return Object.assign({},state,{selectedCountry});
        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});
        case DELETE_COUNTRY:
            const newCountries = state.countries.filter(country => country.id !== parseInt(action.id,10));
            const newVisibleCountries = state.visibleCountries.filter(country => country.id !== parseInt(action.id,10));
            console.log(newCountries, newVisibleCountries);
            return Object.assign({},state,{countries: newCountries, visibleCountries: newVisibleCountries});
        case SET_CONTINENT:
            const contCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: contCountries});
        default:
            return state;
    }
}

export default countriesReducer;

