import { CloudUpload, Network, Smartphone, Lock, Calendar, Share2, Scan, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CloudUpload,
      title: "Built for speed",
      description: "Instantly sync your notes across devices"
    },
    {
      icon: Network,
      title: "Networked notes",
      description: "Form a graph of ideas with backlinked notes"
    },
    {
      icon: Smartphone,
      title: "iOS app",
      description: "Capture ideas on the go, online or offline"
    },
    {
      icon: Lock,
      title: "End-to-end encryption",
      description: "Only you can access your notes"
    },
    {
      icon: Calendar,
      title: "Calendar integration",
      description: "Keep track of meetings and agendas"
    },
    {
      icon: Share2,
      title: "Publishing",
      description: "Share anything you write with one click"
    },
    {
      icon: Scan,
      title: "Instant capture",
      description: "Save snippets from your browser and Kindle"
    },
    {
      icon: Search,
      title: "Frictionless search",
      description: "Easily recall and index past notes and ideas"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-background p-8 border border-border/40 group overflow-hidden transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
