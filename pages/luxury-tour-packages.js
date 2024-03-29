// import React from 'react'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../components/Packages_SFSP/package_data';
import ReactPaginate from 'react-paginate';
// import Pagination from '../../components/Packages_SFSP/pagination';
import Sort from '../components/Packages_SFSP/sort';
import Packages_Form from '../components/Contact_Forms/packages_form';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import { Navigation, A11y ,Autoplay} from 'swiper/modules';
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);
import HomeModal from '../components/CommonModal'

export async function getServerSideProps(){
    const sort = { sort: "web_pack_price", order: "asc" }
    var pData = [];
    const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
    const response = await axios.get(url);
    pData = response.data.data;
    // setObj(data.data);
    pData = pData.filter(pack =>
        pack.destination_search.split(',').map(keyword => keyword.trim()).includes('Luxury')
        );
    console.log(pData);
    return {
        props: {
            pData,
        }
    }

}
export default function test({pData}) {
    const [obj, setObj] = useState(pData);
    const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });
    
    return (
        <div>
            <Head>
                <title>TripzyGo - Beaches Packages</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icon.png" />

            </Head>
            <HomeModal ImageLink="/images/popup/beach.webp" alt="Beach Tour Packages" />

            <section className="breadcrumb-main pb-10 pt-14" style={{ backgroundImage: "url(/images/banner_images/beach.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container" id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">

                                    <h1 className='text-white' id="tourPackagesHeading">Get Customized Tour Packages</h1><br />


                                </ul>
                                {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            <section className="trending pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/>

                            <Package_data data={obj} />
                            <div className="container">
                                
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div>
                    </div>

                </div>

            </section>
            <section className="about-us pb-4 pt-8" >
                <div className="container">

                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h4 className="mb-1 theme1">Our Partners</h4>
                        <h2 className="mb-1">We Partner  <span className="theme"> With The Best</span></h2>
                        <div>We have collaborations with the best partners in the travel industry so that we can create the most amazing touring experiences for you
                        </div>
                    </div>

                    <div className='my-content'  >
                        <div className='carouse_div animated.infinite'>
                            <Swiper

                                modules={[Navigation, A11y]}
                                spaceBetween={50}
                                // slidesPerView={3}
                                navigation
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                effect="coverflow"
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 360,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                loop={true}
                                pagination={{ clickable: true }}


                                scrollbar={{ draggable: true }}




                            >
                                <SwiperSlide>
                                    <figure>
                                        <img src="/images/collaborators/1.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/2.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <img src="/images/collaborators/3.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <img src="/images/collaborators/4.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <img src="/images/collaborators/5.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/6.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/7.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/8.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/20.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/10.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/11.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/12.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/13.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/14.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/15.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/16.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/17.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/18.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <figure>
                                        <img src="/images/collaborators/19.webp" alt="" />
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div class="container resp">
                        <div class="row">

                            <div class="marquee-box">
                                <div class="marquee">
                                    <figure>
                                        <img src="/images/collaborators/1.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/2.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/3.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/4.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/5.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/6.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/7.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/8.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/10.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/11.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/12.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/13.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/14.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/15.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/16.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/17.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/18.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/19.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/20.webp" alt="" />
                                    </figure>
                                </div>
                                <div class="marquee">
                                    <figure>
                                        <img src="/images/collaborators/1.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/2.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/3.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/4.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/5.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/6.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/7.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/8.webp" alt="" />
                                    </figure>
                                    {/* <figure>
                        <img src="/images/collaborators/9.webp" alt="" />							
						</figure> */}
                                    <figure>
                                        <img src="/images/collaborators/10.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/11.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/12.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/13.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/14.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/15.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/16.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/17.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/18.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/19.webp" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="/images/collaborators/20.webp" alt="" />
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="white-overlay"></div>
            </section>
            <script src="/js/jquery-3.5.1.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/particles.js"></script>
            <script src="/js/particlerun.js"></script>
            <script src="/js/plugin.js"></script>
            {/* <script src="/js/main.js"></script> */}
            <script src="/js/custom-accordian.js"></script>
            <script src="/js/custom-nav.js"></script>
            <script src="/js/custom-navscroll.js"></script>
        </div>
    )
}

