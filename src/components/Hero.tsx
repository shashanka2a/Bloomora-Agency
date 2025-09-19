import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0e7ff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">Transform your digital presence</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                Build exceptional digital experiences that convert
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                We craft beautiful websites, powerful SaaS tools, and intuitive dashboards that drive growth for modern businesses. From concept to conversion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-muted-foreground">Average Response</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border rounded-2xl p-8 shadow-2xl">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden">
                {/* Digital Agency Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {/* Website Mockup */}
                    <div className="bg-white rounded-lg shadow-md p-3 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="h-2 bg-blue-200 rounded mb-2"></div>
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded mb-1 w-3/4"></div>
                      <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    
                    {/* Mobile App Mockup */}
                    <div className="bg-white rounded-lg shadow-md p-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="h-1 bg-purple-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    
                    {/* Dashboard Mockup */}
                    <div className="bg-white rounded-lg shadow-md p-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="h-1 bg-green-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded mb-1 w-4/5"></div>
                      <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    
                    {/* Analytics Chart */}
                    <div className="bg-white rounded-lg shadow-md p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="flex items-end space-x-1 h-8">
                        <div className="w-1 bg-blue-400 rounded-t" style={{height: '60%'}}></div>
                        <div className="w-1 bg-purple-400 rounded-t" style={{height: '80%'}}></div>
                        <div className="w-1 bg-green-400 rounded-t" style={{height: '40%'}}></div>
                        <div className="w-1 bg-orange-400 rounded-t" style={{height: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-green-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{zIndex: 1}}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <path d="M 50 50 Q 200 100 350 50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 100 200 Q 250 150 400 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}