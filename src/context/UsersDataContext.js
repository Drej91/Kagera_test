import React, { createContext, useContext, useState } from "react";
import { Layout } from "../utils/layout";
import { users } from "../utils/userData";
const Context = createContext();

export const UsersDataContext = ({ children }) => {
  const [usersList, setUsersList] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLayout, setSelectedLayout] = useState(Layout.COLUMN);
  const [selectedPositionFilters, setSelectedPositionFilterss] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const filtered = !searchTerm
    ? usersList
    : usersList.filter((user) => {
        let fullName = user.name + user.surname;
        return fullName
          .toLowerCase()
          .includes(searchTerm.toLowerCase().replace(/\s/g, ""));
      });

  let jobPositionsFilterOptions = usersList.map((a) => a.position);

  const setFilters = (name) => {
    let filterIndex = selectedPositionFilters.indexOf(name);
    if (selectedPositionFilters.includes(name) && filterIndex !== -1) {
      selectedPositionFilters.splice(filterIndex, 1);
      setSelectedPositionFilterss((selected) => [...selected]);
    } else {
      setSelectedPositionFilterss((selected) => [...selected, name]);
    }
  };

  const applyFilters = () => {
    let jobFilter = usersList.filter((user) =>
      user.position.includes(selectedPositionFilters)
    );
    setUsersList(jobFilter);
  };

  const resetFilters = () => {
    setSelectedPositionFilterss([]);
    setUsersList(users);
  };

  const selectUser = (id) => {
    let selUser = usersList.filter((user) => user.id === id);
    setSelectedUser(...selUser);
  };

  return (
    <Context.Provider
      value={{
        usersList,
        filtered,
        searchTerm,
        setSearchTerm,
        selectedLayout,
        setSelectedLayout,
        jobPositionsFilterOptions,
        setSelectedPositionFilterss,
        selectedPositionFilters,
        setFilters,
        applyFilters,
        resetFilters,
        selectUser,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsersDataContext = () => useContext(Context);
