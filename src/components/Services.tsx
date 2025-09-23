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
        <style jsx>{`
          .service-card {
            transform-style: preserve-3d;
            transform-origin: center center;
          }
          
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .icon-container {
            transform-style: preserve-3d;
          }
          
          .icon-container:hover {
            transform: scale(1.1) rotateY(5deg);
          }
          
          .feature-item {
            transform: translateX(0);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .feature-item:hover {
            transform: translateX(4px);
          }
          
          .illustration-container {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          
          .illustration-container:hover {
            transform: scale(1.05) rotateX(2deg);
          }
          
          @media (prefers-reduced-motion: reduce) {
            .service-card,
            .icon-container,
            .feature-item,
            .illustration-container {
              transition: none;
              transform: none !important;
            }
          }
        `}</style>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out bg-white"
              style={{
                willChange: 'transform, box-shadow',
                backfaceVisibility: 'hidden',
                perspective: '1000px'
              }}
            >
              {/* Animated gradient border */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
              
              <CardHeader className="space-y-4 relative">
                {/* Icon with hover animation */}
                <div className={`icon-container w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden transition-transform duration-300 ease-out`}>
                  <service.icon className="h-6 w-6 text-gray-700 relative z-10 transition-transform duration-300 ease-out" />
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Illustration with hover effect */}
                <div className="illustration-container aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4 relative group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full h-full transition-transform duration-500 ease-out">
                    <service.illustration className="w-full h-full" />
                  </div>
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Features with staggered animation */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="feature-item flex items-center text-sm text-muted-foreground group-hover:text-gray-700 transition-colors duration-300"
                      style={{
                        animationDelay: `${featureIndex * 50}ms`
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="transition-transform duration-300 ease-out">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced button with multiple hover effects */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:border group-hover:border-blue-200 transition-all duration-300 ease-out relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                    Learn More
                  </span>
                  <CustomArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out relative z-10" />
                  
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                </Button>
              </CardContent>

              {/* Subtle background pattern on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
                }}></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}