'use client'

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's start your project</h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Email us</div>
                  <div className="text-muted-foreground">hello@bloomora.services</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Call us</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Visit us</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Quick Start</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute consultation to discuss your project requirements.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select id="service" className="w-full p-3 border rounded-lg bg-background">
                    <option value="">Select a service</option>
                    <option value="website">Custom Website</option>
                    <option value="saas">SaaS Tool</option>
                    <option value="dashboard">Analytics Dashboard</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}