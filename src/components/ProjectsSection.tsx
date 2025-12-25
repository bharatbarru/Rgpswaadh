import { Globe, MapPin } from "lucide-react";

const projects = [
  {
    title: "RGP Swaadh Farms",
    category: "Agriculture",
    description:
      "Design & execution of high-efficiency poultry units using modern automation and climate-ready systems.",
  },
  {
    title: "DTCP Layout Development",
    category: "Infrastructure",
    description:
      "Multiple layouts with clear documentation, wide roads, drainage, street lighting, and ready-to-construct plots.",
  },
  {
    title: "Industrial Shed Construction",
    category: "Construction",
    description:
      "Agricultural and commercial sheds with heavy steel structures, PIR insulated panels, and long-life roofing.",
  },
];

const exportCountries = [
  "Oman",
  "Qatar",
  "UAE",
  "Kenya",
  "Tanzania",
  "Maldives",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-accent rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our successful implementations across agriculture,
            infrastructure, and export divisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="h-48 bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Export Division */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Global Export Network
                </h3>
              </div>
              <p className="text-muted-foreground">
                RGP supplies premium-grade frozen chicken and agri products to
                international clients, backed by strict quality control and
                export compliance. Our products include whole frozen chicken,
                poultry parts, dehydrated vegetables, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {exportCountries.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 bg-background rounded-full px-4 py-2"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {country}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-4">Our Export Strengths</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Reliable sourcing network
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Competitive pricing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Cold-chain logistics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Documentation & customs handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
