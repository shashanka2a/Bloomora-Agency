import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, Camera, Truck, Music, Home, CreditCard } from "lucide-react";

const projects = [
  {
    id: "snapevent",
    title: "SnapEvent",
    description: "Modern event photography platform connecting photographers with event organizers. Features real-time booking, portfolio showcase, and seamless payment processing.",
    category: "Event Platform",
    image: "/snapevent.png",
    icon: Camera,
    tags: ["React", "Node.js", "Stripe"],
    gradient: "from-pink-100 to-rose-100",
    url: "https://snap-event-landing-page.vercel.app/"
  },
  {
    id: "zipline",
    title: "Zipline",
    description: "Florida's longest zipline adventure experience. Adventure booking platform with real-time availability, safety protocols, and seamless booking system.",
    category: "Adventure Platform",
    image: "/zipline.png",
    icon: Truck,
    tags: ["Next.js", "React", "Booking API"],
    gradient: "from-blue-100 to-cyan-100",
    url: "https://bestzipline-nextjs.vercel.app/"
  },
  {
    id: "lovebeats",
    title: "LoveBeats",
    description: "Campus dating app for students with .edu verification. Connect through shared music and movie preferences with Sonic-speed matching technology.",
    category: "Dating Platform",
    image: "/lovebytes.png",
    icon: Music,
    tags: ["React", "ZK Proofs", "Sonic Tech"],
    gradient: "from-purple-100 to-violet-100",
    url: "https://lovebeats-landing-page.vercel.app/"
  },
  {
    id: "homeloan",
    title: "HHC Home Loan Consulting",
    description: "Comprehensive home loan consultation platform with competitive rates, expert guidance, and 24-hour pre-approval process for Indian families.",
    category: "Fintech Solution",
    image: "/hhc.png",
    icon: Home,
    tags: ["React", "Banking API", "RBI Compliant"],
    gradient: "from-green-100 to-emerald-100",
    url: "https://hhc-landing-page.vercel.app/"
  },
  {
    id: "payflow",
    title: "PayFlow",
    description: "Cross-border payment platform for USD to INR transfers. Features real-time exchange rates, bank-grade security, and instant money transfers to India.",
    category: "Payment Gateway",
    image: "/payflow.png",
    icon: CreditCard,
    tags: ["React", "Banking", "RBI Compliant"],
    gradient: "from-orange-100 to-amber-100",
    url: "https://pay-flow-app.vercel.app/"
  }
];

export function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full"
              >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                  >
                    View Live Project
                    <ArrowUpRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border rounded-full px-6 py-3">
            <span className="text-sm font-medium">Want to see more? View our complete portfolio</span>
            <ArrowUpRight className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}