import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Clock from '../../public/img/index/services/Clock.svg'
import {useCanonicalStore} from "../store/canonicalStore.ts";

export default function Booking() {

    const {bookingPATH, servicesPATH} = useCanonicalStore();


  return (
    <div className="booking-wrapper">
        <Helmet>
            {/*  SEO  */}
            <title>Noble Finances - Booking</title>
            {/*  main meta and canonical  */}
            <meta
                name="description"
                content="Serving individuals and small businesses since 1987"
            />
            <meta
                name="robots"
                content="index, follow"
            />
            <link rel="canonnical" href={`https://seoapp1.netlify.app${bookingPATH}`}/>
            <meta
                property='og:type'
                content='website'
            />
            <meta
                property='og:site_name'
                content='Noble Finances - Booking'
            />
            <meta
                property='og:locale'
                content='en_US'
            />
            <meta
                property='og:description'
                content='Serving individuals and small businesses since 1987'
            />
            <meta
                property='og:image'
                content='https://seoapp1.netlify.app/img/index/services/Clock.webp'
            />

            <meta
                property='og:url'
                content={`https://seoapp1.netlify.app${bookingPATH}`}
            />
        </Helmet>
        <header className="w-full bg-[#D9FBE5]">


            <nav className="bg-[#A0F1BD] w-full flex justify-between items-center px-[40px] py-[32px]">


                <Link
                    to="/"
                    className="text-[#2E4F21] font-semibold text-[27px]"
                >
                    Noble Finances
                </Link>

                <div className="flex items-center gap-5">

                    <Link
                        to={servicesPATH}
                        className="text-[#2E4F21] font-medium hover:opacity-80 transition"
                    >
                        Services
                    </Link>

                    <p
                        aria-current="page"
                        // to="/booking"
                        className="bg-[#2E4F21] text-white rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                    >
                        Book an appointment
                    </p>

                </div>
            </nav>


            <section className="px-[60px] py-[60px]">

                <div className="max-w-7xl mx-auto flex items-center justify-between border-2 border-dashed border-blue-400 rounded-xl p-10 gap-10
            lg:flex-row flex-col">

                    <aside className="bg-[#A0F1BD] rounded-2xl p-10 flex items-center justify-center w-[380px] h-[320px]">

                        <img
                            src={Clock}
                            alt="Clock"
                            className="w-[220px] h-[220px] object-contain"
                        />

                    </aside>

                    <aside className="max-w-md text-center lg:text-left">

                        <h1 className="text-[#2E4F21] text-[38px] font-semibold leading-tight mb-4">

                            Book an <br />
                            appointment now

                        </h1>

                        <p className="text-[#2E4F21] opacity-70 mb-6">

                            Serving individuals and small businesses since 1987

                        </p>

                        <Link
                            to="/contact"
                            className="inline-block bg-[#2E4F21] text-white px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
                        >
                            Contact Us
                        </Link>

                    </aside>

                </div>

            </section>

        </header>

        <footer className="w-full bg-[#2F4F1F] text-white h-full min-h-[287px]">
            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex items-center justify-between mb-12">

                    <span className="text-lg font-semibold">
            NobleFinances
          </span>


                    <nav
                        aria-label="Footer navigation"
                        className="flex items-center gap-6"
                    >
                        <Link
                            to='/services'
                            className="text-sm opacity-80 hover:opacity-100 transition"
                        >
                            Services
                        </Link>

                        <Link to='/booking' className="bg-white text-[#2F4F1F] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                            Book An Appointment
                        </Link>
                    </nav>
                </div>


                <div className="flex items-end justify-between text-xs opacity-80">
                    <div>
                        <p className="font-medium">
                            Financial Clarity You Can Trust
                        </p>
                        <p>
                            Trusted financial guidance for every stage of life and business
                            since 1987
                        </p>
                    </div>

                    <span>© 2025 All Rights Reserved</span>
                </div>
            </div>
        </footer>
    </div>
  );
}
