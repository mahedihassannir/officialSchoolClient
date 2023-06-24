import Post from "../Components/SocialMediaCompos/Post";
import PostTedCardCompos from "../Components/SocialMediaCompos/PostTedCardCompos";

// css import form extracss 

import '../ExtraCss/socialCss.css'

const Social = () => {
    return (
        <div className="w-full h-screen">
            <section className=" forLayouy pb-20">
                {/* here is the left section  */}
                <section>
                    <div className="w-full h-20 bg-green-500">

                    </div>
                </section>
                
                {/* here is the left section  */}

                {/* ................................................... */}

                {/* main content */}
                <div className="w-11/12 mx-auto">

                    {/* post compo */}
                    <Post></Post>
                    {/* ends */}

                    {/* here is the post card section  */}
                    <PostTedCardCompos></PostTedCardCompos>
                    {/* here is the post card section ends  */}

                    {/* ................................................... */}


                </div>
                {/* content ends */}

                {/* here is teh right section  */}
                <section>
                    <div className="w-full h-20 bg-red-500">

                    </div>
                </section>
                
                {/* here is teh right section  */}

                {/* ................................................... */}

            </section>
        </div>
    );
};

export default Social;