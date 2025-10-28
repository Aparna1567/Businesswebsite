
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { portfolio } from "@/app/api/data";

export default async function PortfolioDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { slug } = params;
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // ✅ Find the matching portfolio project
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
    { href: `/portfolio/${slug}`, text: project.title },
  ];

  return (
    <>
      <HeroSub
        title={project.title}
        description={project.description}
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <Link
                href="/portfolio"
                className="inline-block bg-prim text-white px-5 py-3 rounded-lg hover:bg-dark transition-colors duration-300"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}










