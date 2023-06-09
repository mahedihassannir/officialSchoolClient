import About from "../Components/About";
import Banner from "../Components/Banner";
import Curses from "../Components/Curses";
import Principal from "../Components/Principal";
import Sponsors from "../Components/Sponsors";
import Teachers from "../Components/Teachers";



const Home = () => {
    return (
        <div>
            {/* this is banner section */}

            <section className="">
                <Banner></Banner>
            </section>
            {/* ends */}


            {/* here is the principal section  */}
            <section>
                <Principal></Principal>
            </section>
            {/* here is the principal section  ends */}

            {/* this is our curses  */}
            <section>
                <Curses></Curses>
            </section>
            {/* ends */}

            {/* this is about section */}
            <section>
                <About></About>
            </section>
            {/* ends */}


            {/* out teachers */}
            <section>

                <Teachers></Teachers>
            </section>
            {/* ends */}


            {/*our sponsors */}
            <section>

                <Sponsors></Sponsors>
            </section>
            {/* ends */}


        </div>
    );
};

export default Home;