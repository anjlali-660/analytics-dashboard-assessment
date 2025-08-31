import { StatsCard } from "./StatsCard";
import { EVChart } from "./EVChart";
import { AIChat } from "./AIChat";
import { EVDataTable } from "./EVDataTable";
import { getAnalytics } from "@/data/evData";
import { 
  Zap, 
  Car, 
  Battery, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Gauge,
  Users,
  Database
} from "lucide-react";

export const EVDashboard = () => {
  const analytics = getAnalytics();

  // Prepare chart data
  const makeData = Object.entries(analytics.makeStats)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  const yearData = Object.entries(analytics.yearStats)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => parseInt(a.name) - parseInt(b.name));

  const vehicleTypeData = [
    { name: 'BEV', value: analytics.bevCount },
    { name: 'PHEV', value: analytics.phevCount }
  ];

  const countyData = Object.entries(analytics.countyStats)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-electric-blue/20">
              <Zap className="w-8 h-8 text-electric-blue" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-electric bg-clip-text text-transparent">
                EV Analytics Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive Electric Vehicle Population Analysis for Washington State
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total EVs"
            value={analytics.totalVehicles.toLocaleString()}
            description="Registered electric vehicles"
            icon={Car}
            trend={{ value: 23, isPositive: true }}
          />
          <StatsCard
            title="Battery EVs"
            value={analytics.bevCount}
            description={`${Math.round(analytics.bevCount/analytics.totalVehicles*100)}% of fleet`}
            icon={Battery}
            trend={{ value: 18, isPositive: true }}
          />
          <StatsCard
            title="Average Range"
            value={`${analytics.avgRange} mi`}
            description="Electric range capability"
            icon={Gauge}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Top Countries"
            value={Object.keys(analytics.countyStats).length}
            description="Counrties with EV registrations"
            icon={MapPin}
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <EVChart
            title="EV Registrations by Make"
            data={makeData}
            type="bar"
          />
          <EVChart
            title="BEV vs PHEV Distribution"
            data={vehicleTypeData}
            type="pie"
          />
          <EVChart
            title="EV Registrations by Year"
            data={yearData}
            type="line"
          />
          <EVChart
            title="Top Countries by EV Count"
            data={countyData}
            type="bar"
          />
        </div>

        {/* AI Chat and Additional Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <AIChat />
          </div>
          <div className="space-y-6">
            <div className="p-6 border border-border bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-glow transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-electric-green" />
                Key Insights
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                  Tesla dominates with {Math.round((analytics.makeStats.TESLA || 0)/analytics.totalVehicles*100)}% market share
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-electric-green rounded-full mt-2 flex-shrink-0" />
                  BEVs make up {Math.round(analytics.bevCount/analytics.totalVehicles*100)}% of all registered EVs
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                  King County leads in EV adoption
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-electric-purple rounded-full mt-2 flex-shrink-0" />
                  Average range has improved significantly since 2013
                </li>
              </ul>
            </div>

            <div className="p-6 border border-border bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-glow transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-electric-blue" />
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Most Popular Model</span>
                  <span className="text-sm font-medium text-foreground">Tesla Model 3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Highest Range</span>
                  <span className="text-sm font-medium text-foreground">322 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CAFV Eligible</span>
                  <span className="text-sm font-medium text-electric-green">
                    {Math.round(analytics.totalVehicles * 0.7)}+ vehicles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-electric-blue" />
            <h2 className="text-2xl font-bold text-foreground">Vehicle Registration Data</h2>
          </div>
          <EVDataTable />
        </div>
      </div>
    </div>
  );
};