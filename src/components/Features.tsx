import { Users, TrendingUp, Wallet, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Build Together",
    description: "Team up with collaborators and split profits automatically with smart contracts. No disputes, just fair rewards.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: TrendingUp,
    title: "Get Funded",
    description: "Receive upfront capital from fans who believe in you. Keep creative control while they share in your success.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Wallet,
    title: "Invest in Creators",
    description: "Back rising YouTubers, podcasters, and artists starting at just ₹500. Earn profit-sharing returns as they grow.",
    gradient: "from-accent to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-lg border border-border mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Three Ways to Participate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everyone Wins in the
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Creator Economy</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative group hover:scale-105 transition-all duration-300 bg-card/40 backdrop-blur-lg border-border overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardContent className="p-8 space-y-4 relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;