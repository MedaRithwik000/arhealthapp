import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Settings,
  User,
  MapPin,
  Calendar,
  Utensils,
  Dumbbell,
  Activity,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HealthMetricsPanel from "@/components/HealthMetricsPanel";
import GoalTrackingWidget from "@/components/GoalTrackingWidget";
import RecommendationPanel from "@/components/RecommendationPanel";

interface UserProfile {
  name: string;
  avatar?: string;
  email?: string;
}

interface QuickAccessItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  onClick?: () => void;
}

interface DashboardProps {
  user?: UserProfile;
  quickAccessItems?: QuickAccessItem[];
  className?: string;
  backgroundType?: "gradient" | "solid" | "pattern" | "image";
  backgroundColors?: {
    primary: string;
    secondary: string;
  };
  backgroundImage?: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  user = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    email: "john.doe@example.com",
  },
  backgroundType = "gradient",
  backgroundColors = {
    primary: "from-gray-50",
    secondary: "to-gray-100",
  },
  backgroundImage,
  quickAccessItems = [
    {
      id: "find-gyms",
      title: "Find Gyms",
      description: "Discover gyms near you",
      icon: <Dumbbell className="h-6 w-6" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      onClick: () => console.log("Find gyms clicked"),
    },
    {
      id: "order-meals",
      title: "Order Meals",
      description: "Healthy food delivery",
      icon: <Utensils className="h-6 w-6" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      onClick: () => console.log("Order meals clicked"),
    },
    {
      id: "schedule-workout",
      title: "Schedule Workout",
      description: "Plan your exercise routine",
      icon: <Calendar className="h-6 w-6" />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      onClick: () => console.log("Schedule workout clicked"),
    },
    {
      id: "health-records",
      title: "Health Records",
      description: "Access your medical data",
      icon: <Activity className="h-6 w-6" />,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      onClick: () => console.log("Health records clicked"),
    },
  ],
  className = "",
}) => {
  const [notifications, setNotifications] = useState(3);

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
    setNotifications(0);
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case "gradient":
        return `bg-gradient-to-br ${backgroundColors.primary} ${backgroundColors.secondary}`;
      case "solid":
        return `bg-${backgroundColors.primary.replace("from-", "").replace("to-", "")}`;
      case "pattern":
        return `bg-gradient-to-br ${backgroundColors.primary} ${backgroundColors.secondary} bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]`;
      case "image":
        return backgroundImage
          ? `bg-cover bg-center bg-no-repeat`
          : `bg-gradient-to-br ${backgroundColors.primary} ${backgroundColors.secondary}`;
      default:
        return `bg-gradient-to-br ${backgroundColors.primary} ${backgroundColors.secondary}`;
    }
  };

  return (
    <div
      className={`min-h-screen ${getBackgroundStyle()} ${className}`}
      style={
        backgroundType === "image" && backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Health App
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100 transition-colors"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 transition-colors"
              onClick={handleSettingsClick}
            >
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-800">{user.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Welcome back, {user.name.split(" ")[0]}!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Here's an overview of your health status and personalized
            recommendations to help you achieve your fitness goals.
          </p>
        </div>

        {/* Health Metrics Panel */}
        <div className="mb-8">
          <HealthMetricsPanel
            className="animate-fade-in"
            transparent={backgroundType === "image"}
            cardStyle={backgroundType === "image" ? "glass" : "solid"}
          />
        </div>

        {/* Goal Tracking Widget */}
        <div className="mb-8">
          <GoalTrackingWidget
            className="animate-fade-in"
            transparent={backgroundType === "image"}
            cardStyle={backgroundType === "image" ? "glass" : "solid"}
          />
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <RecommendationPanel
            className="animate-fade-in"
            transparent={backgroundType === "image"}
            cardStyle={backgroundType === "image" ? "glass" : "solid"}
          />
        </div>

        {/* Quick Access Cards */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Quick Access
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item) => (
              <Card
                key={item.id}
                className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md"
                onClick={item.onClick}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className={`${item.bgColor} p-4 rounded-full mb-4 transition-transform hover:scale-110`}
                  >
                    <div className={item.iconColor}>{item.icon}</div>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-gray-600 font-medium">
                © 2025 Health App. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-gray-700 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-gray-700 transition-colors">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
