const initialState = {
  colorName: {
    name: 'RED',
    hexCode: '#DE5448',
  },
};

const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COLOR_CHANGED':
      return { colorName: action.payload };
    default:
      return state;
  }
};

export default ColorReducer;