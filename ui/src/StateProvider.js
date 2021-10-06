import React,{createContext,useContext,useReducer} from 'react'



//Prepares the dataLayer
export const StateContext=createContext()


//wrap the app and provide data layer to all components
export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}

</StateContext.Provider>


);


//pull info from datalayer
export const useStateValue=()=>useContext(StateContext)