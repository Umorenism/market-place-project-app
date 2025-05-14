




import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";

interface ProgressProps {
  progressPercentage: number;
}

const Progress: React.FC<ProgressProps> = ({ progressPercentage }) => (
  <View
    style={{
      height: 8,
      width: "100%",
      backgroundColor: "#ddd",
      borderRadius: 10,
    }}
  >
    <View
      style={{
        width: `${progressPercentage}%`,
        height: "100%",
        backgroundColor: "green",
        borderRadius: 10,
      }}
    />
  </View>
);

export default function Home() {
  const poolData = [
    {
      id: "1",
      title: "Social Media Boost",
      reward: "0.01 USDT",
      participants: "245K",
      progress: 30,
      image: require("../../../../assets/images/elisp.png"), // Add image path
    },
    {
      id: "2",
      title: "Referral Program",
      reward: "0.05 USDT",
      participants: "120K",
      progress: 60,
      image: require("../../../../assets/images/elisp.png"), // Add image path
    },
    {
      id: "3",
      title: "Game Night Challenge",
      reward: "0.02 USDT",
      participants: "180K",
      progress: 80,
      image: require("../../../../assets/images/elisp2.png"), // Add image path
    },
    {
      id: "4",
      title: "Survey Completion",
      reward: "0.01 USDT",
      participants: "500K",
      progress: 100,
      image: require("../../../../assets/images/elisp.png"), // Add image path
    },
  ];

  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const isFocused = useIsFocused();
  const animationRef = useRef<Animatable.View>(null);

  useEffect(() => {
    if (isFocused && animationRef.current) {
      (animationRef.current as Animatable.View).fadeInUp?.(500);
    }
  }, [isFocused]);
  return (
    
    
  <>
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    <LinearGradient
      colors={["#33718D", "#0B0F1D", "#000000"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Animatable.View ref={animationRef} style={{ flex: 1 }}>
          
          {/* Fixed Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={require("../../../../assets/images/lmagelogo.png")} />
              <Text style={styles.greeting}>Hi, Haxan</Text>
            </View>
            <View style={styles.headerRight}>
              <Ionicons name="notifications-outline" size={24} style={{ color: "white" }} />
              <Ionicons name="settings-outline" size={24} style={{ color: "white" }} />
            </View>
          </View>

          {/* Scrollable content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 30,
            }}
          >
            {/* Balance */}
            <View style={styles.balanceContainer}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Total Balance</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  <Ionicons
                    name={isBalanceVisible ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    style={{ color: "white" }}
                  />
                </TouchableOpacity>
              </View>

              {isBalanceVisible ? (
                <View>
                  <Text style={styles.balanceAmount}>$0.65</Text>
                  <Text style={styles.balanceSubtext}>0.64 USDT</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.balanceAmount}>****</Text>
                  <Text style={styles.balanceSubtext}>*****</Text>
                </View>
              )}
            </View>

            {/* Stats Cards */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <LinearGradient colors={["#6F1441", "#EC4899"]} style={styles.card}>
                <Text style={styles.cardTitle}>Total Pools</Text>
                <View style={styles.cardContentRow}>
                  <Text style={styles.cardValue}>3</Text>
                  <Text style={styles.cardIcon}>$</Text>
                </View>
              </LinearGradient>

              <LinearGradient colors={["#19046F", "#3109D5"]} style={styles.card}>
                <Text style={styles.cardTitle}>Tasks Completed</Text>
                <View style={styles.cardContentRow}>
                  <Text style={styles.cardValue}>3</Text>
                  <Text style={styles.cardIcon}>✓</Text>
                </View>
              </LinearGradient>

              <LinearGradient colors={["#320E53", "#9333EA"]} style={styles.card}>
                <Text style={styles.cardTitle}>Reward Earned</Text>
                <View style={styles.cardContentRow}>
                  <Text style={styles.cardValue}>$1.56</Text>
                  <Text style={styles.cardIcon}>$</Text>
                </View>
              </LinearGradient>
            </View>

            {/* Active Pools Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Active Pools</Text>
              <Text style={styles.viewAll}>View all</Text>
            </View>

            {/* Active Pools */}
            <FlatList
              horizontal
              data={poolData}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatList}
              renderItem={({ item }) => (
                <View style={styles.poolCard}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={styles.profileavatar}
                      resizeMode="contain"
                    />
                    <Text style={[styles.poolTitle, { flex: 1 }]} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <View
                        style={{
                          height: 6,
                          width: 6,
                          borderRadius: 3,
                          backgroundColor: "green",
                          marginRight: 6,
                        }}
                      />
                      <Text style={{ fontWeight: "600", color: "green" }}>Active</Text>
                    </View>
                  </View>
                  <View style={styles.poolInfoRow}>
                    <Text style={styles.poolLabel}>Reward</Text>
                    <Text style={styles.poolLabel}>Participants</Text>
                  </View>
                  <View style={styles.poolInfoRow}>
                    <Text style={styles.poolValue}>{item.reward}</Text>
                    <Text style={styles.poolValue}>
                      <Ionicons name="gift-outline" size={16} /> {item.participants}
                    </Text>
                  </View>
                  <Progress progressPercentage={item.progress} />
                  <Text style={styles.progressText}>{item.progress}%</Text>
                </View>
              )}
            />

            {/* Recent Activity */}
            <View style={styles.activityCard}>
              {[1, 2, 3].map((_, index) => (
                <View style={styles.activityRow} key={index}>
                  <View style={styles.activityLeft}>
                    <View
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "black",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      }}
                    >
                      <FontAwesome name="telegram" size={20} color="white" />
                    </View>
                    <Text style={{ color: "#fff" }}>Followed @canto_game</Text>
                  </View>
                  <Text style={styles.activityTime}>25 min</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </Animatable.View>
      </SafeAreaView>
    </LinearGradient>
  </>


  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    position: "relative",
    // backgroundColor: "#0B0F1D",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#0B0F1D",
  },
  gradientOverlay: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.3,
    zIndex: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding:20
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  profileavatar: {
    width: 25,
    height: 25,
    borderRadius: 90,
    backgroundColor: "#ccc",
  },
  greeting: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  headerRight: {
    flexDirection: "row",
    gap: 15,
  },
  balanceContainer: {
    marginBottom: 20,
    color: "white",
  },
  balanceTitle: {
    fontSize: 14,
    color: "white",
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  balanceSubtext: {
    fontSize: 14,
    color: "white",
  },
  cardsContainer: {
    marginVertical: 5,
  },

  card: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    justifyContent: "space-between",
    minWidth: 0,
    marginTop: 20,
  },

  cardContentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardIcon: {
    backgroundColor: "#C59BEC",
    height: 20,
    width: 20,
    borderRadius: 99,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 12,
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 10,
    color: "#fff",
    marginBottom: 15,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A4A4A4",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  viewAll: {
    color: "white",
  },
  flatList: {
    paddingBottom: 10,
    
  },
  poolCard: {
    // width: 300,
    // backgroundColor: "#1B142D",
    // borderColor: "#696F78",
    // borderWidth: 1.5,
    // borderRadius: 12,
    // padding: 10,
    // marginRight: 15,

    width: 300,
  backgroundColor: "rgba(27, 20, 45, 0.85)", // semi-transparent
  borderColor: "#696F78",
  borderWidth: 1.5,
  borderRadius: 12,
  padding: 10,
  marginRight: 15,
  },
  poolImage: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  poolTitle: {
    fontSize: 16,
    fontWeight: "600",
    // marginBottom: 6,
    color: "white",
    // paddingBottom: 5,
  },
  poolInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    marginTop: 10,
  },
  poolLabel: {
    fontSize: 12,
    color: "#fff",
  },
  poolValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    marginTop: 16,
  },
  progressText: {
    textAlign: "right",
    marginTop: 6,
    fontSize: 12,
    color: "#fff",
  },
  activityCard: {
    // borderRadius: 20,
    // padding: 12,
    // height: 150,
    // marginVertical: 20,
    // backgroundColor: "#2C2C30",
    borderRadius: 20,
    padding: 12,
    height: 150,
    marginVertical: 20,
    backgroundColor: "rgba(44, 44, 48, 0.8)", // semi-transparent
  },
  activityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  activityLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  activityTime: {
    fontSize: 12,
    color: "#333333",
  },
});