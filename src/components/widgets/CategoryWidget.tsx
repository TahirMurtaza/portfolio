import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import CategoryWidgetData from "@/assets/jsonData/widgets/CategoryWidgetData.json"

const CategoryWidget = () => {
    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">category list</h4>
                <div className="sidebar-info">
                    <ul>
                        {CategoryWidgetData.map(data =>
                            <li key={data.id}>
                                <Link href="#" onClick={handleSmoothScroll}>{data.category} <span>{data.count}</span></Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryWidget;