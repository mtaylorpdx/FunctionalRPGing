// This function stores our state.

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

// This allows us to create new characters
// const initialCharValues = {health: 0, stamina: 0, sleep: 0, food: 0, money: 0};

const gameValues = {
  player: {
    health: 0, 
    // stamina: 0,
    strength: 0, 
    sleep: 0, 
    food: 0, 
    money: 0,
    experience: 0,
    level: 0,
    hirelings: 0
  }, game: {
    playerName: "",
    days: 0,
    
  }, inventory: {
    item1: "",
    item2: "",
  }
}

const player1 = storeState(initialCharValues);
const player2 = storeState(initialCharValues);

//This is a function factory. We can easily create more specific functions that alter a p0lant's health, stamina, sleep, and food.a

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};