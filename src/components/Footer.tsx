import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <span className="text-white font-semibold">B</span>
              </div>
              <span className="font-semibold text-xl">Bloomora.services</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building exceptional digital experiences that drive business growth. From concept to conversion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Websites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SaaS Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@bloomora.services</li>
              <li>+1 (352) 328-6426</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Bloomora.services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}