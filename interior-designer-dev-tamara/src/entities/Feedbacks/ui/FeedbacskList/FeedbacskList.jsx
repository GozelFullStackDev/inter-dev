import { FeedBack } from "../FeedBack/FeedBack";

export const FeedbacskList = () => {
    const data = ['1', '2']
    return (
        <div>
            {data.map((value) =>
                <FeedBack key={value} value={value} />
            )}
        </div>
    );
};
