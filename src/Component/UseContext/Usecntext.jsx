import React, { createContext, useState } from 'react'
import Chinease from './chi/chinease'
import English from './eng/english'
import Korean from './ko/korean'

export const Data = createContext();

const Usecntext = (props) => {
    const [value, SetValue]= useState("English");

  return (
    <Data.Provider value={[value,SetValue]}>
        {props.children}
    </Data.Provider>
  )
}

export default Usecntext
