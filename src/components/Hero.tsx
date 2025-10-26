import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Wallet } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-lg border border-border">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The Equity Platform for Creators</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Your Creator
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Dreams Into Equity
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Team up to build channels together, get funded by your fans starting at ₹500, 
            and turn the creator economy into an investable asset class.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-lg">
              Start Creating
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg">
              Invest in Creators
              <Wallet className="ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { icon: Users, value: "10K+", label: "Active Creators" },
              { icon: TrendingUp, value: "₹50M+", label: "Total Funded" },
              { icon: Wallet, value: "25K+", label: "Investors" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/40 backdrop-blur-lg border border-border rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;