import BlogData from "@/assets/jsonData/blog/BlogData.json";
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import LayoutV2 from '@/components/Layouts/LayoutV2';

export const metadata = {
    title: "Tahir Murtaza — Blog Single With Sidebar"
}

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebarPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV2 breadCrumb='blog-single-with-sidebar' title='No Code Development Website Builder'>
                {data && <BlogSingleWithSidebarContent blogInfo={data} totalBlogs={BlogData.length} />}
                {!data && <div>Blog Not Found</div>}
            </LayoutV2>
        </>
    );
};

export default BlogSingleWithSidebarPage;