import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
          {post.category}
        </span>
        <h3 className="font-bold text-foreground text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-xs">
            <p className="font-medium text-foreground">{post.author.name}</p>
            <p className="text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
