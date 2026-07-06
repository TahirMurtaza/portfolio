import LayoutV2 from '@/components/Layouts/LayoutV2';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import PromoV1 from '@/components/promo/PromoV1';
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json"

export const metadata = {
    title: "Tahir Murtaza — Project Details"
}

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = PortfolioData.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV2 breadCrumb='project-details' title='Digital marketing and analytical solution'>
                {data && <ProjectDetailsContent projectInfo={data} totalProject={PortfolioData.length} />}
                <PromoV1 />
            </LayoutV2>
        </>
    );
};

export default ProjectDetailsPage;