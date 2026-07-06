import LayoutV2 from '@/components/Layouts/LayoutV2';
import ServicesV1 from '@/components/services/ServicesV1';

export const metadata = {
    title: "Tahir Murtaza — Services"
}

const ServicePage = () => {
    return (
        <>
            <LayoutV2 breadCrumb='Service' title='Professional service websites design'>
                <ServicesV1 sectionClass='default-padding-bottom' />
            </LayoutV2>
        </>
    );
};

export default ServicePage;