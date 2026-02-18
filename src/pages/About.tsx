import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">About Us</h1>
          <p className="text-lg text-primary-foreground/80">The story behind BlogStreamer UK</p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            BlogStreamer UK is a digital media platform dedicated to bringing you the most engaging, viral, and insightful content from across the United Kingdom. We cover everything from celebrity news and shocking stories to life hacks, tech innovations, health tips, and travel guides.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We believe in delivering content that informs, entertains, and inspires. Our team of writers and editors work tirelessly to bring you stories that matter — from the streets of London to the highlands of Scotland.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our diverse team of journalists, bloggers, and content creators are passionate about storytelling. With backgrounds spanning traditional journalism, digital media, and creative writing, we bring a unique perspective to every article we publish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { stat: "2M+", label: "Monthly Readers" },
              { stat: "500+", label: "Articles Published" },
              { stat: "12", label: "Expert Writers" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-3xl font-bold text-gradient">{item.stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
