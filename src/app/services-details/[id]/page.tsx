import LayoutV2 from '@/components/Layouts/LayoutV2';
import ServicesDetailsContent from '@/components/services/ServicesDetailsContent';
import ServicesData from "@/assets/jsonData/services/ServicesData.json";

export const metadata = {
    title: "Tahir Murtaza — Service Details"
}

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServicesDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ServicesData.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV2 breadCrumb='services-details' title='Professional service websites design'>
                {data && <ServicesDetailsContent serviceInfo={data} />}
            </LayoutV2>
        </>
    );
};

export default ServicesDetailsPage;