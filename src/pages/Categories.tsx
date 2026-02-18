import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";

const Categories = () => {
  const cats = categories.filter((c) => c !== "All");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Categories</h1>
          <p className="text-lg text-primary-foreground/80">Browse articles by topic</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cats.map((cat) => {
          const posts = blogPosts.filter((p) => p.category === cat);
          if (posts.length === 0) return null;
          return (
            <section key={cat} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{cat}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
