import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CustomMessageCircle, CustomCalendar, CustomClock, CustomArrowRight } from "./icons/CustomIcons";
import { Web3GL } from "./Web3GL";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <Web3GL type="geometric" className="opacity-10" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground">
              Choose how you'd like to connect based on your project urgency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Urgent - iMessage */}
            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                  <CustomMessageCircle className="h-8 w-8 text-red-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Urgent Project?</h3>
                  <p className="text-muted-foreground mb-4">
                    Need something done ASAP? Message me directly on iMessage for immediate response.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-red-800">
                      ⚡ Response time: Within 1 hour
                    </p>
                  </div>
                </div>

                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  <a 
                    href="sms:+13523286426" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Message Me Now
                    <CustomArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Non-Urgent - Schedule Meeting */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <CustomCalendar className="h-8 w-8 text-blue-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Plan Ahead?</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a free consultation to discuss your project in detail.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-blue-800">
                      📅 30-minute free consultation
                    </p>
                  </div>
                </div>

                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <a 
                    href="https://calendly.com/5ha5hank/availability" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule Meeting
                    <CustomArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CustomClock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Response Times</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>📱 iMessage: Within 1 hour</div>
              <div>📧 Email: Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}