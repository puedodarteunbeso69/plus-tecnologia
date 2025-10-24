import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

// Find the Docker & Kubernetes article template
const article = blogArticleTemplates.find(a => a.slug === "docker-kubernetes-guia-practica-2025")!;

export const metadata = generateArticleMetadata(article);

export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
