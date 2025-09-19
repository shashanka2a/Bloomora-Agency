import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Beautiful, responsive websites that capture your brand and convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1ODI4NzgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
    gradient: "from-blue-100 to-cyan-100"
  },
  {
    icon: Zap,
    title: "SaaS Tools",
    description: "Scalable software solutions that streamline operations and accelerate business growth.",
    image: "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MzEzNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Cloud Native", "API Integration", "User Management", "Real-time Updates"],
    gradient: "from-purple-100 to-pink-100"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Data-driven dashboards that transform complex metrics into actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzU4Mjg0NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Real-time Data", "Custom Reports", "Interactive Charts", "Export Options"],
    gradient: "from-green-100 to-emerald-100"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
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
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}