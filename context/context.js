import { createContext, useState, useEffect } from "react";

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const getCoins = async () => {
    try {
      const res = await fetch("./api/getCoin");
      const data = await res.json();
      return data.data.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <CoinMarketContext.Provider value={{ getCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};
