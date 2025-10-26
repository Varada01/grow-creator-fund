import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target } from "lucide-react";

const creators = [
  {
    name: "Tech with Priya",
    category: "Tech Reviews",
    funded: "₹2.5M",
    target: "₹5M",
    investors: 245,
    returns: "+32%",
    description: "Building India's largest tech review channel focused on budget gadgets",
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Fitness Bros",
    category: "Health & Fitness",
    funded: "₹1.8M",
    target: "₹3M",
    investors: 189,
    returns: "+28%",
    description: "Team of 3 trainers creating workout programs for busy professionals",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "The Storyteller",
    category: "Entertainment",
    funded: "₹3.2M",
    target: "₹4M",
    investors: 312,
    returns: "+45%",
    description: "Collaborative podcast network featuring emerging voices in comedy",
    color: "from-pink-500 to-purple-500",
  },
];

const CreatorShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in rising creators and share in their success
          </p>
        </div>

        {/* Creator cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creators.map((creator, index) => (
            <Card
              key={index}
              className="bg-card/40 backdrop-blur-lg border-border hover:bg-card/60 transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${creator.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/90 text-foreground border-0">
                    {creator.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{creator.name}</h3>
                  <p className="text-sm text-muted-foreground">{creator.description}</p>
                </div>

                {/* Stats */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Funded</span>
                    <span className="font-bold">{creator.funded}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${creator.color} rounded-full transition-all duration-500`}
                      style={{ width: `${(parseInt(creator.funded.replace(/[₹M,]/g, '')) / parseInt(creator.target.replace(/[₹M,]/g, ''))) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Target</span>
                    <span className="font-medium">{creator.target}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Investors</div>
                      <div className="font-bold">{creator.investors}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <div>
                      <div className="text-xs text-muted-foreground">Returns</div>
                      <div className="font-bold text-green-500">{creator.returns}</div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="hero" className="w-full">
                  Invest Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg">
            View All Opportunities
            <Target className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;