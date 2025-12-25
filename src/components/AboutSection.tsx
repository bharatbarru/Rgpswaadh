import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Heart, label: "Integrity", desc: "Honest, ethical operations" },
  { icon: Target, label: "Quality", desc: "Premium standards" },
  { icon: Eye, label: "Innovation", desc: "Modern solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent rounded-full">
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Building Sustainable Value Across Industries
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              At RGP, we blend modern technology with practical expertise to
              deliver high-quality products and services. From advanced poultry
              and agri farms to commercial trading and industrial construction,
              our operations are built on the foundation of trust and performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our flagship division, <strong className="text-foreground">RGP Swaadh Farms</strong>,
              focuses on efficient, sustainable, and high-yield agriculture and
              poultry systems designed for modern needs.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="bg-secondary rounded-xl p-4 text-center group hover:bg-accent transition-colors duration-300"
                >
                  <value.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground text-sm">{value.label}</p>
                  <p className="text-xs text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To become a global leader in modern agriculture, food exports, and
                sustainable infrastructure — trusted for quality, innovation, and
                customer success.
              </p>
            </div>

            <div className="bg-accent rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Enable efficient farming using technology-driven systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Supply high-quality food products to international markets
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Build infrastructure that lasts for generations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
