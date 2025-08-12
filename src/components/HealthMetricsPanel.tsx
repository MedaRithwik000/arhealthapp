import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Heart } from "lucide-react";

interface HealthMetric {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  status: "good" | "caution" | "warning";
  description: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  range?: string;
}

interface HealthMetricsPanelProps {
  metrics?: HealthMetric[];
  className?: string;
  transparent?: boolean;
  cardStyle?: "glass" | "solid" | "minimal";
}

const HealthMetricsPanel: React.FC<HealthMetricsPanelProps> = ({
  transparent = false,
  cardStyle = "solid",
  metrics = [
    {
      id: "bmi",
      title: "BMI",
      value: 22.5,
      status: "good",
      description: "Body Mass Index",
      trend: "stable",
      range: "18.5 - 24.9",
    },
    {
      id: "body-fat",
      title: "Body Fat %",
      value: 18,
      unit: "%",
      status: "good",
      description: "Body fat percentage",
      trend: "down",
      trendValue: "2%",
      range: "14% - 20%",
    },
    {
      id: "heart-rate",
      title: "Resting HR",
      value: 68,
      unit: "bpm",
      status: "good",
      description: "Resting heart rate",
      trend: "stable",
      range: "60 - 80 bpm",
    },
    {
      id: "blood-pressure",
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "good",
      description: "Systolic/Diastolic pressure",
      trend: "stable",
      range: "< 120/80",
    },
  ],
  className = "",
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-50 border-green-200 text-green-800";
      case "caution":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "warning":
        return "bg-red-50 border-red-200 text-red-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-500";
      case "caution":
        return "bg-yellow-500";
      case "warning":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "heart-rate":
      case "blood-pressure":
        return <Heart className="h-5 w-5" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  const getCardStyle = () => {
    switch (cardStyle) {
      case "glass":
        return "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl";
      case "minimal":
        return "bg-transparent border-0 shadow-none";
      default:
        return "bg-white shadow-md border-0";
    }
  };

  return (
    <div
      className={`w-full ${transparent ? "bg-transparent" : "bg-white"} ${className}`}
    >
      <Card className={getCardStyle()}>
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-600" />
            Health Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${getStatusColor(
                  metric.status,
                )}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getMetricIcon(metric.id)}
                    <h4 className="text-lg font-semibold">{metric.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(metric.trend)}
                    {metric.trendValue && (
                      <span className="text-xs font-medium">
                        {metric.trendValue}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">{metric.value}</span>
                    {metric.unit && (
                      <span className="text-lg font-medium opacity-70">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusIndicator(
                        metric.status,
                      )}`}
                    ></div>
                    <span className="text-sm font-medium capitalize">
                      {metric.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm opacity-80">{metric.description}</p>
                  {metric.range && (
                    <p className="text-xs opacity-60">
                      Normal range: {metric.range}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthMetricsPanel;
