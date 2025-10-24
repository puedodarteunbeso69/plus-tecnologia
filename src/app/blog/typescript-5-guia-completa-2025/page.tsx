import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

// Find the TypeScript 5 article template
const article = blogArticleTemplates.find(a => a.slug === "typescript-5-guia-completa-2025")!;

export const metadata = generateArticleMetadata(article);

export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
