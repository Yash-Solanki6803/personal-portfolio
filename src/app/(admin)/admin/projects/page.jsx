import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils";
import { EditButton, DeleteButton } from "@/ui";
import { cookies } from "next/headers";

const getProjects = async (projectPage = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/projects/all`,
    {
      cache: "no-store",
      headers: { Cookie: cookies().toString() },
    }
  );
  if (!res.ok) {
    throw new Error("Failed fetching news articles");
  }
  const data = await res.json();
  return data;
};

async function ProjectGallery({ projectPage }) {
  const { projects } = await getProjects(projectPage);
  return (
    <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
      {projects &&
        projects?.map((project) => {
          const date = formatDate(project.createdAt);
          return (
            <div className=" relative">
              <Link href={`/gallery/projects/${project.slug}`} key={project.id}>
                <div className="hover:bg-neutral-800 duration-200 rounded-lg transition-all ease-in p-4">
                  <div className="  flex items-center gap-x-3">
                    <Image
                      width={1000}
                      height={1000}
                      className="w-24 h-24 object-cover rounded-md"
                      src={project.thumbnailSrc}
                      alt={project.thumbnailAlt}
                    />
                    <div>
                      <h2 className="text-sm font-semibold font-RubikMedium line-clamp-1">
                        {project.title}
                      </h2>
                      <span className="text-xs">{date}</span>
                      <div className="text-xs font-thin mt-2">
                        {project.views || 10} views
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute top-4 right-4  flex flex-col gap-2">
                <EditButton slug={project?.slug} type="projects" />
                <DeleteButton slug={project?.slug} type="projects" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProjectGallery;
