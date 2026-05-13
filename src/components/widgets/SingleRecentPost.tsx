"use client"
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    title: string;
}

const SingleRecentPost = ({ blog }: { blog: DataType }) => {
    const { id, thumb, title, date } = blog

    const truncateString = (str: string): string => {
        if (str.length <= 30) {
            return str;
        }
        return `${str.slice(0, 35)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <>
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image src={`/assets/img/blog/${thumb}`} width={300} height={300} alt="Thumb" />
                </Link>
            </div>
            <div className="info">
                <div className="meta-title">
                    <span className="post-date">{date}</span>
                </div>
                <Link href={`/blog-single-with-sidebar/${id}`}>{truncatedTitle}</Link>
            </div>
        </>
    );
};

export default SingleRecentPost;