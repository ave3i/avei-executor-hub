import { CheckCircle, AlertTriangle, XCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import glockIcon from "@/assets/glock-icon.png";

type ServiceStatus = "operational" | "degraded" | "outage";

interface Service {
  name: string;
  status: ServiceStatus;
  latency?: string;
}

const services: Service[] = [
  { name: "Executor Core", status: "operational", latency: "12ms" },
  { name: "License Validation", status: "operational", latency: "45ms" },
  { name: "Auto Updates", status: "operational", latency: "23ms" },
  { name: "Script Library", status: "operational", latency: "18ms" },
  { name: "API Gateway", status: "operational", latency: "31ms" },
];

const incidents = [
  {
    date: "Jan 5, 2026",
    title: "All Systems Operational",
    description: "No incidents to report. All services running smoothly.",
    status: "resolved" as const,
  },
];

const StatusIcon = ({ status }: { status: ServiceStatus }) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "degraded":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case "outage":
      return <XCircle className="w-5 h-5 text-red-500" />;
  }
};

const StatusBadge = ({ status }: { status: ServiceStatus }) => {
  const styles = {
    operational: "bg-green-500/10 text-green-500 border-green-500/20",
    degraded: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    outage: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  const labels = {
    operational: "Operational",
    degraded: "Degraded",
    outage: "Outage",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

const Status = () => {
  const allOperational = services.every(s => s.status === "operational");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-up">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150" />
                <img 
                  src={glockIcon} 
                  alt="Glock" 
                  className="h-16 w-auto relative z-10"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                System Status
              </h1>
              <p className="text-muted-foreground">
                Real-time status of Glock services
              </p>
            </div>
            
            {/* Overall Status */}
            <div className={`glass-card p-6 mb-8 animate-scale-in animation-delay-200 ${allOperational ? 'hover-glow' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {allOperational ? (
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-500" />
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {allOperational ? "All Systems Operational" : "Some Systems Affected"}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Last updated: {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <StatusBadge status={allOperational ? "operational" : "degraded"} />
              </div>
            </div>
            
            {/* Services List */}
            <div className="glass-card overflow-hidden mb-8 animate-fade-up animation-delay-300">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Services</h3>
              </div>
              <div className="divide-y divide-border">
                {services.map((service, index) => (
                  <div 
                    key={service.name}
                    className="p-4 flex items-center justify-between hover:bg-card/50 transition-colors animate-fade-up"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <StatusIcon status={service.status} />
                      <span className="text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {service.latency && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {service.latency}
                        </span>
                      )}
                      <StatusBadge status={service.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Incidents */}
            <div className="animate-fade-up animation-delay-500">
              <h3 className="font-semibold text-foreground mb-4">Recent Incidents</h3>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <div key={index} className="glass-card p-4 hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{incident.title}</h4>
                      <span className="text-xs text-muted-foreground">{incident.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Uptime Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-up animation-delay-600">
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-foreground">99.99%</div>
                <div className="text-xs text-muted-foreground">30-day uptime</div>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-foreground">24ms</div>
                <div className="text-xs text-muted-foreground">Avg. response</div>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground">Active incidents</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Status;
