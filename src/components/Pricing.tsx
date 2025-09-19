import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,999",
    period: "one-time",
    description: "Perfect for small businesses looking to establish their digital presence",
    features: [
      "Custom website design",
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month support",
      "Google Analytics setup"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$4,999",
    period: "one-time",
    description: "Ideal for growing businesses that need advanced functionality",
    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "Advanced SEO optimization",
      "CMS integration",
      "E-commerce functionality",
      "3 months support",
      "Performance optimization",
      "Social media integration"
    ],
    buttonText: "Start Project",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Comprehensive solutions for large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom SaaS development",
      "Analytics dashboard",
      "API integrations",
      "6 months support",
      "Training & documentation",
      "Priority support",
      "Dedicated project manager"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border-0 shadow-lg'} bg-white/80 backdrop-blur-sm`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                    : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            All plans include free consultation and project scoping
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              Flexible payment options
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              Free post-launch support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}