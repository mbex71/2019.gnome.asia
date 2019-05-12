
export const setLang = (lang) => {
    if(localStorage.getItem('lang')){
        localStorage.setItem('lang',lang)
    }
    return ({
        type:"SET_LANG",
        payload:lang
    })
}

export const setLocation = (loc) => {
    return ({
        type:"SET_LOC",
        payload:loc
    })
}