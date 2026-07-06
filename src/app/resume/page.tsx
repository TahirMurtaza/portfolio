import LayoutV2 from '@/components/Layouts/LayoutV2';
import ResumeV1 from '@/components/resume/ResumeV1';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Tahir Murtaza — Resume"
}

const ResumePage = () => {
    return (
        <>
            <LayoutV2>
                <ResumeV1 sectionClass='default-padding-bottom pt-220 pt-md-200 pt-xs-140' />
            </LayoutV2>
        </>
    );
};

export default ResumePage;