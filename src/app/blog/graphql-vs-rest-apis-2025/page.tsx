import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

// Find the GraphQL vs REST article template
const article = blogArticleTemplates.find(a => a.slug === "graphql-vs-rest-apis-2025")!;

export const metadata = generateArticleMetadata(article);

export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
