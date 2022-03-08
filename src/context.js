import React, { useCallback, useEffect, useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const initialState = {
  search: "",
  list: [],
  loading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchList = useCallback(async () => {
    try {
      dispatch({ type: "LOAD" });
      const response = await fetch(`${url}${state.search}`);
      const data = await response.json();
      if (data) {
        const { drinks } = data;
        const currentDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strDrinkThumb,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            category: strCategory,
            info: strAlcoholic,
            image: strDrinkThumb,
          };
        });
        dispatch({ type: "SET_LIST", list: currentDrinks });
      } else {
        dispatch({ type: "SET_LIST", list: [] });
      }
    } catch {}
  }, [state.search]);

  useEffect(() => {
    fetchList();
  }, [state.search, fetchList]);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
