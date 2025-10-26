import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA card */}
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-1">
            <div className="bg-card/90 backdrop-blur-lg rounded-3xl p-12 md:p-16 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Ready to Get Started?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Turn Your Passion Into
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Profitable Reality
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're creating, collaborating, or investing—CreatorFund makes it simple, 
                fair, and profitable for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="text-lg">
                  Launch Your Channel
                  <ArrowRight className="ml-2" />
                </Button>
                <Button variant="glass" size="lg" className="text-lg">
                  Start Investing
                  <TrendingUp className="ml-2" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Smart Contracts Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Automated Distributions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Transparent Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;