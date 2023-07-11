import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {

    const data = useLoaderData()

    return (
        <div>

            <embed src={data.bookUrl} className="ml-20" width="1050px" height="900" type="application/pdf" />


        </div>
    );
};

export default ReadBooks;