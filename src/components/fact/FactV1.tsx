import FactV1Data from "@/assets/jsonData/fact/FactV1Data.json"
import SingleFactV1 from "./SingleFactV1";

const FactV1 = () => {
    return (
        <>
            <div className="fun-fact-style-one-items">
                {FactV1Data.map(fact =>
                    <SingleFactV1 fact={fact} key={fact.id} />
                )}
            </div>
        </>
    );
};

export default FactV1;