import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";
// 1) CREATE A CONTEXT
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL + "/cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  const value = {
    cities,
    isLoading,
    setCities,
    setIsLoading,
    currentCity,
    getCity,
    createCity,
  };

  async function getCity(id) {
    async function fetchCity() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL + "/cities/" + id);
        const data = await res.json();
        setCurrentCity(data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCity();
  }

  async function createCity(newCity) {
    async function setCity() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL + "/cities/", {
          method: "POST",
          body: JSON.stringify(newCity),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setCities((cities) => [...cities, data]);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    }
    setCity();
  }
  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context was used outside of the CitiesProvider");
  return context;
}

export { CitiesContext, CitiesProvider, useCities };
