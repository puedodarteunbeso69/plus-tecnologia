import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

// Find the Microservices article template
const article = blogArticleTemplates.find(a => a.slug === "microservicios-arquitectura-2025")!;

export const metadata = generateArticleMetadata(article);

export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
