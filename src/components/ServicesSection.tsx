import { Wheat, Package, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Agriculture & Farming",
    description:
      "Modern poultry sheds, layer/broiler farm setup, organic cultivation, and high-efficiency farm management solutions.",
    features: ["Poultry Systems", "Organic Farming", "Farm Automation"],
  },
  {
    icon: Package,
    title: "Food Processing & Exports",
    description:
      "Frozen chicken, poultry parts, dehydrated vegetables, and packaged agri-products for international markets.",
    features: ["Frozen Products", "Dehydrated Veggies", "Global Export"],
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description:
      "DTCP-compliant land development, farmhouses, villas, industrial sheds, and structural design consultation.",
    features: ["DTCP Layouts", "Industrial Sheds", "Construction"],
  },
  {
    icon: FileText,
    title: "Business Consulting",
    description:
      "Poultry, dairy & agri project planning, shed design, market linkages, and comprehensive project reports.",
    features: ["Project Planning", "Cost Optimization", "Market Linkages"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-accent rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Solutions for Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            From farm to export, we provide end-to-end services that drive success
            across agriculture, processing, and infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-accent text-foreground px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
