import Counter from "../counter/Counter";

interface DataTYpe {
    id: number;
    end: number;
    suffix?: string;
    label?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataTYpe }) => {
    const { suffix, label, end } = fact;

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer">
                        <Counter end={end} />
                    </div>
                    <div className="operator">{suffix}</div>
                </div>
                <span className="medium">{label}</span>
            </div>
        </>
    );
};

export default SingleFactV1;