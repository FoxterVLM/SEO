import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Money from "../../public/img/index/services/Money.webp";
import City from "../../public/img/index/services/City.webp";
import Penc from "../../public/img/index/services/Penc.webp";
import Kup from "../../public/img/index/services/Kup.webp";
import Kube from "../../public/img/index/services/Kube.webp";
import Taxes from "../../public/img/index/services/Taxes.webp";
import {useCanonicalStore} from "../store/canonicalStore.ts";



export default function Services() {

    const {servicesPATH, bookingPATH} = useCanonicalStore();

    return (
        <div className='services-wrapper'>
            <Helmet>
                {/*  SEO  */}
                <title>Noble Finances - Services</title>
                {/*  main meta and canonical  */}
                <meta
                    name="description"
                    content="Your Financial Journey, Clearly Defined"
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
                <link rel="canonnical" href={`https://seoapp1.netlify.app${servicesPATH}`}/>
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:site_name'
                    content='Noble Finances - Services'
                />
                <meta
                    property='og:locale'
                    content='en_US'
                />
                <meta
                    property='og:description'
                    content='Your Financial Journey, Clearly Defined'
                />
                <meta
                    property='og:image'
                    content='https://seoapp1.netlify.app/img/index/services/Money.webp'
                />

                <meta
                    property='og:url'
                    content={`https://seoapp1.netlify.app${servicesPATH}`}
                />
            </Helmet>

            <header className="home-header">
                <nav className="header-nav  bg-[#A0F1BD] w-full flex justify-between items-center px-[40px] py-[32px]" aria-label='Top services navigation'>
                    <Link
                        className="nav-company text-[#2E4F21] font-semibold text-[27px]"
                        to="/"
                    >
                        Noble Finances
                    </Link>
                    <div className="nav-div flex items-center">
                        <p
                            aria-current="page"
                            className="div-services mr-[20px] text-[#2E4F21]"
                            // to="/services"
                        >
                            Services
                        </p>
                        <Link
                            className="div-booking text-white rounded-[30px] p-4 bg-[#2E4F21]"
                            to={bookingPATH}
                        >
                            Book an appointment
                        </Link>
                    </div>
                </nav>
                <section className="header-section px-[40px] py-[100px] flex items-center justify-between ">
                    <aside className="header-aside">
                        <h1 className="aside-title max-w-[750px] font-semibold text-[80px] leading-none text-[#2E4F21]">
                            Your Financial Journey, Clearly Defined
                        </h1>
                        <p className="aside-text mt-[24px] font-normal text-[#2E4F21] mb-[50px]">
                            Trusted financial guidance for every stage of life and business since 1987
                        </p>
                        <Link
                            className="aside-booking bg-[#2E4F21] text-white rounded-[30px] p-4"
                            to="/booking"
                        >
                            Connect with our experts
                        </Link>
                    </aside>
                    <img
                        src={Money}
                        alt="Earth img"
                        loading="lazy"
                        className="header-img max-w-[560px] max-h-[445px]"
                    />
                </section>
            </header>
            <main className='services-main'>
                <section className="main-numbers">
                    <img src={City} alt="City picture" className="numbers-city max-h-[600px] w-full" loading="lazy"
                         decoding='async'/>
                    <div className="max-w-6xl mx-auto px-4 mt-20">

                        <p className="text-sm text-[#2E4F21] mb-2">How it works</p>
                        <h2 className="text-4xl font-semibold text-[#2E4F21] mb-12">
                            A simple onboarding
                        </h2>
                        <p className='text-[#2E4F21] sm:mb-5'>Serving individuals and small businesses since 1987</p>


                        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

                            <div className="flex gap-6">
                                <span className="text-5xl text-[#2E4F21] font-light">1</span>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#2E4F21] mb-2">
                                        Our tax advisors will guide you a plan
                                    </h3>

                                    <p className="text-[#2E4F21]">
                                        Accurately prepare and file personal and business tax returns
                                        to maximize deductions and ensure compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
                                <img
                                    src={Penc}
                                    alt="penc"
                                    className="max-w-[372px]"
                                    loading="lazy"
                                    decoding='async'
                                />
                            </div>

                        </div>


                        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

                            <div className="flex gap-6">
                                <span className="text-5xl text-[#2E4F21] font-light">2</span>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#2E4F21] mb-2">
                                        Onboard us to your finances
                                    </h3>

                                    <p className="text-[#2E4F21]">
                                        Offer expert guidance and representation to resolve
                                        tax audits and disputes with confidence.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
                                <img
                                    src={Kup}
                                    alt="Kup"
                                    className="max-w-[372px]"
                                    loading="lazy"
                                    decoding='async'
                                />
                            </div>

                        </div>


                        <div className="grid md:grid-cols-2 gap-10 items-center">

                            <div className="flex gap-6">
                                <span className="text-5xl text-[#2E4F21] font-light">3</span>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#2E4F21] mb-2">
                                        We solve the rest
                                    </h3>

                                    <p className="text-[#2E4F21]">
                                        Maintain organized financial records and provide
                                        clear reports to support business growth.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
                                <img
                                    src={Kube}
                                    alt="kube"
                                    className="max-w-[372px]"
                                    loading="lazy"
                                    decoding='async'
                                />
                            </div>

                        </div>

                    </div>
                </section>
                <section className="main-believe text-center py-[100px] border-t-1">
                    <h2 className="believe-title text-[#2E4F21]">Philosophy</h2>
                    <h3 className="believe-second text-[30px] font-medium text-[#2E4F21] mb-[20px]">We believe:</h3>
                    <div className="believe-block flex flex-col justify-center gap-[20px] text-[#2E4F21]">
                        <div className="block-box bg-[#D2F8DC] px-[100px] py-[60px] text-center max-w-[980px] m-auto">
                            <p className="box-number mb-[40px]">01</p>
                            <p className="box-text font-semibold">In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence.</p>
                        </div>
                        <div className="block-box bg-[#D2F8DC] px-[100px] py-[60px] text-center max-w-[980px] m-auto">
                            <p className="box-number mb-[40px]">02</p>
                            <p className="box-text font-semibold">That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership.</p>
                        </div>
                        <div className="block-box bg-[#D2F8DC] px-[100px] py-[60px] text-center max-w-[980px] m-auto">
                            <p className="box-number mb-[40px]">03</p>
                            <p className="box-text font-semibold">In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being.</p>
                        </div>
                    </div>
                </section>
                <section className="bg-[#F7F9F6] py-24">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                        <aside className="space-y-8">

                            <h2 className="text-4xl md:text-5xl font-medium text-[#2E4F21] leading-tight max-w-md">
                                Say goodbye to taxes of the past
                            </h2>

                            <Link
                                to={bookingPATH}
                                className="inline-block bg-[#2E4F21] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#243f1a] transition"
                            >
                                Connect with our experts
                            </Link>

                        </aside>


                        <aside className="flex justify-center md:justify-end">

                            <div className="bg-[#9CF2B8] rounded-3xl p-12 flex items-center justify-center">

                                <img
                                    src={Taxes}
                                    alt="Taxes"
                                    className="max-w-[320px] md:max-w-[380px] w-full"
                                    loading="lazy"
                                    decoding="async"
                                />

                            </div>

                        </aside>

                    </div>
                </section>
            </main>
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
                                to={servicesPATH}
                                className="text-sm opacity-80 hover:opacity-100 transition"
                            >
                                Services
                            </Link>

                            <Link to={bookingPATH} className="bg-white text-[#2F4F1F] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
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
    )
}