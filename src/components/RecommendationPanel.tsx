import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Dumbbell,
  Utensils,
} from "lucide-react";

interface WorkoutPlan {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  details: string;
}

interface DietPlan {
  id: string;
  title: string;
  description: string;
  calories: string;
  restrictions: string[];
  details: string;
}

interface NearbyService {
  id: string;
  name: string;
  distance: string;
  rating: number;
  address: string;
}

interface RecommendationPanelProps {
  workoutPlans?: WorkoutPlan[];
  dietPlans?: DietPlan[];
  nearbyGyms?: NearbyService[];
  nearbyFoodOutlets?: NearbyService[];
  className?: string;
  transparent?: boolean;
  cardStyle?: "glass" | "solid" | "minimal";
}

const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  transparent = false,
  cardStyle = "solid",
  workoutPlans = [
    {
      id: "wp1",
      title: "Weight Loss Program",
      description: "High intensity interval training to maximize calorie burn",
      duration: "30 mins daily",
      difficulty: "Moderate",
      details:
        "This program focuses on short bursts of intense activity followed by brief rest periods. Includes cardio exercises like jumping jacks, burpees, and mountain climbers to elevate heart rate and burn calories efficiently.",
    },
    {
      id: "wp2",
      title: "Muscle Building Routine",
      description: "Progressive resistance training for muscle growth",
      duration: "45 mins, 4x weekly",
      difficulty: "Advanced",
      details:
        "Targets major muscle groups with compound exercises like squats, deadlifts, and bench press. Focuses on progressive overload to stimulate muscle growth and strength development.",
    },
    {
      id: "wp3",
      title: "General Fitness Plan",
      description: "Balanced workout routine for overall health",
      duration: "40 mins, 3x weekly",
      difficulty: "Beginner",
      details:
        "Combines light cardio, basic strength training, and flexibility exercises. Perfect for maintaining general health and fitness without specializing in any particular area.",
    },
  ],
  dietPlans = [
    {
      id: "dp1",
      title: "Calorie Deficit Diet",
      description: "Balanced nutrition with reduced calories for weight loss",
      calories: "1800 cal/day",
      restrictions: ["Low sugar", "Moderate carbs"],
      details:
        "Focuses on high-protein, moderate-fat, and controlled carbohydrate intake. Emphasizes whole foods, lean proteins, and plenty of vegetables while limiting processed foods and added sugars.",
    },
    {
      id: "dp2",
      title: "High Protein Plan",
      description: "Protein-rich diet to support muscle growth",
      calories: "2500 cal/day",
      restrictions: ["High protein", "Moderate fat"],
      details:
        "Designed to provide adequate protein for muscle repair and growth. Includes lean meats, eggs, dairy, legumes, and protein supplements, balanced with complex carbohydrates for energy.",
    },
    {
      id: "dp3",
      title: "Balanced Nutrition Plan",
      description: "Well-rounded diet for overall health maintenance",
      calories: "2000 cal/day",
      restrictions: ["Balanced macros"],
      details:
        "Provides a balanced intake of all macronutrients with emphasis on whole, unprocessed foods. Includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.",
    },
  ],
  nearbyGyms = [
    {
      id: "gym1",
      name: "FitZone",
      distance: "0.8 miles",
      rating: 4.7,
      address: "123 Fitness Ave",
    },
    {
      id: "gym2",
      name: "PowerHouse Gym",
      distance: "1.2 miles",
      rating: 4.5,
      address: "456 Strength Blvd",
    },
    {
      id: "gym3",
      name: "HealthHub",
      distance: "1.5 miles",
      rating: 4.3,
      address: "789 Wellness St",
    },
  ],
  nearbyFoodOutlets = [
    {
      id: "food1",
      name: "Green Plate",
      distance: "0.5 miles",
      rating: 4.6,
      address: "101 Nutrition Ave",
    },
    {
      id: "food2",
      name: "Protein Paradise",
      distance: "0.9 miles",
      rating: 4.4,
      address: "202 Healthy Blvd",
    },
    {
      id: "food3",
      name: "Fresh Fuel",
      distance: "1.3 miles",
      rating: 4.2,
      address: "303 Organic St",
    },
  ],
  className = "",
}) => {
  const [expandedWorkout, setExpandedWorkout] = useState<string | null>(null);
  const [expandedDiet, setExpandedDiet] = useState<string | null>(null);

  const toggleWorkoutExpand = (id: string) => {
    setExpandedWorkout(expandedWorkout === id ? null : id);
  };

  const toggleDietExpand = (id: string) => {
    setExpandedDiet(expandedDiet === id ? null : id);
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
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            Personalized Recommendations
          </CardTitle>
          <CardDescription className="text-gray-600">
            Customized workout and diet plans based on your goals
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="workout" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="workout"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Dumbbell className="h-4 w-4" />
                Workout Plans
              </TabsTrigger>
              <TabsTrigger
                value="diet"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Utensils className="h-4 w-4" />
                Diet Plans
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workout" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
                  >
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Dumbbell className="h-5 w-5" />
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="text-blue-100">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Duration:</span>
                          <span className="text-sm">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            Difficulty:
                          </span>
                          <span className="text-sm">{plan.difficulty}</span>
                        </div>

                        {expandedWorkout === plan.id && (
                          <div className="mt-4 text-sm text-gray-600 border-t pt-3">
                            <p>{plan.details}</p>

                            <div className="mt-4">
                              <h4 className="font-medium mb-2">Nearby Gyms:</h4>
                              <ul className="space-y-2">
                                {nearbyGyms.map((gym) => (
                                  <li
                                    key={gym.id}
                                    className="text-sm flex items-start"
                                  >
                                    <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium">
                                        {gym.name} ({gym.distance})
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {gym.address} • {gym.rating} ★
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleWorkoutExpand(plan.id)}
                        className="flex items-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        {expandedWorkout === plan.id ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            More
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diet" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dietPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
                  >
                    <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Utensils className="h-5 w-5" />
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="text-green-100">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Calories:</span>
                          <span className="text-sm">{plan.calories}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {plan.restrictions.map((restriction, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                            >
                              {restriction}
                            </span>
                          ))}
                        </div>

                        {expandedDiet === plan.id && (
                          <div className="mt-4 text-sm text-gray-600 border-t pt-3">
                            <p>{plan.details}</p>

                            <div className="mt-4">
                              <h4 className="font-medium mb-2">
                                Nearby Food Options:
                              </h4>
                              <ul className="space-y-2">
                                {nearbyFoodOutlets.map((outlet) => (
                                  <li
                                    key={outlet.id}
                                    className="text-sm flex items-start"
                                  >
                                    <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium">
                                        {outlet.name} ({outlet.distance})
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {outlet.address} • {outlet.rating} ★
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-green-50 hover:border-green-300 transition-colors duration-200"
                      >
                        <Utensils className="h-4 w-4 mr-2" />
                        Order Meal
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleDietExpand(plan.id)}
                        className="flex items-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        {expandedDiet === plan.id ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            More
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationPanel;
