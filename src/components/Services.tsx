import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CustomCode, CustomPalette, CustomRocket, CustomTrendingUp, CustomShield, CustomZap, CustomArrowRight, CustomWebsiteIllustration, CustomSaaSIllustration, CustomAnalyticsIllustration } from "./icons/CustomIcons";
import { Button } from "./ui/button";
import { Web3GL } from "./Web3GL";

const services = [
  {
    icon: CustomCode,
    title: "Custom Websites",
    description: "Beautiful, responsive websites that capture your brand and convert visitors into customers.",
    illustration: CustomWebsiteIllustration,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
    gradient: "from-blue-100 to-cyan-100"
  },
  {
    icon: CustomRocket,
    title: "SaaS Tools",
    description: "Scalable software solutions that streamline operations and accelerate business growth.",
    illustration: CustomSaaSIllustration,
    features: ["Cloud Native", "API Integration", "User Management", "Real-time Updates"],
    gradient: "from-purple-100 to-pink-100"
  },
  {
    icon: CustomTrendingUp,
    title: "Analytics Dashboards",
    description: "Data-driven dashboards that transform complex metrics into actionable insights.",
    illustration: CustomAnalyticsIllustration,
    features: ["Real-time Data", "Custom Reports", "Interactive Charts", "Export Options"],
    gradient: "from-green-100 to-emerald-100"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <Web3GL type="grid" className="opacity-20" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <service.illustration className="w-full h-full" />
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="w-full justify-between group-hover:bg-muted/50">
                  Learn More
                  <CustomArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}