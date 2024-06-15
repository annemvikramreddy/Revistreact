import {createContext , useEffect, useState} from "react";
import Cookie from 'js-cookie'
export const storeContext = createContext(null);


const Context =(props)=>{


    const [Cookiess,setCookiess] = useState(0)
    
useEffect(()=>{
    if(Cookie.get("user")!=null){
        let token = Cookie.get("user")
        setCookiess(token)
    }
},[])

let Context = {
    Cookiess,
    setCookiess
}

    return(<storeContext.Provider value = {Context}>
        {props.children}
    </storeContext.Provider>)
}

export default Context;