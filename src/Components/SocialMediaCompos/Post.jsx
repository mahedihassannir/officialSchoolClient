import { Link } from "react-router-dom";

const Post = () => {
    return (
        <div>
            {/* here is the post section  */}
            <section className="flex justify-center my-2">
                <Link to="/postInfo">
                    <button className=" px-10 file-input file-input-bordered file-input-primary w-full max-w-xs">
                        Post
                    </button>

                </Link>
            </section>

            {/* here is the post section ends */}


        </div>
    );
};

export default Post;