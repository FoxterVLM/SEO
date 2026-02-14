import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Clock from '../../public/img/index/services/Clock.svg'

export default function Booking() {
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
            <link rel="canonnical" href="https://example.com/booking"/>
            {/* do generatio!n! TODO */}
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
                content='https://example.com/img/services/Clock.webp'
            />

            <meta
                property='og:url'
                content='https://example.com/services'
            />
        </Helmet>
        <header className="home-header">
            <nav className="header-nav  bg-[#A0F1BD] w-full flex justify-between items-center px-[40px] py-[32px]" aria-label='Top services navigation'>
                <Link
                    aria-current="page"
                    className="nav-company text-[#2E4F21] font-semibold text-[27px]"
                    to="/"
                >
                    Noble Finances
                </Link>
                <div className="nav-div">
                    <Link
                        className="div-services mr-[20px] text-[#2E4F21]"
                        to="/services"
                    >
                        Services
                    </Link>
                    <Link
                        className="div-booking text-white rounded-[30px] p-4 bg-[#2E4F21]"
                        to="/booking"
                    >
                        Book an appointment
                    </Link>
                </div>
            </nav>
            <section className="header-section ">
                <aside className="header-left">
                    <img src={Clock} alt="" className="left-img"/>
                </aside>
                <aside className="header-right">
                    <h2 className="right-title">Book an appointment now </h2>
                    <p className="right-text">Serving individuals and small businesses since 1987</p>
                    <Link to='#' className="bg-white text-[#2F4F1F] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                        Contact Us
                    </Link>
                </aside>
            </section>
        </header>
        <footer className="w-full bg-[#2F4F1F] text-white">
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
