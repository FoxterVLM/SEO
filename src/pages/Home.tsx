import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Earth from "../../public/img/index/Earth.svg";
import One from "../../public/img/index/1.svg";
import Two from "../../public/img/index/2.svg";
import Three from "../../public/img/index/3.svg";
import Person from "../../public/img/index/Person.svg";
import Img from "../../public/img/index/Img.svg";
import Wood from "../../public/img/index/Wood.svg";
import {useCanonicalStore} from "../store/canonicalStore.ts";
import {useEffect} from "react";


export default function Home() {

    const {servicesPATH, setServices} = useCanonicalStore();
    useEffect(() => {
        setServices();
    }, [])

  return (
    <div className="home-wrapper">
        <Helmet>
            {/*  SEO  */}
            <title>Noble Finances - Home</title>
            {/*  main meta and canonical  */}
            <meta
                name="description"
                content="Financial Clarity You Can Trust"
            />
            <meta
                name="robots"
                content="index, follow"
            />
            <link rel="canonical" href='https://seoapp1.netlify.app/' />
            <meta
                property='og:type'
                content='website'
            />
            <meta
                property='og:site_name'
                content='Noble Finances - Home'
            />
            <meta
                property='og:locale'
                content='en_US'
            />
            <meta
                property='og:description'
                content='Financial Clarity You Can Trust'
            />
            <meta
                property='og:image'
                content='https://seoapp1.netlify.app/img/index/Earth.svg'
            />

            <meta
                property='og:url'
                content='https://seoapp1.netlify.app/'
            />
        </Helmet>

        <header className="home-header bg-[#A0F1BD]">
            <nav className="header-nav w-full flex justify-between items-center px-[40px] py-[32px]"
                 aria-label='Top navigation'>
                <p
                    aria-current="page"
                    className="nav-company text-[#2E4F21] font-semibold text-[27px]"
                    // to="/"
                >
                    Noble Finances
                </p>
                <div className="nav-div">
                    <Link
                        className="div-services mr-[20px] text-[#2E4F21]"
                        to={servicesPATH}
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
            <section className="header-section px-[40px] py-[100px] flex items-center justify-between ">
                <aside className="header-aside">
                    <h1 className="aside-title max-w-[750px] font-semibold text-[80px] leading-none text-[#2E4F21]">
                        Financial Clarity You Can Trust
                    </h1>
                    <p className="aside-text mt-[24px] font-normal text-[#2E4F21] mb-[50px]">
                        Trusted financial guidance for every stage of life and business
              since 1987
            </p>
            <Link
              className="aside-booking bg-[#2E4F21] text-white rounded-[30px] p-4"
              to="/booking"
            >
              Connect with our experts
            </Link>
          </aside>
          <img
            src={Earth}
            alt="Earth img"
            loading="lazy"
            className="header-img"
          />
        </section>
      </header>

      <main className="home-main">
        <section className="main-handle text-[#2E4F21] flex flex-col gap-[28px] items-center py-[100px] mt-[20px]">
          <h2 className="handle-services font-bold">Services</h2>
          <p className="handle-let font-semibold text-[60px] text-center max-w-[850px] m-auto">
            Let us handle the numbers, so you can handle your success.
          </p>
          <p className="handle-serving font-bold">
            Serving individuals and small businesses since 1987
          </p>
          <Link
            to="/booking"
            className="handle-booking bg-[#2E4F21] text-white rounded-[30px] p-4"
          >
            Schedule a call
          </Link>
        </section>
        <section className="w-full px-4 py-16 flex flex-col gap-10">
          <div className=" mr-auto max-w-7xl rounded-3xl bg-green-100 p-[80px] md:p-16 flex flex-col md:flex-row items-center gap-10 justify-start">
            <div className="flex-1 flex justify-center">
              <img
                src={One}
                alt="Tax illustration"
                className="max-w-sm w-full"
                loading='lazy'
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold text-green-900 mb-4">
                Tax Preparation & <br /> Filing
              </h3>

              <p className="text-green-800 mb-8 max-w-lg">
                Accurately prepare and file personal and business tax returns to
                maximize deductions and ensure compliance.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  1099 taxes
                </span>

                <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Dependents
                </span>

                <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Trust Taxes
                </span>
              </div>
            </div>
          </div>
        {/*  2  */}
            <div className=" ml-auto max-w-7xl rounded-3xl bg-green-100 p-[80px] md:p-16 flex flex-col md:flex-row-reverse items-center gap-10 justify-end ">
                <div className="flex-1 flex justify-center">
                    <img
                        src={Two}
                        alt="IRS Audit Assistance"
                        className="max-w-sm w-full"
                        loading='lazy'
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-semibold text-green-900 mb-4">
                        IRS Audit Assistance
                    </h3>

                    <p className="text-green-800 mb-8 max-w-lg">
                        Offer expert guidance and representation to resolve tax audits and disputes with confidence.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  1099 taxes
                </span>

                        <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Dependents
                </span>

                        <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Trust Taxes
                </span>
                    </div>
                </div>
            </div>
        {/*  3  */}
            <div className=" mr-auto max-w-7xl rounded-3xl bg-green-100 p-[80px] md:p-16 flex flex-col md:flex-row items-center gap-10 justify-start">
                <div className="flex-1 flex justify-center">
                    <img
                        src={Three}
                        alt="Tax illustration"
                        className="max-w-sm w-full"
                        loading='lazy'
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-semibold text-green-900 mb-4">
                        Bookkeeping & <br /> Accounting
                    </h3>

                    <p className="text-green-800 mb-8 max-w-lg">
                        Maintain organized financial records and provide clear reports to support business growth and financial health.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  1099 taxes
                </span>

                        <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Dependents
                </span>

                        <span className="px-4 py-2 bg-white rounded-full text-sm text-green-800 shadow-sm">
                  Trust Taxes
                </span>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-24 px-4">
              <div className="max-w-7xl mx-auto">
                  <h2 className="text-center text-4xl md:text-5xl font-medium text-green-900 mb-16">
                      Hear From Our Happy Clients
                  </h2>
                  <div className="flex flex-col md:flex-row items-start gap-12">
                      <aside className="w-full md:w-1/3 space-y-6">
                          <div className="bg-green-900 text-white rounded-xl p-6">
                              <h3 className="text-lg font-medium">
                                  Graphic Designer
                              </h3>
                              <p className="text-sm text-green-200 mt-1">
                                  Ontario, Canada
                              </p>
                          </div>
                          <div className="border-b pb-6">
                              <h3 className="text-lg font-medium text-gray-800">
                                  Commercial Photographer
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                  Ontario, Canada
                              </p>
                          </div>
                          <div className="border-b pb-6">
                              <h3 className="text-lg font-medium text-gray-800">
                                  Stylist
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                  Austin, Texas
                              </p>
                          </div>
                      </aside>
                      <div className="hidden md:block w-px bg-gray-300"></div>
                      <aside className="w-full md:w-2/3">
                          <p className="text-2xl md:text-3xl text-green-900 leading-relaxed mb-10">
                              “Managing my taxes as a freelancer used to be overwhelming,
                              but Noble Finance made it effortless.”
                          </p>
                          <div className="flex items-center gap-4">
                              <img
                                  src={Person}
                                  alt="Client"
                                  loading="lazy"
                                  className="w-12 h-12 rounded-full object-cover"
                              />
                              <p className="text-sm text-gray-700">
                                  Taylor M., 28 years old
                              </p>
                          </div>
                      </aside>
                  </div>
              </div>
          </section>
        <section className="w-full bg-white">

              <div className="w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
                  <img
                      src={Img}
                      alt="Finance"
                      className="w-full h-full object-cover"
                      loading="lazy"
                  />
              </div>


              <div className="max-w-7xl mx-auto px-4 py-20">


                  <div className="flex flex-col md:flex-row gap-10 mb-20">


                      <h2 className="md:w-1/2 text-3xl md:text-4xl lg:text-5xl font-medium text-green-900 leading-tight">
                          Smart Finance for <br /> everyone
                      </h2>

                      <p className="md:w-1/2 text-gray-600 leading-relaxed max-w-xl">
                          At Noble Finance, we believe that financial confidence should be
                          accessible to everyone—whether you’re a solo entrepreneur,
                          managing a growing family, or running a small business.
                      </p>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                      <div className="relative pl-6 border-l border-gray-300">

                          <div className="mb-4 text-green-900">
                              📁
                          </div>

                          <h3 className="text-lg font-medium mb-2">
                              For Freelancers
                          </h3>

                          <p className="text-sm text-gray-500 mb-3">
                              Simplicity & Control
                          </p>

                          <p className="text-sm text-gray-600 leading-relaxed">
                              Stay in charge of your income with seamless expense tracking,
                              automated deductions, and smart tax strategies—so you can focus
                              on doing what you love.
                          </p>

                      </div>

                      <div className="relative pl-6 border-l border-gray-300">

                          <div className="mb-4 text-green-900">
                              👤
                          </div>

                          <h3 className="text-lg font-medium mb-2">
                              For Families
                          </h3>

                          <p className="text-sm text-gray-500 mb-3">
                              Stability & Security
                          </p>

                          <p className="text-sm text-gray-600 leading-relaxed">
                              From budgeting tools to tax-saving insights, we help you plan
                              for the future, maximize refunds, and keep your household
                              finances running smoothly.
                          </p>

                      </div>

                      <div className="relative pl-6 border-l border-gray-300">

                          <div className="mb-4 text-green-900">
                              💼
                          </div>

                          <h3 className="text-lg font-medium mb-2">
                              For Small Businesses
                          </h3>

                          <p className="text-sm text-gray-500 mb-3">
                              Stability & Security
                          </p>

                          <p className="text-sm text-gray-600 leading-relaxed">
                              Effortless bookkeeping, payroll solutions, and expert-backed
                              tax support—so you can spend less time on finances and more
                              time scaling your business.
                          </p>

                      </div>

                  </div>
              </div>
</section>
          <section className="w-full bg-white py-20">
              <div className="max-w-7xl mx-auto px-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

                      <div className="bg-[#2F4F1F] rounded-2xl p-10 text-white flex flex-col justify-between min-h-[260px]">
                          <div>
                              <h2 className="text-2xl font-semibold mb-4">
                                  A custom built plan for you
                              </h2>
                              <p className="text-sm leading-relaxed max-w-md opacity-90">
                                  At Noble Finance, we believe that tax filing should be seamless,
                                  accurate, and stress-free. Our approach is centered on three key
                                  pillars: simplicity, accuracy, and security.
                              </p>
                          </div>

                          <Link to='/services' className="mt-6 w-fit bg-white text-[#2F4F1F] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                              Learn More
                          </Link>
                      </div>


                      <div className="bg-[#D9FFE8] rounded-2xl flex items-center justify-center min-h-[260px]">
                          <img
                              src={Wood}
                              alt="Steps illustration"
                              className="max-w-[260px]"
                              loading="lazy"
                          />
                      </div>
                  </div>


                  <div className="text-center max-w-3xl mx-auto">
                      <p className="text-3xl md:text-4xl font-semibold text-[#2F4F1F] mb-8">
                          We believe that tax filing should be seamless, accurate, and
                          stress-free. Get started with Noble Finance today!
                      </p>

                      <Link to="/booking" className="bg-[#2F4F1F] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#263F19] transition">
                          Connect with our experts
                      </Link>
                  </div>
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
