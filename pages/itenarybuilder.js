//'use client'
import Head from 'next/head'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaCopy } from "react-icons/fa";

export default function ItenaryBuilder() {
    const [noOfDay, setNoOfDay] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [copied, setCopied] = useState(false);
    const [chat, setChat] = useState('');
    const [chatBorderStyle, setChatBorderStyle] = useState('1px solid #b0a3c2');
    const [prompt, setPrompt] = useState();
    const [text, setText] = useState();
    const [place, setPlace] = useState();
    const [chatDisplay, setChatDisplay] = useState(false);
    const [formClass, setFormClass] = useState('col-md-12 d-flex justify-content-center')

    const handleChange = (e) => {
        const enteredValue = e.target.value;

        // Allow only positive integers
        if (/^\d+$/.test(enteredValue) || enteredValue === '') {
            setNoOfDay(enteredValue);
        }
    };
    async function getChatData(event) {
        event.preventDefault();

        const { place, day_of_travel: dayOfTravel, trip_type: tripType } = event.target;
        const trimmedPlace = place.value.trim();
        const trimmedDayOfTravel = dayOfTravel.value.trim();
        const trimmedTripType = tripType.value.trim();

        const validationErrors = {};
        if (!trimmedPlace) validationErrors.place = 'Please enter a place to visit.';
        if (!trimmedDayOfTravel || isNaN(trimmedDayOfTravel) || trimmedDayOfTravel <= 0) {
            validationErrors.dayOfTravel = 'Please enter a valid day of travel.';
        }
        if (trimmedTripType === '0') validationErrors.tripType = 'Please select a trip type.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
            const myHeaders = new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            });

            const promptText = `Design a ${trimmedDayOfTravel}-day itinerary for a trip to ${trimmedPlace}, including recommendations for the best restaurants and must-visit places. Your itinerary should ensure a balanced and enjoyable experience, considering both popular tourist attractions and off-the-beaten-path gems. Aim to include a variety of dining options, from local favorites to unique culinary experiences, and suggest activities and sights that cater to different interests and preferences. The tour type will be ${trimmedTripType} with morning, evening and afternoon`;

            //const promptText = `Create a ${trimmedDayOfTravel}-day itinerary for a ${trimmedTripType} trip to ${trimmedPlace}, suggesting a mix of popular tourist attractions and hidden gems, along with diverse dining options. Include morning, afternoon, and evening activities. Provide specific image links for each recommendation`;

            setText(capitalizeWords(`${trimmedPlace} itinerary for ${trimmedDayOfTravel} days`));

            const raw = JSON.stringify({ "prompt": promptText, "max_tokens": 4000 });
            const requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

            setIsSubmitting(true);
            const response = await fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions", requestOptions);

            if (!response.ok) throw new Error('Network response was not ok.');

            const resultData = await response.json();
            // console.log(resultData.choices[0].text)


            const lines = resultData.choices[0].text.split('\n').filter(line => line.trim() !== '');

            let dayIndex = -1;
            let dayPart = 'Morning'; // Initialize dayPart with a default value

            const formattedItinerary = lines.reduce((result, line) => {
                if (line.startsWith('Day')) {
                    dayIndex++;
                    result[dayIndex] = { Morning: [], Afternoon: [], Evening: [] };
                } else if (line.startsWith('Morning:')) {
                    dayPart = 'Morning';
                } else if (line.startsWith('Afternoon:')) {
                    dayPart = 'Afternoon';
                } else if (line.startsWith('Evening:')) {
                    dayPart = 'Evening';
                } else {
                    if (!result[dayIndex]) {
                        result[dayIndex] = { Morning: [], Afternoon: [], Evening: [] };
                    }
                    result[dayIndex][dayPart].push(line.trim().replace('-', '').trim());
                }
                return result;
            }, []);

            console.log(formattedItinerary);

            let html = '';
            for (let i = 0; i < formattedItinerary.length; i++) {
                const dayObject = formattedItinerary[i];
                let dayHtml = '';
                for (const [part, activities] of Object.entries(dayObject)) {
                    let activitiesList = '';
                    if (activities.length > 0) {
                        activitiesList = `<ol style="list-style-type:circle">${activities.map(activity => `<li>${activity}</li>`).join('')}</ol>`;
                    }
                    dayHtml += `<p><strong>${part}:</strong></p> ${activitiesList}`;
                }
                html += `<div class="col-md-12"><div class="daywise"><p class="text-center"><strong>Day ${i + 1}</strong></p><p>${dayHtml}</p></div></div>`;
            }

            setChat(html);

            setChatBorderStyle('none');
            setErrors({});
        } catch (error) {
            console.error('Error:', error);
            // Handle error in UI (e.g., display an error message to the user)
        } finally {
            setIsSubmitting(false);
            setChatDisplay(true);
            setFormClass('col-md-4');
        }
    }

    function copyToClipboard() {
        const textToCopy = document.getElementById('chatData').innerText;

        if (textToCopy !== '') {
            navigator.clipboard.writeText(text + '\n\n' + textToCopy)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                    toast.success('Text copied to clipboard!');
                })
                .catch((err) => console.error('Failed to copy:', err));
        }
    }

    function capitalizeWords(input) {
        return input.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    // const downloadPdf = () => {
    //     const input = document.getElementById('chatData');
    //     const wrapper = document.createElement('div');
    //     wrapper.innerHTML = `<p>${text}</p>` + input.outerHTML;

    //     // Append the wrapper to the document body temporarily
    //     document.body.appendChild(wrapper);

    //     if (input.innerText !== '') {
    //         html2canvas(wrapper).then((canvas) => {
    //             const imgData = canvas.toDataURL('image/png');
    //             const pdf = new jsPDF('p', 'mm', 'a4');
    //             const imgWidth = 200; // Reduced width to accommodate margin
    //             const pageHeight = 297;
    //             const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //             const margin = 10; // Set the margin here
    //             let heightLeft = imgHeight;
    //             let position = margin; // Adjust the initial position for the margin

    //             pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    //             heightLeft -= pageHeight - 2 * margin;

    //             while (heightLeft >= 0) {
    //                 position = heightLeft - imgHeight + 2 * margin; // Adjust for the margin
    //                 pdf.addPage();
    //                 pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    //                 heightLeft -= pageHeight - 2 * margin;
    //             }

    //             pdf.save(`Tripzygo_${place}.pdf`);

    //             // Remove the wrapper from the document body after processing
    //             document.body.removeChild(wrapper);
    //         }).catch((error) => {
    //             console.error('Error generating PDF:', error);
    //             document.body.removeChild(wrapper); // Ensure removal in case of error
    //         });
    //     } else {
    //         console.error('Content not found. Unable to download PDF.');
    //         document.body.removeChild(wrapper); // Ensure removal if content is not available
    //     }
    // };

    return (
        <>
            <Head>
                <title>TripzyGo - Trip Planner</title>
                <meta name="description" content="Discover the ultimate convenience in travel planning with our automatic trip itinerary maker. Whether you're an itinerary planner or looking for an easy-to-use travel itinerary planner tool, our online itinerary builder is your solution. Save time and create a seamless journey using our itinerary creator – the perfect travel companion. Embrace stress-free travel with our itinerary maker, your go-to tool for efficient and personalized trip planning. Start exploring new destinations with confidence using our innovative trip itinerary planner. Elevate your travel experience – plan smarter, travel better with our online itinerary maker." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://www.tripzygo.in" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <ToastContainer />
            <div className="container my-5">
                <div className="row">
                    {/* <h4 className="_text-center _mobilePrompt">Trip Planner</h4> */}
                    <div className={`${formClass}`}>

                        <div>
                            <h4 className="text-center _mobilePrompt">Trip Planner</h4>
                            <form
                                onSubmit={getChatData}
                                style={{
                                    padding: '30px 40px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    maxWidth: '400px',
                                }}
                            >
                                <div className="form-group">
                                    <label>Enter a place to visit</label>
                                    <select
                                        name="place"
                                        style={{ width: "webkit-fill-available" }}
                                    >
                                        <option value="">Select place</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Andaman">Andaman</option>
                                        <option value="Solang">Solang</option>
                                        <option value="Chopta">Chopta</option>
                                        <option value="Kedarnath">Kedarnath</option>
                                        <option value="Ayodhya">Ayodhya</option>
                                        <option value="Jibhi">Jibhi</option>
                                        <option value="Manali">Manali</option>
                                        <option value="Spiti Valley">Spiti Valley</option>
                                        <option value="Udaipur">Udaipur</option>
                                        <option value="Jaisalmer">Jaisalmer</option>
                                        <option value="Baku">Baku</option>
                                        <option value="Bali">Bali</option>
                                        <option value="Bangkok">Bangkok</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Hanoi">Hanoi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Bali">Bali</option>
                                        <option value="Istanbul">Istanbul</option>
                                        <option value="Pattaya">Pattaya</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Spiti Valley">Spiti Valley</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Europe">Europe</option>
                                    </select>
                                    {errors.place && <span className="text-danger">{errors.place}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Number of days</label>
                                    <input
                                        type="number"
                                        id="day_of_travel"
                                        name="day_of_travel"
                                        min={1}
                                        max={20}
                                        pattern="[0-9]*"
                                        onChange={handleChange}
                                        value={noOfDay}
                                        required
                                    />
                                    {errors.dayOfTravel && <span className="text-danger">{errors.dayOfTravel}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Select trip type</label>
                                    <select
                                        name="trip_type"
                                        style={{ width: "webkit-fill-available" }}
                                    >
                                        <option value="0">Select trip type</option>
                                        <option value="Family">Family</option>
                                        <option value="Couple">Couple</option>
                                        <option value="Group">Group</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Honeymoon">Honeymoon</option>
                                    </select>
                                    {errors.tripType && <span className="text-danger">{errors.tripType}</span>}
                                </div>
                                <div className="text-center">
                                    <button
                                        className="btn btnCss text-dark mt-3"
                                        type="submit"
                                    >
                                        {isSubmitting ? 'Magic is happening ...' : 'Create Trip'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {chatDisplay &&
                        <div className="col-md-8">
                            <h4 className="text-center">{text}</h4>
                            <div
                                className="row" id='chatData'
                                style={{
                                    borderRadius: '10px',
                                    backgroundColor: '#ffffff',
                                    minHeight: '366px',
                                    border: chatBorderStyle,
                                    marginTop: '10px'
                                }}
                                dangerouslySetInnerHTML={{ __html: chat }}
                            ></div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button
                                        className="btn btnCss  text-dark mt-3 mb-5"
                                        onClick={copyToClipboard}
                                    >
                                        <FaCopy />&nbsp;{copied ? 'Copied!' : 'Copy'}
                                    </button>&nbsp;
                                    {/* <button
                                    className="btn btnCss  text-dark mt-3 mb-5"
                                    onClick={downloadPdf}
                                >
                                    Download
                                </button> */}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>

    );
}
