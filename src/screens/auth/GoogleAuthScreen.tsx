// import React, { useEffect } from "react";
// import { Alert, TouchableOpacity } from "react-native";
// import styled from "styled-components/native";
// import { LinearGradient } from 'expo-linear-gradient';
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import { makeRedirectUri } from "expo-auth-session";
// import { useAuth } from "@/AuthProvider"; // adjust path if needed

// WebBrowser.maybeCompleteAuthSession();

// export default function GoogleAuthScreen() {
//   const { signIn } = useAuth();

//   // Google Auth setup
// const [request, response, promptAsync] = Google.useAuthRequest({
//   iosClientId: "<YOUR_IOS_CLIENT_ID>",
//   androidClientId: "<YOUR_ANDROID_CLIENT_ID>",
//   webClientId: "<YOUR_WEB_CLIENT_ID>",
//   clientId: "<YOUR_WEB_CLIENT_ID>", // use web client ID here too
//   redirectUri: makeRedirectUri({
//     scheme: "your.app", // customize if you're in a bare workflow or standalone app
//   }),
// });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { authentication } = response;
//       fetchUserInfo(authentication?.accessToken);
//     }
//   }, [response]);

//   const fetchUserInfo = async (token: string | undefined) => {
//     if (!token) return;
//     try {
//       const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const user = await res.json();
//       console.log(user);
//       Alert.alert("Welcome", `Hello ${user.name}`);
//       signIn(); // 👈 triggers auth and routes to "Main"
//     } catch (e) {
//       console.error("Error fetching user:", e);
//     }
//   };

//   return (
//     <Container>
//       <Content>
//          <LogoContainer
//           colors={["#0b0f1d", "#314b83"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//         > 
//           <Logo
//             source={require("../../../assets/images/welcome.png")}
//             resizeMode="contain"
//           />
//          </LogoContainer> 

//         <Title>
//           Make good use of your time.{"\n"}Sign in to Sherdion and start {"\n"}making
//           money.
//         </Title>

//         <GoogleButton onPress={() => promptAsync()}>
//           <GoogleLogo
//             source={require("../../../assets/images/google.png")} // Replace with your image
//             resizeMode="contain"
//           />
//           <ButtonText>Signup/Login with Google</ButtonText>
//         </GoogleButton>
//       </Content>
//     </Container>
//   );
// }

// // ---------------- Styled Components ----------------

// const Container = styled.SafeAreaView`
//   flex: 1;
//   background-color: #0b0f1d;
// `;

// const Content = styled.ScrollView.attrs(() => ({
//   contentContainerStyle: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
// }))``;

// const LogoContainer = styled(LinearGradient)`
//   width: 150px;
//   height: 150px;
//   border-radius: 75px;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 30px;
// `;

// const Logo = styled.Image`
//   width: 90px;
//   height: 90px;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   font-weight: 500;
//   color: #e6e6e6;
//   text-align: center;
//   margin-bottom: 40px;
//   line-height: 26px;
// `;

// const GoogleButton = styled(TouchableOpacity)`
//   flex-direction: row;
//   align-items: center;
//   background-color: #e6e6e6;
//   padding: 12px 20px;
//   border-radius: 6px;
// `;
// const GoogleLogo = styled.Image`
//   width: 34px;
//   height: 34px;
// `;

// const ButtonText = styled.Text`
//   color: #000;
//   font-size: 16px;
//   font-weight: 500;
//   margin-left: 10px;
// `;




import React, { useState, useEffect } from "react";
import { Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import { useAuth } from "@/AuthProvider"; // adjust path if needed

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuthScreen() {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);  // Track loading state

  // Google Auth setup
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "<YOUR_IOS_CLIENT_ID>",
    androidClientId: "<YOUR_ANDROID_CLIENT_ID>",
    webClientId: "<YOUR_WEB_CLIENT_ID>",
    clientId: "<YOUR_WEB_CLIENT_ID>", // use web client ID here too
    redirectUri: makeRedirectUri({
      scheme: "your.app", // customize if you're in a bare workflow or standalone app
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserInfo(authentication?.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string | undefined) => {
    if (!token) return;
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await res.json();
      console.log(user);
      Alert.alert("Welcome", `Hello ${user.name}`);
      signIn(); // 👈 triggers auth and routes to "Main"
    } catch (e) {
      console.error("Error fetching user:", e);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);  // Start loading when button is pressed
    await promptAsync();
    setIsLoading(false);  // Stop loading once the request is complete
  };

  return (
    <Container>
      <Content>
         <LogoContainer
          colors={["#0b0f1d", "#314b83"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        > 
          <Logo
            source={require("../../../assets/images/welcome.png")}
            resizeMode="contain"
          />
         </LogoContainer> 

        <Title>
          Make good use of your time.{"\n"}Sign in to Sherdion and start{"\n"}making
          money.
        </Title>

        <GoogleButton onPress={handleGoogleSignIn}>
          {/* Show Google logo if not loading, else show loading indicator */}
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <GoogleLogo
                source={require("../../../assets/images/google.png")} // Replace with your image
                resizeMode="contain"
              />
              <ButtonText>Signup/Login with Google</ButtonText>
            </>
          )}
        </GoogleButton>
      </Content>
    </Container>
  );
}

// ---------------- Styled Components ----------------

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0b0f1d;
`;

const Content = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
}))``;

const LogoContainer = styled(LinearGradient)`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.Image`
  width: 90px;
  height: 90px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #e6e6e6;
  text-align: center;
  margin-bottom: 40px;
  line-height: 26px;
`;

const GoogleButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  padding: 12px 20px;
  border-radius: 6px;
`;

const GoogleLogo = styled.Image`
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;
