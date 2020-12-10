import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    FlatList
} from "react-native";
import Container from "@atoms/Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Wave1 from "@atoms/svg/Wave1";
import Wave2 from "@atoms/svg/Wave2";
import { CuacaProviderBase as CuacaContext } from "@hooks/CuacaProvider";
import momentJS from "moment";

const moment = momentJS.locale("ID");

export default function App() {
    const { state, dispatch } = useContext(CuacaContext);
    // console.log(state.hariIni);
    useEffect(() => {
        (async () => {
            const raw = await fetch(
                "https://ibnux.github.io/BMKG-importer/cuaca/501266.json"
            );
            const data = await raw.json();
            dispatch({ type: "SET_CUACA", payload: data[0].cuaca });
            dispatch({ type: "SET_SUHU", payload: data[0].tempC });
            dispatch({ type: "SET_HARI_INI", payload: data });
            dispatch({ type: "SET_TANGGAL", payload: data[0].jamCuaca });
        })();
    }, [dispatch]);
    return (
        <>
            <Container>
                <View style={[styles.base]}>
                    <View style={[styles.cuacaView]}>
                        <Text style={[styles.textCenter, styles.provinsiText]}>
                            {state.provinsi}
                        </Text>
                        {/* <PickContainer /> */}
                        <Text style={[styles.textCenter, styles.kotaText]}>
                            {state.kota}
                        </Text>
                        <View style={[styles.baseSuhu]}>
                            <Text style={[styles.textCenter, styles.suhuText]}>
                                {state.tempC}
                            </Text>
                            <Text
                                style={[styles.textCenter, styles.drajatText]}>
                                °
                            </Text>
                        </View>
                        <Text style={[styles.textCenter, styles.tanggal]}>
                            Juma't 31 Julu 2020, 09:00
                        </Text>
                        <Text style={[styles.textCenter, styles.cuacaText]}>
                            {state.cuaca}
                        </Text>
                        <View style={[styles.cuacaBase]}>
                            <Image
                                style={[styles.cuacaIcon]}
                                source={require("../assets/img/cuaca/cerah-berawan.png")}
                            />
                        </View>
                    </View>
                </View>
            </Container>

            <View style={[bottom.base]}>
                <View
                    style={{
                        position: "absolute",
                        width: "100%",

                        top: -110
                    }}>
                    <Wave2 />
                </View>
                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: -132
                    }}>
                    <Wave1 />
                </View>
                <Container noGradient={true}>
                    <View style={{ flexDirection: "row" }}>
                        <View
                            style={{ paddingBottom: 12, borderBottomWidth: 3 }}>
                            <Text
                                style={[bottom.textDay, bottom.textDayActive]}>
                                Hari Ini
                            </Text>
                        </View>
                        <Text style={[bottom.textDay, bottom.textTomorrow]}>
                            Besok
                        </Text>
                    </View>
                </Container>
                <View style={[bottom.divider]} />
                <Container noGradient={true}>
                    <View style={[bottom.content]}>
                        {/* {Array.from({ length: 4 }).map((e, i) => (
                            <ViewCuaca key={i} />
                        ))} */}
                        {/* {state.hariIni.map((item,index)=>{
                          
                        })} */}
                        <FlatList
                            data={state.hariIni}
                            renderItem={ViewCuaca}
                            style={{ height: 200 }}
                            keyExtractor={item => item.jamCuaca}
                            horizontal
                            snapToAlignment={200}
                            decelerationRate='fast'
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </Container>
            </View>
        </>
    );
}

const ViewCuaca = ({ item, ...props }) => {
    console.log(item);
    const jam = item.jamCuaca.split(" ")[1].slice(0, 5);
    return (
        <>
            <View style={[cuacaStyle.base]}>
                <Text>{jam}</Text>
                <MaterialCommunityIcons
                    name='weather-cloudy'
                    size={24}
                    color='black'
                />
                <Text style={[cuacaStyle.textSuhu]}>{item.tempC}°</Text>
            </View>
        </>
    );
};

const { width } = Dimensions.get("screen");

const cuacaStyle = StyleSheet.create({
    base: {
        // paddingHorizontal:20
        // backgroundColor:"#ee3",
        // width: width / 4,
        paddingRight: width / 4 - 37,
        height: 110,
        justifyContent: "space-between",
        alignItems: "center"
    },
    textJam: {},
    icon: {},
    textSuhu: {
        fontSize: 30
    }
});

const IMG_SIZE = 150;

const bottom = StyleSheet.create({
    base: {
        bottom: 0,
        height: 200,
        width: width,
        backgroundColor: "#fff",
        position: "absolute",
        paddingVertical: 20
    },
    divider: {
        width: "100%",
        height: 2,
        backgroundColor: "#e9e8e8",
        marginVertical: -2.5,
        zIndex: -10
    },

    textDay: {
        fontSize: 16
    },
    textDayActive: {
        fontWeight: "600"
    },

    textTomorrow: {
        marginLeft: 20
    },
    content: {
        paddingVertical: 30,
        justifyContent: "space-between",
        flexDirection: "row"
    }
});

const styles = StyleSheet.create({
    base: {
        justifyContent: "center"
    },
    cuacaView: {
        paddingVertical: 40
    },
    textCenter: {
        textAlign: "center",
        color: "#fff"
    },
    provinsiText: {
        fontWeight: "800",
        fontSize: 25
    },
    kotaText: {
        fontWeight: "400",
        fontSize: 18
    },
    baseSuhu: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingVertical: 20
    },
    suhuText: {
        fontWeight: "200",
        fontSize: 150
    },
    drajatText: {
        fontWeight: "100",
        fontSize: 80
    },

    tanggal: {},
    cuacaText: {
        paddingVertical: 2.5,
        fontSize: 25,
        fontWeight: "600"
    },
    cuacaBase: {
        paddingVertical: 5
    },
    cuacaIcon: {
        justifyContent: "center",
        alignSelf: "center",
        width: IMG_SIZE,
        height: IMG_SIZE
    }
});
