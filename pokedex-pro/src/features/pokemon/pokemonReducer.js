let initialState = {
    list: [],
    loading: false,
    error: false,
    filters: {
      type: '',
      sort: 'asc'
    },
    offset: 0,
  };
  
  export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, loading: true, error: false };
  
      case 'SET_POKEMONS':
        return { ...state, list: action.payload, loading: false };
  
      case 'SET_ERROR':
        return { ...state, loading: false, error: true }; // ✅ fixed
  
      case 'SET_FILTER':
        return { ...state, filters: { ...state.filters, ...action.payload } };
  
      case 'SET_OFFSET':
        return { ...state, offset: action.payload };
  
      default:
        return state;
    }
  };
  