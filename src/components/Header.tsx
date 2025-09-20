import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">B</span>
          </div>
          <span className="font-semibold text-xl">Bloomora.services</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Work
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <a 
              href="https://calendly.com/5ha5hank/availability" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}