import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
const App = () => {
  const [enable, setenable] = useState(false);

  const onclickMe = () => {
    console.log(enable, "clicked");
    setenable(!enable);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: enable ? "orange" : "grey",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",

            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <view
            style={{
              flex: 1,
              height: 2,

              backgroundColor: "white",
            }}
          ></view>
          <Text
            style={{
              fontSize: 35,
              color: "white",

              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Bedroom{"\n"}Lights
          </Text>
          <view
            style={{
              flex: 1,

              height: 2,

              backgroundColor: "white",
            }}
          ></view>
        </View>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",

            alignSelf: "center",
          }}
          resizeMode="contain"
          source={
            enable
              ? require("./assets/30535-2-idea-bulb-clipart-thumb.png")
              : require("./assets/13444.png")
          }
        />
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            onclickMe();
          }}
          style={{
            height: 60,
            width: 150,
            borderRadius: 50,
            alignSelf: "center",
            marginTop: 100,
            backgroundColor: enable ? "yellow" : "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {enable === false && (
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                backgroundColor: "white",
                marginLeft: 5,
              }}
            ></View>
          )}

          {enable === true && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 28,
               
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                ON
              </Text>
            </View>
          )}
          {!enable && (
            <View
              style={{
                
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 12,
                
               
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                OFF
              </Text>
            </View>
          )}

          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "black",
              marginRight: 5,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
