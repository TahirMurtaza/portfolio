import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    date?: string;
    author?: string;
    title?: string;
    text?: string;
    btnIcon?: string;
    thumb?: string;
}

const SingleBlogStandard = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title, text, btnIcon } = blog

    return (
        <>
            <div className="blog-style-one item">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Image Not Found" width={1380} height={700} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link href="#" scroll={false}>{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2>
                        <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h2>
                    <p>{text}</p>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                        Continue Reading <i className={btnIcon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;