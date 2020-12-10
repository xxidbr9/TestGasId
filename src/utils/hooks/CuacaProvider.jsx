import React, { createContext, useReducer } from "react";

const initialState = {
    isLoading: false,
    provinsi: "Jawa Tengah",
    idKota: "501266",
    kota: "Surakarta",
    tempC: "",
    tanggal: "2020-12-11 00:00:00",
    cuaca: "",
    icon: "",
    hariIni: {
        kondisi: []
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        // case "SET_PROVINSI":
        //     return { ...state, provinsi: action.payload };
        case "SET_KOTA":
            return { ...state, kota: action.payload };
        case "SET_CUACA":
            return { ...state, cuaca: action.payload };
        case "SET_SUHU":
            return { ...state, tempC: action.payload };
        case "SET_HARI_INI":
            return { ...state, hariIni: action.payload };
        case "SET_TANGGAL":
            return { ...state, tanggal: action.payload };
        default:
            return state;
    }
};

export const CuacaProviderBase = createContext();
export const CuacaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CuacaProviderBase.Provider value={{ dispatch, state, hello: "okey" }}>
            {children}
        </CuacaProviderBase.Provider>
    );
};
