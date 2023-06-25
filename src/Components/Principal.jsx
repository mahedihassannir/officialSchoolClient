
// css
import '../ExtraCss/event.css'

const Principal = () => {
    return (
        <div className=" ">
            <div className=" mt-10 w-full h-[90vh] flex   justify-center items-center">

                {/* this is image side  */}
                <div className="w-1/2 h-[700px]  ">

                    <img loading="lazy" className=" radd h-[500px]" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/346656194_183997590871461_8220043281865064854_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gB2YQswKsYUAX_BvsyC&_nc_ht=scontent.fdac157-1.fna&oh=00_AfDWOicIzjwhZ8g0uqlZSC4_77qquJu-Q-uPGoowFF6ZLA&oe=649D79CB" alt="" data-aos="fade-up"
                        data-aos-anchor-placement="top-center" />

                </div>

                {/* this is text side */}
                <div className="w-1/3 -ml-20 h-[500px] ">

                    {/* data-aos="zoom-in-left" */}
                    <div className="mt-24">

                    <h1 data-aos="zoom-out-right" className="pb-5 text-[#db87f0] text-4xl leading-normal font-bold">হাই আমি রূপসদী বৃন্দাবন উচ্চ বিদ্যালয়ের <span className="text-[#340e8d]">প্রধান শিক্ষক</span></h1>
                        <p  className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit ex vel rem ad veritatis aperiam voluptas maiores quam labore ea minima, dicta magnam, nam illum voluptatem in laboriosam modi.</p>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Principal;