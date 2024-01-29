import React from 'react'
import Link from 'next/dist/client/link'
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Package_data from '../components/Packages_SFSP/package_data';
// import Pagination from '../../components/Packages_SFSP/pagination';
import ReactPaginate from 'react-paginate';
import Sort from '../components/Packages_SFSP/sort';
import Packages_Form from '../components/Contact_Forms/packages_form';
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import SlickSlider from '../components/Slick_Sliders/SlickDestinationsSlider'
import Ourblogs from "../components/Blogs/ourblogs";
import HomeModal from '../components/CommonModal'
export default function test() {
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: "price", order: "desc" });
    const [page, setPage] = useState(1);

    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?page=${page}&sort=${sort.sort},${sort.order}&destination_search=Goa`;
            const { data } = await axios.get(url);

            setObj(data);



        } catch (err) {

        }
    };
    useEffect(() => {
        getAllPackages();
    }, [sort, page]);

    const pageCount = Math.ceil(obj.total / 8);

    const changePage = ({ selected }) => {
        setPage(selected + 1);
    };
    return (
        <div>
            <Head>
                <title>TripzyGo - Goa Tour Packages , Book Goa Holiday Packages at the Cheapest Price</title>
                <meta name="description" content="Goa Packages - Book Goa Tour Packages at best price with TripzyGo. Get amazing discounts on Goa Holiday Packages with airfare, a guide, a clean pass hotel, local transportation, and sightseeing by clicking right now." />
                <meta name="keywords" content="Goa Tour Packages, Goa Holiday Packages, Goa Packages, Goa Package, Book Goa Packages, Goa Tour , Holidays in Goa, Goa Vacation Packages, Goa Travel Packages, Goa trip packages, Goa Holidays." />
                <link rel="icon" href="/icon.png" />
                <meta property="og:url" content="https://www.tripzygo.in/india-tour-packages/goa-tour-packages" />
                <meta property="og:title" content="Goa Tour Packages , Book Goa Holiday Packages at the Cheapest Price" />
                <meta property="og:description" content="Goa Packages - Book Goa Tour Packages at best price with TripzyGo. Get amazing discounts on Goa Holiday Packages with airfare, a guide, a clean pass hotel, local transportation, and sightseeing by clicking right now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/goa.webp" />
                {/* Product Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            "name": "Goa Tour Packages",
                            "image": "https://www.tripzygo.in/images/banner_images/goa.webp",
                            "description": "Book Goa Tour Packages from Delhi. Check out the exciting deals on Goa holiday tour packages and grab the best trip packages for Goa. Contact us now.",
                            "brand": {
                                "@type": "Brand",
                                "name": "TripzyGo"
                            },
                            "sku": "",
                            "offers": {
                                "@type": "Offer",
                                "url": "https://www.tripzygo.in/india-tour-packages/goa-tour-packages",
                                "priceCurrency": "INR",
                                "price": "7980",
                                "priceValidUntil": "2023-03-31",
                                "availability": "https://schema.org/InStock",
                                "itemCondition": "https://schema.org/NewCondition"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.4",
                                "bestRating": "5",
                                "worstRating": "4",
                                "ratingCount": "2875"

                            }


                        })
                    }}
                />
                {/* Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.tripzygo.in/india-tour-packages/goa-tour-packages"
                            },
                            "headline": "Goa Tour Packages",
                            "description": "Book Goa Tour Packages from Delhi. Check out the exciting deals on Goa holiday tour packages and grab the best trip packages for Goa. Contact us now.",
                            "image": "https://www.tripzygo.in/images/banner_images/goa.webp",
                            "author": {
                                "@type": "Organization",
                                "name": "TripzyGo",
                                "url": "https://www.tripzygo.in/"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "TripzyGo",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.tripzygo.in/logo.webp"
                                }
                            },
                            "datePublished": "2022-12-29",
                            "dateModified": "2022-12-30"
                        })
                    }}
                />
            </Head>
            <HomeModal ImageLink="/images/popup/goa.webp" alt="Goa Tour Packages" />
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/goa.webp)" }} alt="goa tour packages">
                <div className="breadcrumb-outer">
                    <div className="container" id="searchBarContainer">
                        <div className="breadcrumb-content text-center">
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb banner-content">
                                    <h1 className='text-white' id="tourPackagesHeading">Goa Tour Packages</h1><br />
                                </ul>
                                <SearchBar placeholder="Search Destination" data={SearchData} />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            <section className="trending pt-4 pb-0">
                <div className="container  bg-grey">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content"></div>
                            <div className="description mb-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mb-0 ">
                                        <div className="desc-box  p-4 rounded ">


                                            {/* <p className="text-justify"><span className='strongfont'>Goa Tour Packages: </span>When it comes to Goa, there is a whole lot you can do with our Goa tour packages. You may be a party person, or you want some respite from your routine everyday life, Goa will lead you through it all. The Goa tour packages from Delhi provide travelers with the best of these opportunities. Make your way to the gorgeous and famous beaches with tour packages for Goa</p>
                                                <p className="text-justify">There is a wide variety of things to do here, such as relaxing and partaking in entertainment. Let the Goa tour packages from Delhi guide you for anything and everything when you visit. Visit picturesque beaches and attractions with the Goa tour packages.</p>
                                                {readMore && extraContent}
                                                <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px" }}>{linkName}</h6></a> */}

                                            <div class="container">

                                                <article>
                                                    <input type="checkbox" className='checkbox' id="read_more" role="button" />
                                                    <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                    <section className='set_padding'>
                                                        <p className="text-justify"><span className='strongfont'>Goa Tour Packages: </span>When it comes to Goa, there is a whole lot you can do with our Goa tour packages. You may be a party person, or you want some respite from your routine everyday life, Goa will lead you through it all. The Goa tour packages from Delhi provide travelers with the best of these opportunities. Make your way to the gorgeous and famous beaches with tour packages for Goa</p>
                                                        <p className="text-justify">There is a wide variety of things to do here, such as relaxing and partaking in entertainment. Let the Goa tour packages from Delhi guide you for anything and everything when you visit. Visit picturesque beaches and attractions with the Goa tour packages.</p>
                                                    </section>
                                                    <section className='set_padding'>

                                                        <h2 className='mt-3' id='tourpackagesh2heading'> 1. Best Time To Visit Goa </h2>
                                                        <p className="extra-content text-justify">
                                                            Though the best time of year to go to Goa is not restricted to any particular time of the year, the climate in Goa is most pleasant from October to March, and the December season is liked by vacationers who want to take part in lit parties and electric festivals in Goa. If you are planning a Goa trip anytime soon, then must explore our Goa tour packages for the best deals. </p>
                                                        <p ><strong className='strongfont'>Summer Season </strong></p>
                                                        <p className="extra-content text-justify ">
                                                            Mornings and evenings are excellent throughout the summer, but the afternoon can become unbearable with temperatures often greater than 40 degrees Celsius. Explore our affordable Goa tour packages from Delhi in the summertime with us, if you are looking for a budget-friendly Goa trip. Book your Goa tour packages with special deals.</p>
                                                        <p ><strong className='strongfont'>Monsoon Season</strong></p>
                                                        <p className="extra-content text-justify">
                                                            This season brings life back to leaves that have wilted in dry weather and make the surrounding area greener and more beautiful. The Dudhsagar waterfall also provides a stunning view for travelers. If you're a nature enthusiast, visiting Goa with our best Goa tour packages at this time is a great choice.
                                                        </p>
                                                        <p className="extra-content text-justify">Due to the lovely weather, this is also a great time to book a Goa honeymoon package.</p>
                                                        <p ><strong className='strongfont'>Winter Season</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Couples and tourists interested in seeing everything the location has to offer often flock to Goa in Northern India at this time. Goa is full of nightlife, and visitors can celebrate Christmas and New Year. Also, there were numerous festivals being held at that time. Explore our best Goa tour packages for the best Goa trip ever.</p>

                                                        <h2 className='mt-3' id='tourpackagesh2heading'>2. How To Reach Goa?</h2>
                                                        <p className="extra-content text-justify"> Between Karnataka and Maharashtra, Goa is easily accessible by a number of modes of transportation. Check out the detailed information concerning transportation to Goa, including the prices of various Goa tour packages.</p>
                                                        <p ><strong className='strongfont'>By Air</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Goa International Airport (Dabolim Airport), is just 29 km away from Panaji. You may also book a taxi at this location to travel to your destination or hotel from here. Explore Goa tour packages with flights on our website.        </p>

                                                        <p ><strong className='strongfont'>By Train </strong></p>
                                                        <p className="extra-content text-justify">
                                                            Some of the major train stations in Goa are Madgaon and   zVasco-da-Gama stations. Goa has expanded its transport network to make traveling more comfortable, which is why more stations have been made available like Karmali, Pernem, and Sanverdam Church. To access your hotel, you can find a taxi from here.
                                                        </p>

                                                        <h2 className='mt-3' id='tourpackagesh2heading'>3. Famous Dishes To Try In Goa </h2>
                                                        <p className="extra-content text-justify">
                                                            Goa dishes have a high array of herbs and spices. You're going to see the local cuisine influenced by Goa which is also located on the West Coast and Arabian Sea of the subcontinent. Seafood predominates over spices and flavors.
                                                        </p>

                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Fish Recheado - </strong>Pomfret is infused with a homemade relish, fried with onions, and fried to a golden brown. It's absolutely everything that you could have ever dreamed of.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Bebinca - </strong>Bebinca, a classic dessert from the Goa region, is prepared with coconut milk, butter, eggs, and jaggery, usually having about seven to 16 layers. Every bite of this dessert makes the following one all the more delicious.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Pork Vindaloo - </strong>Meat lovers get extremely excited about pork vindaloo. The dish involves garlic, ginger, cumin, and minced pork cooked in vinegar and ginger sauce till it's tender.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Chicken Xacuti - </strong>If you love juicy chunks of spice-infused chicken pieces, dish chicken xacutiac is the way to go. While it's genuinely a tasty dinner option, you could also enjoy it with oatmeal and rice.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Goan Fish Curry - </strong>You won't leave Goa without sampling the famous Goan fish curry. Goan fish curry is typically seasoned with herbs and lemon juice and fried.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Goan Prawn Curry - </strong>If you like prawns, you will never taste anything better. Juicy prawns are cooked in coconut milk Goan curry and let the magic of Goan food take over.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Shark Ambot Tik - </strong>Ambot Tik is a Portuguese-influenced Goan food. Red chilies contribute to the dish's spiciness, and the kokum mellows out the stew's acid content. Shark fish is cooked with onions, tomatoes, and saffron.</p>
                                                        <p className="extra-content text-justify"><strong className='strongfont'>• Goan Nevri - </strong>Also known as karanji, these sweet balls are simple dough balls that are stuffed with coconut, almonds, sugar, and cardamom. This sweet dish is made mostly during Ganesh Chaturthi and Diwali festivals.</p>

                                                        <h2 className='mt-3' id='tourpackagesh2heading'>4. Famous Places To Visit In Goa</h2>
                                                        <p ><strong className='strongfont'>1. Old Goa</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Located in Goa, India, in 1986, the city is the site of a group of Portuguese churches and convents built mainly in the 16th and 17th centuries. The ornate chapels and tall towers are the principal attractions there, which were founded as a place of trade on the banks of the Mandovi River. This place has to be in your itinerary of Goa tour packages.
                                                            <p className='mt-1'>• Tourist Spots: Basilica of Bom Jesus, Archaeological Museum, Museum of Christian Art,</p>
                                                            <p className="extra-content text-justify">• Transportation: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>2. Chopara Fort </strong></p>
                                                        <p className="extra-content text-justify">
                                                            Overlooking the Chapora River in the town of Bardez, Chopara Fort is one of the major bastions in Goa. It offers an advantageous view of the Indian Ocean and nearby Vagator Beach, known for its nightlife.
                                                            <p className="className='mt-1'">• Tourist Spots: Chapora Beach, Vagator Beach, Siddeshwar Temple</p>
                                                            <p className="extra-content text-justify">• Transportation: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>3. Aguada Fort</strong></p>
                                                        <p className="extra-content text-justify">
                                                            It is well known for its remarkable architecture, scenic views, and rich history. Formerly, it was also employed as a jail and as a warehouse for water because there are 2,376,000 gallons of water available here.
                                                            <p className='mt-1'>• Tourist Spots: Old Lighthouse Tower, Lower Aguada Fort, Aguda Rocky Beach</p>
                                                            <p className="extra-content text-justify">• Transportation Options: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>4. Sri Mahadeva Temple</strong></p>
                                                        <p className="extra-content text-justify">
                                                            The temple is adorned with fantastic stone carvings. It is one of the oldest temples in Goa. It is one of the best places to visit in Goa if you wonder about offbeat destinations. The architectural style of the temple also results in guests flocking to this site.
                                                            <p className='mt-1'>• Tourist Spots: Rock Cut Caves of Arvalem, Maruti Temple, Ravindra Theatre</p>
                                                            <p className="extra-content text-justify">• Transportation Options: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>5. Butterfly Conservatory Of Goa</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Situated in Ponda, the Butterfly Conservatory is home to various butterfly species. This spot's population is designed as a sanctuary, meaning you can enjoy the butterflies through a leisurely walk. "The Butterfly Pub" occupies 4000 sq. m.
                                                            <p className='mt-1'>• Tourist Spots: Sada WaterFalls, St Anne's Church, Pascoal Spice Village</p>
                                                            <p className="extra-content text-justify">• Transportation: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>6. Anjuna Flea Market</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Anyone who loves collecting souvenirs may want to see Anjuna, Flea Market. Goa tour packages are available in which you can go to this market. It's the best place to purchase trinkets, souvenirs, clothes and accessories, hats, handicrafts, art pieces, footwear, etc. Therefore, you should definitely visit this market.
                                                            <p className='mt-1'>• Tourist Spots: Anjuna Beach, Calangute Bazaar</p>
                                                            <p className="extra-content text-justify">• Transportation Options: Buses, Cabs, Rented cars</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>7. Se Cathedral</strong></p>
                                                        <p className="extra-content text-justify">
                                                            The church is the home of the Golden Bell, a world-famous bell known for its reverberating sound. When you get to the church now, you will see how magnificent engineering and architectural design were used while developing it. Include this place in your Goa tour packages.
                                                            <p className='mt-1'>• Tourist Spots: Basilica of Bom Jesus, Church & Monastery of St Augustine, The Archeological Museum</p>
                                                            <p className="extra-content text-justify">• Transportation: Bus, car-rentals, taxi</p>
                                                        </p>
                                                        <p ><strong className='strongfont'>8. Dudhsagar Falls</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Nestled in the lush evergreen Western Ghats, this stunning waterfall is a must-visit place. From solo travelers to honeymooners, be sure to catch its full glory in the rainy season. The falls are the tallest in the country, dropping 1017 feet.
                                                            <p className='mt-1'>• Tourist Spots: Bhagwan Mahavir Wildlife Sanctuary, Tambdi Surla Mahadev Temple</p>
                                                            <p className="extra-content text-justify">• Transportation: Buses, Cabs, Rented cars</p>
                                                        </p>

                                                        <h2 className='mt-3' id='tourpackagesh2heading'>5. Islands In Goa</h2>
                                                        <p ><strong className='strongfont'>• Chorao Island</strong></p>
                                                        <p className="extra-content text-justify">
                                                            A beautiful place to go seek inner peace is Chorao island. 5 kilometres away from Panjim, you can easily take a ferry to Chorao. If you're looking for a beautiful getaway experience on an island surrounded by mangroves, then exploring Chorao should top your list. The best way to conduct such an adventure is accompanied by a paddle boat as it is easy and fun to ride.
                                                        </p>
                                                        <p ><strong className='strongfont'>• Butterfly Islan </strong></p>
                                                        <p className="extra-content text-justify">
                                                            The name of the island is Butterfly Island because of its shape. When seen by a boat, it looks exactly like a butterfly, fully ready to fly. The guests on the island feel the same desire of flying like butterflies. The island is also commonly referred to as Honeymoon Island.
                                                        </p>
                                                        <p ><strong className='strongfont'>• Divar Island</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Located 10 km from Panjim, Divar Island was once a thriving town populated by Hindus. Visitors can enjoy ferries throughout the day. There are three villages on the island, including Piedade and Malar. The two famous annual events of Bonderam and Potekar are similar to Halloween.
                                                        </p>
                                                        <p ><strong className='strongfont'>• Sao Jacinto Island</strong></p>
                                                        <p className="extra-content text-justify">
                                                            It is the most beautiful creation designed by nature. The name of this island is derived from the name of St. Jacinto Catholic Church. While located in South Goa, it attracts a lot of tourists. An attraction for the lover of nature and photography churn. Explore this place with our Goa tour packages.
                                                        </p>
                                                        <p ><strong className='strongfont'>• Conco Island or Monkey Island</strong></p>
                                                        <p className="extra-content text-justify">
                                                            Conco Island is yet another astonishing island that primarily draws in foreign guests. Located in Canacona, at the bay of Palolem Beach, it's also known as Monkey Island. Boats are available from the popular Palolem beach at this location to rent to ease your way up there to Conco island.
                                                        </p>
                                                        <p className="extra-content text-justify">Our Goa Tour Packages to the "Party Capital of India," include a tour itinerary that guarantees travelers enjoy a planned, organized, and hassle-free vacation. These customized tour packages are specially tailored to meet all major demands of travelers. </p>
                                                        <p className="extra-content text-justify">At one of the many tourist destinations popular with vacationers, solo travelers, families with kids, and honeymooners, Goa has recently been attracting more visitors than ever.</p>

                                                    </section>
                                                </article>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            <Sort sort={sort} setSort={(sort) => setSort(sort)} />

                            <Package_data packages={obj.packages ? obj.packages : []} />

                            {/* <Pagination page={page} limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            /> */}
                            <div className="container">
                                <ReactPaginate
                                    previousLabel={"<<"}
                                    nextLabel={">>"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={0}
                                    pageRangeDisplayed={4}
                                    onPageChange={changePage}
                                    containerClassName={"pagination pagination-sm justify-content-center"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                    disabledClassName={"pagination_next-prevDisabled"}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div>
                    </div>

                </div>

            </section>
            <section className="trending pb-4 pt-1" style={{ padding: "10px" }}>
                <div className="container mt-2" >
                    <div className="section-title mb-6  mx-auto text-center">
                        <h3 className="mb-1" style={{ fontSize: "35px" }}>Discover <span className="theme"> India</span></h3>
                        <div>India is full of stories to tell, let us show you the best!</div>
                    </div>

                    <div>

                        <div className="col-lg-12 ">
                            <div>
                                <SlickSlider
                                    package1Image="/images/tour_package_slider/Goa/Andaman.webp"
                                    package2Image="/images/tour_package_slider/Goa/Jaipur.webp"
                                    package3Image="/images/tour_package_slider/Goa/Kashmir.webp"
                                    package4Image="/images/tour_package_slider/Goa/Kerala.webp"
                                    package5Image="/images/tour_package_slider/Goa/Manali.webp"
                                    package6Image="/images/tour_package_slider/Goa/Meghalaya.webp"
                                    package1Name="Andaman"
                                    package2Name="Jaipur"
                                    package3Name="Kashmir"
                                    package4Name="Kerala"
                                    package5Name="Manali"
                                    package6Name="Meghalaya"
                                    package1Link="/india-tour-packages/andaman-tour-packages"
                                    package2Link="/india-tour-packages/jaipur-tour-packages"
                                    package3Link="/india-tour-packages/kashmir-tour-packages"
                                    package4Link="/india-tour-packages/kerala-tour-packages"
                                    package5Link="/india-tour-packages/manali-tour-packages"
                                    package6Link="/india-tour-packages/meghalaya-tour-packages"
                                    alt1="andaman tour packages"
                                    alt2="jaipur tour packages"
                                    alt3="kashmir tour packages"
                                    alt4="kerala tour packages"
                                    alt5="manali tour packages"
                                    alt6="meghalaya tour packages"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="trending pt-6 pb-0 bg-lgrey">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content">
                                <div className="description mb-2" id="faq">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">FAQs</h5>
                                                <div className="row">


                                                    <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                        <div className="accrodion ">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0 px-3">What is the perfect time to visit Goa?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0 ">Although Goa is such a place; where there is an influx of tourists. But being situated by the sea, one should avoid coming in the scorching heat. November to February is an ideal period to visit here. Many tour packages to Goa; provide you best tips to travel there. </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion ">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0 px-3">What is the distance from Delhi to Goa?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0 ">The distance between Delhi to Goa is 1872 Km. You can search Goa tour packages from Delhi for a comfortable journey.</div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion ">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0 px-3"> What are the famous destinations in Goa for tourists?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Famous tourist attractions in Goa for tourist are:</div>
                                                                    <div className="mb-0">• Calangute Beach</div>
                                                                    <div className="mb-0">• Chapora Fort</div>
                                                                    <div className="mb-0">• Basilica of Bom Jesus</div>
                                                                    <div className="mb-0">• Dudhsagar Falls</div>
                                                                    <div className="mb-0">• Fort Aguada</div>
                                                                    <div className="mb-0">• Dona Paula</div>
                                                                    <div className="mb-0">Goa Holiday Tour Packages include these destinations. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion ">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0 px-3"> Is Goa safe for solo travelers?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0 "> Yes, Goa is safe for solo travelers. You can travel to Goa alone and enjoy every bit of it. Explore our Goa tour packages for the best deals possible.</div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion ">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0 px-3">When can we enjoy Carnival in Goa?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0 ">You can enjoy Carnival in Goa in Mid-February, which is the most beautiful event in Goa.</div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Ourblogs></Ourblogs>
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
