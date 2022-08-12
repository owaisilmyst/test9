import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";

type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = ({ style }: FrameComponentType) => {
  return (
    <View style={[styles.frameView29, style]}>
      <View style={styles.frameView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </View>
      <View style={[styles.frameView28, styles.mt10]}>
        <View style={styles.frameView9}>
          <View style={styles.component1View}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle-281.png")}
            />
            <View style={[styles.frameView4, styles.mt8]}>
              <View style={styles.frameView2}>
                <Text style={styles.zAGATTOMessengerText}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView1, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Text style={[styles.text, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text1, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView3}>
                <Text style={styles.addToCart}>Add to Cart</Text>
              </View>
            </View>
          </View>
          <View style={[styles.component3View, styles.ml10]}>
            <Image
              style={styles.rectangleIcon2}
              resizeMode="cover"
              source={require("../assets/rectangle-282.png")}
            />
            <View style={[styles.frameView8, styles.mt8]}>
              <View style={styles.frameView6}>
                <Text style={styles.zAGATTOMessengerText1}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView5, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Text style={[styles.text2, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text3, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView7}>
                <Text style={styles.addToCart1}>Add to Cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameView18, styles.mt10]}>
          <View style={styles.component2View}>
            <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={require("../assets/rectangle-283.png")}
            />
            <View style={[styles.frameView13, styles.mt8]}>
              <View style={styles.frameView11}>
                <Text style={styles.zAGATTOMessengerText2}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView10, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon2}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                  <Text style={[styles.text4, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text5, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView12}>
                <Text style={styles.addToCart2}>Add to Cart</Text>
              </View>
            </View>
          </View>
          <View style={[styles.component4View, styles.ml10]}>
            <Image
              style={styles.rectangleIcon4}
              resizeMode="cover"
              source={require("../assets/rectangle-284.png")}
            />
            <View style={[styles.frameView17, styles.mt8]}>
              <View style={styles.frameView15}>
                <Text style={styles.zAGATTOMessengerText3}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView14, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon3}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                  <Text style={[styles.text6, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text7, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView16}>
                <Text style={styles.addToCart3}>Add to Cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameView27, styles.mt10]}>
          <View style={styles.component1View1}>
            <Image
              style={styles.rectangleIcon5}
              resizeMode="cover"
              source={require("../assets/rectangle-285.png")}
            />
            <View style={[styles.frameView22, styles.mt8]}>
              <View style={styles.frameView20}>
                <Text style={styles.zAGATTOMessengerText4}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView19, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon4}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                  <Text style={[styles.text8, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text9, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView21}>
                <Text style={styles.addToCart4}>Add to Cart</Text>
              </View>
            </View>
          </View>
          <View style={[styles.component3View1, styles.ml10]}>
            <Image
              style={styles.rectangleIcon6}
              resizeMode="cover"
              source={require("../assets/rectangle-285.png")}
            />
            <View style={[styles.frameView26, styles.mt8]}>
              <View style={styles.frameView24}>
                <Text style={styles.zAGATTOMessengerText5}>
                  ZAGATTO Messenger
                </Text>
                <View style={[styles.frameView23, styles.mt4]}>
                  <Image
                    style={styles.vectorIcon5}
                    resizeMode="cover"
                    source={require("../assets/vector2.png")}
                  />
                  <Text style={[styles.text10, styles.ml1]}>4.7</Text>
                </View>
                <Text style={[styles.text11, styles.mt4]}>#5,000</Text>
              </View>
              <View style={styles.frameView25}>
                <Text style={styles.addToCart5}>Add to Cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml1: {
    marginLeft: 1,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
  },
  rectangleIcon: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 138,
    flexShrink: 0,
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView3: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component1View: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleIcon2: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText1: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon1: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text2: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView6: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart1: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView7: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component3View: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon3: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText2: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text4: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView11: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart2: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView12: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView13: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component2View: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleIcon4: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText3: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon3: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text6: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text7: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView15: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart3: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView16: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView17: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component4View: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView18: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon5: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText4: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon4: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text8: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text9: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView20: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart4: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView21: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView22: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component1View1: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleIcon6: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 6,
    maxWidth: "100%",
    height: 156,
    flexShrink: 0,
  },
  zAGATTOMessengerText5: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon5: {
    position: "relative",
    width: 7.47,
    height: 7.47,
    flexShrink: 0,
  },
  text10: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView23: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text11: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView24: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addToCart5: {
    position: "relative",
    fontSize: 6,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  frameView25: {
    borderRadius: 4,
    backgroundColor: "#f69f21",
    width: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView26: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  component3View1: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#fffbf5",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView27: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView28: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView29: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FrameComponent;
