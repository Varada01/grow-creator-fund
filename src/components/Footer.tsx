import { Rocket, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CreatorFund</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The equity platform for the creator economy. Build, invest, and profit together.
            </p>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="font-semibold mb-4">For Creators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Start a Channel</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Find Collaborators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Launch Campaign</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="font-semibold mb-4">For Investors</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Creators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns Calculator</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CreatorFund. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;