// This function stores our state.

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//This is a function factory. We can easily create more specific functions that alter a p0lant's health, stamina, sleep, and food.a

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// This allows us to create new characters
export const initialCharValues = {health: 0, strength: 0, sleep: 0, food: 0, money: 0, experience: 0, level: 0, hirelings:0};

// const gameValues = {
//   player: {
//     health: 0, 
//     // stamina: 0,
//     strength: 0, 
//     sleep: 0, 
//     food: 0, 
//     money: 0,
//     experience: 0,
//     level: 0,
//     hirelings: 0
//   }, game: {
//     playerName: "",
//     town: ""
//   }, inventory: {
//     item1: "",
//     item2: "",
//   }
// };


export const player1 = storeState(initialCharValues);
// const player2 = storeState(initialCharValues);

export const toEat = changeState("food");
export const hamburger = toEat(10);
export const newState1 = player1(hamburger);



export const takeDamage = changeState("health");
export const vampireHit = takeDamage(-5);
export const newState2 = player1(vampireHit);

// export const getExp = changeState("experience");
// export const vampireExp = getExp(10);
// export const newState3 = player1(vampireExp);

export const winBattle = changeState("level");
export const battleWon = winBattle(1);
export const newState3 = player1(battleWon);



