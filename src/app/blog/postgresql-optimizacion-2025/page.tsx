import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

// Find the PostgreSQL article template
const article = blogArticleTemplates.find(a => a.slug === "postgresql-optimizacion-2025")!;

export const metadata = generateArticleMetadata(article);

export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
