import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Palette, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We start with a deep dive into your business goals, target audience, and competitive landscape to create a tailored strategy.",
    details: [
      "Stakeholder interviews",
      "Market research",
      "Technical requirements",
      "Project roadmap"
    ]
  },
  {
    step: "02",
    icon: Palette,
    title: "Design & Development",
    description: "Our team crafts beautiful, functional designs and brings them to life with clean, scalable code.",
    details: [
      "UI/UX design",
      "Prototype development",
      "Frontend & backend coding",
      "Quality assurance testing"
    ]
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "We deploy your solution and continuously monitor performance to ensure optimal results and user experience.",
    details: [
      "Production deployment",
      "Performance monitoring",
      "User feedback analysis",
      "Continuous improvements"
    ]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures exceptional results every time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0 transform translate-x-4"></div>
              )}
              
              <Card className="relative z-10 h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                    <step.icon className="h-8 w-8 text-blue-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border rounded-full px-6 py-3">
            <span className="text-sm font-medium">Average project timeline: 4-8 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}