import About from "../Components/About";
import Banner from "../Components/Banner";
import Curses from "../Components/Curses";
import Facilites from "../Components/Facilites";
import Principal from "../Components/Principal";
import Sponsors from "../Components/Sponsors";
import Teachers from "../Components/Teachers";
import BannerMain from "./BannerMain";
import CurseIndestracture from "./CurseIndestracture";
import Detailes from "./Detailes";
import VideoIntro from "./VideoIntro";



import '../ExtraCss/bg.css'
import { Helmet } from "react-helmet";

import SlowScrollComponent from '../hooks/ShoeScrolling'
import { Link } from "react-router-dom";

const Home = () => {





    return (



        // for hiding
        <div id="myScrollElement" className="hidinginmobile  ">
            {/* this is banner section */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>গ্রামীণ কম্পিউটার সায়েন্স</title>
            </Helmet>

            <section className="">
                <BannerMain></BannerMain>
            </section>
            {/* ends */}




            {/* here is the principal section  */}
            <section>
                <Principal></Principal>
            </section>
            {/* here is the principal section  ends */}





            {/* click bit */}
            <section className="mb-16">
                <div className="flex justify-center my-5">

                    <p className="w-full px-2 md:w-1/2 text-2xl font-semibold text-">
                        "মাত্র ৯৯ টাকায় আজই কম্পিউটার শিখে নিজের ভবিষ্যত গড়ে তুলুন। ছোট একটি সিদ্ধান্ত বদলে দিতে পারে আপনার পুরো জীবন। সময় নষ্ট না করে আজই শুরু করুন। প্রযুক্তির সঙ্গে এগিয়ে যান, স্বপ্ন পূরণ করুন। সফলতার পথে প্রথম পদক্ষেপ নিন এখনই!"
                    </p>

                </div>

                <div className='grid justify-center items-center'>
                    <Link to={"/payment"}>

                        <button className='animate-bounce text-3xl font-bold text-red-500 w-[300px] h-24 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white'>

                            ভতি হন

                        </button>

                    </Link>
                </div>
            </section>





            <section className="">
                <Banner></Banner>
            </section>
            {/* ends */}


            {/* this is our curses  */}
            <section>
                <VideoIntro></VideoIntro>
            </section>
            {/* ends */}

            <section>
                <Curses></Curses>
            </section>
            {/* ends */}


            {/* this is about section */}
            <section>
                <About></About>
            </section>
            {/* ends */}



            {/* here is এক নজরে আমাদের websites detailes */}
            <section className="">
                <Facilites></Facilites>
            </section>

            {/* out teachers */}
            {/* <section>

                <Teachers></Teachers>
            </section> */}

            {/* ends */}

            <section>

                <Detailes></Detailes>
            </section>
            {/* ends */}


            {/*কোর্স ইন্সট্রাক্টর */}
            <section>

                <CurseIndestracture></CurseIndestracture>
            </section>
            {/* ends */}


            <section>

                <Sponsors></Sponsors>
            </section>
            {/* ends */}

            {/* <SlowScrollComponent scrollElementId="myScrollElement" scrollSpeedFactor={2}></SlowScrollComponent> */}

        </div>
    );
};

export default Home;