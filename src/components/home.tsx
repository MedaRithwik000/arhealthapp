import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Activity, Target, Users } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Health App
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-800"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Your Health Journey
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your body metrics, achieve fitness goals, and get personalized
            recommendations for a healthier lifestyle. All in one comprehensive
            dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 px-8 py-3 text-lg"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg border-2"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Everything You Need for Better Health
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need to
            monitor, track, and improve your health and fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Health Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Monitor your BMI, body fat percentage, and other vital health
                indicators with easy-to-understand visualizations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Goal Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Set and track your fitness goals with interactive progress bars
                and milestone celebrations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Personalized Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Get customized workout routines and diet plans tailored to your
                specific health goals and preferences.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Local Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Find nearby gyms, healthy restaurants, and wellness services to
                support your health journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already started their wellness
            journey with our comprehensive health tracking platform.
          </p>
          <Link to="/register">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Health App</span>
          </div>
          <p className="text-gray-400">
            © 2025 Health App. All rights reserved. Your journey to better
            health starts here.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
