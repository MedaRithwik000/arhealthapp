import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Target, TrendingUp, BarChart3, Edit } from "lucide-react";

interface GoalType {
  id: string;
  name: string;
  progress: number;
  target: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface GoalTrackingWidgetProps {
  goals?: GoalType[];
  onAddGoal?: () => void;
  onEditGoal?: (goalId: string) => void;
  className?: string;
  transparent?: boolean;
  cardStyle?: "glass" | "solid" | "minimal";
}

const GoalTrackingWidget: React.FC<GoalTrackingWidgetProps> = ({
  transparent = false,
  cardStyle = "solid",
  goals = [
    {
      id: "1",
      name: "Weight Loss",
      progress: 65,
      target: "Lose 10kg",
      startDate: "2023-01-01",
      endDate: "2023-06-30",
      description: "Reduce body weight through diet and exercise",
    },
    {
      id: "2",
      name: "Muscle Gain",
      progress: 40,
      target: "Gain 5kg muscle mass",
      startDate: "2023-01-15",
      endDate: "2023-07-15",
      description: "Increase muscle mass through strength training",
    },
    {
      id: "3",
      name: "General Fitness",
      progress: 80,
      target: "Exercise 5 days/week",
      startDate: "2023-02-01",
      endDate: "2023-05-31",
      description: "Maintain overall fitness with regular exercise",
    },
    {
      id: "4",
      name: "Custom Goal",
      progress: 25,
      target: "Run a marathon",
      startDate: "2023-03-01",
      endDate: "2023-12-31",
      description: "Train for and complete a full marathon",
    },
  ],
  onAddGoal = () => console.log("Add goal clicked"),
  onEditGoal = (goalId) => console.log("Edit goal clicked", goalId),
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("weight-loss");

  // Map goals to tab IDs
  const goalTabMap = {
    "weight-loss": "1",
    "muscle-gain": "2",
    "general-fitness": "3",
    custom: "4",
  };

  const getGoalById = (id: string) => {
    return goals.find((goal) => goal.id === id) || goals[0];
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCardStyle = () => {
    switch (cardStyle) {
      case "glass":
        return "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl";
      case "minimal":
        return "bg-transparent border-0 shadow-none";
      default:
        return "bg-white shadow-lg border-0";
    }
  };

  return (
    <div
      className={`w-full ${transparent ? "bg-transparent" : ""} ${className}`}
    >
      <Card className={getCardStyle()}>
        <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Goal Tracking
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Track your fitness goals and monitor your progress
              </CardDescription>
            </div>
            <Button
              onClick={onAddGoal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
              size="sm"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="weight-loss"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Weight Loss</span>
                <span className="sm:hidden">Weight</span>
              </TabsTrigger>
              <TabsTrigger
                value="muscle-gain"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Muscle Gain</span>
                <span className="sm:hidden">Muscle</span>
              </TabsTrigger>
              <TabsTrigger
                value="general-fitness"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">General Fitness</span>
                <span className="sm:hidden">Fitness</span>
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Custom</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(goalTabMap).map(([tabId, goalId]) => (
              <TabsContent key={tabId} value={tabId} className="space-y-4">
                {/* Goal Progress Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {getGoalById(goalId).name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {getGoalById(goalId).target}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEditGoal(goalId)}
                      className="flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200 border-gray-300"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit</span>
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{getGoalById(goalId).progress}%</span>
                    </div>
                    <Progress
                      value={getGoalById(goalId).progress}
                      className="h-2"
                      indicatorClassName={getProgressColor(
                        getGoalById(goalId).progress,
                      )}
                    />
                  </div>

                  {/* Timeline */}
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <div>
                      <p className="font-medium">Start Date</p>
                      <p>{formatDate(getGoalById(goalId).startDate)}</p>
                    </div>
                    <div>
                      <p className="font-medium">Target Date</p>
                      <p>{formatDate(getGoalById(goalId).endDate)}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {getGoalById(goalId).description}
                    </p>
                  </div>
                </div>

                {/* Progress Chart Placeholder */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                      <BarChart3 className="h-12 w-12 mx-auto text-blue-500" />
                    </div>
                    <p className="font-medium text-gray-700 mb-2">
                      Progress Chart Coming Soon
                    </p>
                    <p className="text-sm text-gray-500">
                      Visual progress tracking for {getGoalById(goalId).name}
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalTrackingWidget;
