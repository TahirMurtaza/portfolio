import AboutV1 from '@/components/about/AboutV1';
import BannerV1 from '@/components/banner/BannerV1';
import ContactV1 from '@/components/contact/ContactV1';
import LayoutV1 from '@/components/Layouts/LayoutV1';
import PortfolioV1 from '@/components/portfolio/PortfolioV1';
import ResumeV1 from '@/components/resume/ResumeV1';
import ServicesV1 from '@/components/services/ServicesV1';
import TestimonialsUpwork from '@/components/testimonial/TestimonialsUpwork';

export const metadata = {
    title: "Tahir Murtaza — Full Stack AI Engineer"
}

const Home = () => {
    return (
        <>
            <LayoutV1>
                <BannerV1 />
                <AboutV1 />
                <ServicesV1 sectionClass="default-padding" hasTitle={true} />
                <PortfolioV1 sectionClass="bg-gray default-padding" hasTitle={true} />
                <ResumeV1 sectionClass="default-padding" />
                <TestimonialsUpwork sectionClass="bg-gray default-padding" />
                <ContactV1 sectionClass="default-padding" />
            </LayoutV1>
        </>
    );
};

export default Home;