import React from "react";
import { View, Text } from "react-native";
import { CuacaProvider } from "@hooks/CuacaProvider";
import App from "./App";

const Index = props => {
    return (
        <CuacaProvider>
            <App />
        </CuacaProvider>
    );
};

export default Index;
