import React, { useState } from "react";

const Context = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [query, setQuery] = useState('')

  // const values = {
  //   votes,
  //   maxSol,
  //   quizPhotos,
  //   galleryRover,
  //   isLoading
  // }

  // const setters = {
  //   setVotes,
  //   setMaxSol,
  //   setQuizPhotos,
  //   setGalleryRover,
  //   setIsLoading
  // }

  return (
    <Context.Provider value={{query, setQuery}}>
      {children}
    </Context.Provider>
  );
};



export { AppProvider, Context };