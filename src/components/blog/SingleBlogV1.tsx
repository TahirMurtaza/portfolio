import Image from 'next/image';
import Link from 'next/link';
import Animate from '../animation/Animate';

interface DataType {
    id?: number;
    thumb?: string;
    tag?: string;
    date?: string;
    title?: string;
    animationDelay?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, title, animationDelay, tag } = blog

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay={animationDelay}>
                <div className="home-blog-style-one-item">
                    <div className="home-blog-thumb">
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            <Image src={`/assets/img/blog/${thumb}`} alt="Image not Found" width={800} height={600} />
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="home-blog-meta">
                            <li>
                                <Link href="#">{tag}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                        <div className="info">
                            <h4 className="blog-title">
                                <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                            </h4>
                            <Link href={`/blog-single-with-sidebar/${id}`} className="btn-read-more">Read More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleBlogV1;