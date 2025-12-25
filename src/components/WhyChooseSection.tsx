import { Check } from "lucide-react";

const reasons = [
  "Proven Expertise in agriculture, trading & industrial infrastructure",
  "Reliable Export Network across Oman, Qatar, Kenya, Maldives & Africa",
  "Transparent & Ethical Operations",
  "High-Quality Standards in every process",
  "End-to-End Solutions from planning to execution",
  "Strong Industry Connections with buyers, suppliers & exporters",
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "6+", label: "Countries Served" },
  { value: "50+", label: "Expert Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 gradient-red">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Why Choose RGP?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                We bring together expertise, transparency, and global reach to
                deliver exceptional results for our partners.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-primary-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
