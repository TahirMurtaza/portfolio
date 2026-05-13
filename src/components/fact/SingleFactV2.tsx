import Image from "next/image";
import CountUp from "react-countup";
import Animate from "../animation/Animate";

interface DataType {
    id?: number;
    title?: string;
    end: number;
    icon?: string;
    delay?: string;
}

const SingleFactV2 = ({ fact }: { fact: DataType }) => {
    const { icon, end, title, delay } = fact

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay={delay}>
                <div className="funfact-style-two-item" >
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={256} height={256} />
                    </div>
                    <div className="fun-fact">
                        <div className="counter">
                            <div className="timer">
                                <CountUp end={end} />
                            </div>
                            <div className="operator">%</div>
                        </div>
                        <span className="medium">{title}</span>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleFactV2;