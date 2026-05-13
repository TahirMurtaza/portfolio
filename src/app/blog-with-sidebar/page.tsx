import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import LayoutV2 from '@/components/Layouts/LayoutV2';

export const metadata = {
    title: "Antux - Personal Portfolio - Blog With Sidebar"
}

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV2 breadCrumb='blog-with-sidebar' title='No Code Development Website Builder'>
                <BlogWithSidebarContent />
            </LayoutV2>
        </>
    );
};

export default BlogWithSidebarPage;