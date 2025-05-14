import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface ProgressProps {
  progressPercentage: number;
}

const Progress: React.FC<ProgressProps> = ({ progressPercentage }) => (
  <View style={styles.progressBarBackground}>
    <View
      style={[styles.progressBarFill, { width: `${progressPercentage}%` }]}
    />
  </View>
);

export default function Discover() {
  const navigation = useNavigation();

  const tasks = [
    {
      id: "1",
      title: "Gamification redefined with Canto",
      reward: "0.1 USDT",
      points: "25k",
      progress: 40,
      image: require('../../../../assets/images/airdroplogo.png'),
      status: "Active",
    },
    {
      id: "2",
      title: "Gamification redefined with Canto",
      reward: "0.1 USDT",
      points: "25k",
      progress: 50,
      image:require('../../../../assets/images/airdroplogo.png'),
      status: "Active",
    },
    {
      id: "3",
      title: "BitDuck Market place",
      reward: "0.1 USDT",
      points: "25k",
      progress: 60,
      image: require('../../../../assets/images/aidrop2.png'),
      status: "Active",
    },
    {
      id: "4",
      title: "Listen to Iceberg ft. Johnny",
      reward: "0.1 USDT",
      points: "25k",
      progress: 70,
      image: require('../../../../assets/images/airdrop3.png'),
      status: "Active",
    },
    {
      id: "5",
      title: "Rate Bubble Finance ",
      reward: "0.1 USDT",
      points: "25k",
      progress: 100,
      image: require('../../../../assets/images/airdrop4.png'),
      status: "Active",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.taskCard}>
      <Image source={{ uri: item.image }} style={styles.profilePic} />
      <View style={styles.taskContent}>
        <View style={styles.taskHeaderRow}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskStatus}>
            {" "}
            <View
              style={{
                height: 6,
                width: 6,
                borderRadius: 3,
                backgroundColor: "green",
                marginRight: 6,
              }}
            />
            {item.status}
          </Text>
        </View>
        <View style={styles.taskRewardRow}>
          <Text style={styles.rewardText}>{item.reward}</Text>
          <View style={styles.pointsRow}>
            <Ionicons name="gift-outline" size={16} color="white" />
            <Text style={styles.pointsText}> {item.points}</Text>
          </View>
        </View>
        <Progress progressPercentage={item.progress} />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#33718D", "#0B0F1D", "#000000"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Fixed Header */}
        <View style={styles.decorativeHeader}>
          <View style={styles.headerRow}>
            <Image
              source={require("../../../../assets/images/Arrow_left.png")}
              resizeMode="contain"
            />
            <Text style={styles.headerText}>Discovery</Text>
          </View>
          <Text style={styles.bodyText}>
            Complete tasks and receive rewards
          </Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 120,
            paddingHorizontal: 16,
            paddingBottom: 30,
          }}
        >
          {/* Status Filters */}
          <View style={styles.statusRow}>
            <View style={styles.statusTextRow}>
              <Text style={styles.statusText}>Task</Text>

              <Text style={styles.statusText}>Completed</Text>

              <Text style={styles.statusText}>Uncompleted</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../assets/images/Sort.png")}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Task List */}
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 10 }}
            ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  decorativeHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  bodyText: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
  },

  statusTextRow: {
    flexDirection: "row",
    gap: 10,
  },

  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },

  taskCard: {
    backgroundColor: "#080010",
    borderRadius: 10,
    flexDirection: "row",
    padding: 12,
    alignItems: "flex-start",
    gap: 12,
  },

  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },

  taskContent: {
    flex: 1,
  },

  taskHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  taskTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
    paddingRight: 10,
  },

  taskStatus: {
    color: "limegreen",
    fontSize: 12,
    fontWeight: "600",
  },

  taskRewardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },

  rewardText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  pointsText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },

  progressBarBackground: {
    height: 6,
    backgroundColor: "#2c2c2e",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 6,
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "limegreen",
    borderRadius: 4,
  },
});
