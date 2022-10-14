import { useState, UseEffect, createContext, useEffect } from "react";
import axios from 'axios'
const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])

    const ObtenerCategorias = async () => {
        try{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const { data } = await axios(url)
            setCategorias(data.drinks)

            // console.log(data.drinks)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() =>{
        ObtenerCategorias( )
    }, [])

    return(
        <CategoriasContext.Provider
            value={{categorias}}
        >
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}
export default CategoriasContext