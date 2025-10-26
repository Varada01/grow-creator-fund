import { CheckCircle2, Users, FileText, TrendingUp, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Create Your Team",
    description: "Form a creator collective with partners and set profit split percentages.",
  },
  {
    icon: FileText,
    title: "Launch Your Campaign",
    description: "Share your vision, goals, and equity offering with potential investors.",
  },
  {
    icon: TrendingUp,
    title: "Get Funded",
    description: "Fans invest starting at ₹500 and become stakeholders in your success.",
  },
  {
    icon: DollarSign,
    title: "Automated Distributions",
    description: "Smart contracts handle all revenue splits and investor returns automatically.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to cash flow in four simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card/40 backdrop-blur-lg border border-border rounded-xl p-6 hover:bg-card/60 transition-all duration-300 group">
                    <div className={`inline-flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative flex-shrink-0 w-16 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ring-4 ring-background z-10">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;