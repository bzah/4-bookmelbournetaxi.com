import { useParams } from "react-router-dom";
import BlogPostLayout from "@/components/BlogPostLayout";
import NotFound from "@/pages/NotFound";
import { getPostBySlug, getRelatedPosts } from "@/data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug, 2);
  return <BlogPostLayout post={post} related={related} />;
};

export default BlogPost;
