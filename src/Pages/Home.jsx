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

const Home = () => {





    return (



        // for hiding
        <div id="myScrollElement" className="hidinginmobile">
            {/* this is banner section */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rupasdi B.B High school</title>
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
            <section>
                <Facilites></Facilites>
            </section>

            {/* out teachers */}
            <section>

                <Teachers></Teachers>
            </section>

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