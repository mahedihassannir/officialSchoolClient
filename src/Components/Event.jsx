
const Event = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div>
                <h1>{data.name}</h1>
            </div>
        </div>
    );
};

export default Event;