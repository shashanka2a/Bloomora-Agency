import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "Bloomora transformed our outdated website into a conversion machine. Our leads increased by 300% in just 3 months.",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, DataViz Pro",
    content: "The dashboard they built for us is incredible. Complex analytics made simple and beautiful. Our team loves it.",
    avatar: "MR",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Head of Product, CloudScale",
    content: "Working with Bloomora was seamless. They understood our vision and delivered beyond expectations.",
    avatar: "ET",
    rating: 5
  }
];

const logos = [
  { name: "TechFlow", width: "w-24" },
  { name: "DataViz Pro", width: "w-28" },
  { name: "CloudScale", width: "w-26" },
  { name: "InnovateCorp", width: "w-32" },
  { name: "FutureSync", width: "w-24" },
  { name: "DigitalFirst", width: "w-30" }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className={`${logo.width} h-8 bg-gray-300 rounded flex items-center justify-center`}>
                <span className="text-xs font-medium text-gray-600">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">What our clients say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}