import Image from "next/image";
import Link from "next/link";
import Pagination from "../../components/Pagination/Pagination";
import { formatDate } from "@/utils";

export const revalidate = 3600;

const getProjects = async (projectPage = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/projects?projectPage=${projectPage}`
  );
  const data = await res.json();
  return data;
};

async function ProjectGallery({ projectPage }) {
  const { projects, totalProjects } = await getProjects(projectPage);
  return (
    <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
      {projects &&
        projects.map((project) => {
          const date = formatDate(project.createdAt);
          return (
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
          );
        })}
      <Pagination count={totalProjects} type="Projects" />
    </div>
  );
}

export default ProjectGallery;
