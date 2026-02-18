import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold">
              <span className="text-gradient">Blog</span>
              <span className="text-foreground">Streamer</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm max-w-md">
              Your gateway to the UK's most viral stories, trending topics, and insightful articles. We deliver the content that matters.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Categories</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Categories</h4>
            <div className="flex flex-col gap-2">
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Celebrity News</Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tech</Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Life Hacks</Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Travel</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BlogStreamer UK. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
