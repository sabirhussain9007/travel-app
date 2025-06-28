import React from 'react';
import travelImage from '../assets/travel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faPlay } from '@fortawesome/free-solid-svg-icons';

const Travel = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 md:gap-6 p-4 text-sm text-black bg-white shadow-md">
        <div className="font-bold text-xl flex items-center space-x-1">
          <span>Jad</span>
          <span className="text-yellow-500">oo</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
          <a className="hover:underline" href="#">Destinations</a>
          <a className="hover:underline" href="#">Hotels</a>
          <a className="hover:underline" href="#">Flights</a>
          <a className="hover:underline" href="#">Bookings</a>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a className="hover:underline hidden sm:inline-block" href="#">Login</a>
          <button className="border border-black rounded-md px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold hover:bg-black hover:text-white transition">
            Sign up
          </button>
          <div className="flex items-center space-x-1 cursor-pointer select-none">
            <span className="text-sm">EN</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          </div>
        </div>
        <button className="sm:hidden ml-2 text-black">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <div className="relative max-w-7xl w-full bg-white rounded-md shadow-md flex flex-col md:flex-row items-center md:items-start md:justify-between overflow-hidden">



          
          <div className="flex flex-col px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-16 md:pb-24 md:pt-20 md:px-16 max-w-xl md:max-w-lg">
            <span className="text-xs font-semibold text-[#D46A3F] uppercase mb-2 tracking-wide">
              Best destinations around the world
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A2541] leading-tight mb-4 sm:mb-6 max-w-[18ch]">
              Travel, enjoy
              <span className="relative inline-block">
                <span>and live a new and full life</span>
                
              </span>
            </h1>
            <p className="text-xs text-[#6B7280] mb-6 sm:mb-8 max-w-[32ch] sm:max-w-[22ch]">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#F59E0B] text-white text-xs font-semibold px-5 py-2 rounded-md shadow-md hover:bg-yellow-600 transition">
                Find out more
              </button>
              <button className="flex items-center space-x-2 text-[#D46A3F] text-xs font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#D46A3F] flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlay} className="text-white text-[10px]" />
                </div>
                <span>Play Demo</span>
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-6 sm:mt-0">
            <div className="absolute -top-20 -right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-[100px_0_100px_0] bg-[#FCE9D4] -z-10 hidden sm:block"></div>
            <img 
              alt="Young woman wearing a yellow hoodie and blue jeans sitting on an orange suitcase, holding a phone and smiling" 
              className="relative max-w-[280px] sm:max-w-[400px] w-full h-auto object-contain" 
              height="500" 
              src={travelImage} 
              width="400"
            />
          </div>
        </div>
      </div>









      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12">
      
      {/* Top Section: Category and Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <p className="text-xs font-semibold text-[#7f8db0] uppercase tracking-widest mb-2">
          CATEGORY
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          We Offer Best Services
        </h1>
        <div className="hidden sm:block absolute top-0 right-0 w-20 h-20">
          <img 
            alt="Decorative dotted pattern in top right corner" 
            className="opacity-20" 
            height="80" 
            src="https://storage.googleapis.com/a1aa/image/634b4c0f-7347-4be7-d465-6312b67eb170.jpg" 
            width="80" 
          />
        </div>
      </div>

 <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
         {[
           { title: "Calculated Weather", imgSrc: "https://storage.googleapis.com/a1aa/image/84a1b0f8-f7aa-40de-5364-81bc659f12df.jpg", description: "Built Wicket longer admire do barton vanity itself do in." },
           { title: "Best Flights", imgSrc: "https://storage.googleapis.com/a1aa/image/0b106e69-ac61-46d2-1627-a4fc3913b389.jpg", description: "Engrossed listening. Park gate sell they west hard for." },
           { title: "Local Events", imgSrc: "https://storage.googleapis.com/a1aa/image/c4fa29c8-4b3f-486e-cce3-a17066399ac1.jpg", description: "Barton vanity itself do in it. Preferred to men it engrossed listening." },
           { title: "Customization", imgSrc: "https://storage.googleapis.com/a1aa/image/2d40d466-ef1c-447e-1cc4-c7ae66d1b1d8.jpg", description: "We deliver outsourced aviation services for military customers." },
         ].map((service, index) => (
           <div key={index} className="flex flex-col items-center text-center space-y-3 px-2">
             <img alt={service.title} className="mx-auto" height="48" src={service.imgSrc} width="48" />
             <h3 className="font-semibold text-sm text-[#1a254f]">{service.title}</h3>
             <p className="text-xs text-[#7f8db0] leading-tight max-w-[160px]">{service.description}</p>
           </div>
         ))}
       </div>


      {/* Top Destinations Section */}
 <div className="max-w-4xl mx-auto mb-16 text-center">
         <p className="text-xs font-semibold text-[#7f8db0] uppercase tracking-widest mb-2">Top Selling</p>
         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a254f] mb-8">Top Destinations</h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
           {[
             { title: "Rome, Italy", price: "$5.42k", days: "10 Days Trip", imgSrc: "https://storage.googleapis.com/a1aa/image/121185b8-b080-42fc-3ba1-502e7ac75ba7.jpg" },
             { title: "London, UK", price: "$4.2k", days: "12 Days Trip", imgSrc: "https://storage.googleapis.com/a1aa/image/74dc5bb0-c8b5-4f5f-a418-ac8b7199a607.jpg" },
             { title: "Full Europe", price: "$15k", days: "28 Days Trip", imgSrc: "https://storage.googleapis.com/a1aa/image/026d0ae7-ba68-4dfb-f62f-34fab580cd2c.jpg" },
           ].map((destination, index) => (
             <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
               <img alt={destination.title} className="w-full h-40 object-cover" height="200" src={destination.imgSrc} width="320" />
               <div className="p-4">
                 <div className="flex justify-between items-center mb-2">
                   <h3 className="font-semibold text-sm text-[#1a254f]">{destination.title}</h3>
                   <span className="text-xs font-semibold text-[#7f8db0]">{destination.price}</span>
                 </div>
                 <div className="flex items-center text-xs text-[#7f8db0] space-x-1">
                   <i className="fas fa-plane"></i>
                   <span>{destination.days}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>



       

      {/* Book Your Next Trip Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold text-[#7f8db0] uppercase tracking-widest mb-2">Easy and Fast</p>
          <h2 className="text-3xl font-extrabold text-[#1a254f] leading-tight mb-8">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>
          <div className="space-y-6 max-w-md">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-yellow-400 text-white flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-sm"></i>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#1a254f] mb-1">Choose Destination</p>
                <p className="text-xs text-[#7f8db0] leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, urna, tortor tempus.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-red-500 text-white flex items-center justify-center">
                <i className="fas fa-credit-card text-sm"></i>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#1a254f] mb-1">Make Payment</p>
                <p className="text-xs text-[#7f8db0] leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, urna, tortor tempus.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-teal-700 text-white flex items-center justify-center">
                <i className="fas fa-file-alt text-sm"></i>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#1a254f] mb-1">Reach Airport on Selected Date</p>
                <p className="text-xs text-[#7f8db0] leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, urna, tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side image with overlay card */}
<div className="relative flex flex-col sm:flex-row gap-6 p-6">
  {/* Blue radial glow behind cards */}
  <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#a3c5f7] to-transparent opacity-40 blur-[100px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pointer-events-none"></div>

  {/* Left card */}
  <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(163,197,247,0.3)] max-w-[320px] w-full">
    <img 
      alt="Woman in red dress standing on white stairs with blue domed buildings and sea in Santorini Greece" 
      className="rounded-t-3xl w-full h-[140px] object-cover" 
      height="140" 
      src="https://storage.googleapis.com/a1aa/image/3af34d3c-2f41-4206-6360-608891979a6b.jpg" 
      width="320" 
    />
    <div className="p-5">
      <h2 className="text-black text-lg font-semibold leading-6 mb-1">Trip To Greece</h2>
      <div className="flex items-center text-gray-400 text-sm font-normal mb-4 space-x-2">
        <span>14–29 June</span>
        <span>|</span>
        <span>by Robbin john</span>
      </div>
      <div className="flex space-x-3 mb-5">
        <button aria-label="Leaf icon" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          <i className="fas fa-leaf"></i>
        </button>
        <button aria-label="Map icon" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          <i className="fas fa-map"></i>
        </button>
        <button aria-label="Paper plane icon" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
      <div className="flex items-center text-gray-500 text-sm font-normal space-x-2">
        <i className="fas fa-users text-gray-400"></i>
        <span>24 people going</span>
      </div>
    </div>
  </div>

  {/* Right card */}
  <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(163,197,247,0.3)] max-w-[300px] w-full flex flex-col justify-between p-5 relative z-10" style={{ height: '110px', position: 'absolute', top: '55%', right: '2%' }}>
    <div className="flex items-center space-x-3">
      <img 
        alt="View of Rome city with dome and buildings" 
        className="w-10 h-10 rounded-full object-cover" 
        height="40" 
        src="https://storage.googleapis.com/a1aa/image/0e207137-7af5-4fab-8a5f-fd33175542fa.jpg" 
        width="40" 
      />
      <div>
        <p className="text-xs text-gray-400 font-normal">Ongoing</p>
        <h3 className="text-black font-semibold text-base leading-5">Trip to Rome</h3>
      </div>
    </div>
    <div className="mt-2">
      <p className="text-purple-700 text-sm font-semibold mb-1">
        40%<span className="font-normal"> completed</span>
      </p>
      <div className="w-full h-1 rounded-full bg-gray-200">
        <div className="h-1 rounded-full bg-purple-700" style={{ width: '40%' }}></div>
      </div>
    </div>
    <button aria-label="Favorite heart" className="absolute bottom-4 right-4 text-gray-400 hover:text-purple-700 transition-colors">
      <i className="far fa-heart text-lg"></i>
    </button>
  </div>
</div>




      </div>
    </div>






<main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-16">
      
      {/* Testimonials Section */}
 <section className="md:flex md:items-start md:space-x-20 space-y-8 md:space-y-0">
         <div className="md:w-1/3">
           <p className="text-xs font-semibold text-gray-500 tracking-widest mb-2">TESTIMONIALS</p>
           <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E40] leading-tight max-w-[280px] md:max-w-none">
             What People Say<br />About Us.
           </h2>
         </div>
         <div className="md:w-2/3 space-y-6">
           {[
             { name: "Mike Taylor", location: "Lahore, Pakistan", text: "“On the Windows talking pointed posture yet its express porties use. Sure last upon he same as knew next. Of believed or diverted no.”", imgSrc: "https://storage.googleapis.com/a1aa/image/4019eebb-b46b-48f5-1daa-888901a41b93.jpg" },
             { name: "Chris Thomas", location: "CEO of Red Button", text: "", imgSrc: "" },
           ].map((testimonial, index) => (
             <div key={index} className={`bg-white rounded-xl shadow-lg p-6 ${index === 0 ? 'relative z-20' : 'ml-4 md:ml-16 z-10'}`}>
               <div className="flex items-start space-x-4">
                 {testimonial.imgSrc && <img className="w-12 h-12 rounded-full object-cover" src={testimonial.imgSrc} alt={testimonial.name} />}
                 <div>
                   <p className="text-sm text-gray-600 italic">{testimonial.text}</p>
                   {testimonial.name && <p className="mt-3 font-semibold text-[#0B1E40]">{testimonial.name}</p>}
                   {testimonial.location && <p className="text-xs text-gray-400">{testimonial.location}</p>}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </section>






      {/* Partner Logos */}
      <section className="mt-20 flex justify-center space-x-10 max-w-4xl mx-auto flex-wrap">
        <img src="https://storage.googleapis.com/a1aa/image/3118c110-5630-4968-786b-5e481e14ec2a.jpg" alt="Axon" className="object-contain" width="100" height="15" />
        <img src="https://storage.googleapis.com/a1aa/image/27bf435d-4a79-4d97-b3a1-79bc96b86b1c.jpg" alt="Jetstar" className="object-contain" width="100" height="15" />
        <img src="https://storage.googleapis.com/a1aa/image/c15dc09f-8b1b-4673-b8e7-edb524a7fd4b.jpg" alt="Expedia" className="object-contain shadow-md rounded-md bg-white p-2" width="100" height="15" />
        <img src="https://storage.googleapis.com/a1aa/image/db16b779-bb2b-49bc-0051-28e119ab09d9.jpg" alt="Qantas" className="object-contain" width="100" height="15" />
        <img src="https://storage.googleapis.com/a1aa/image/b5877f2f-daf4-486d-a202-d5ba40d59ad4.jpg" alt="Alitalia" className="object-contain" width="100" height="15" />
      </section>

      

      {/* Newsletter Section */}
      <section className="mt-24 bg-[#F4F3FF] rounded-3xl relative max-w-4xl mx-auto px-8 py-12 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
        <p className="text-center sm:text-left text-[#5B5D8B] font-semibold text-lg max-w-md leading-snug">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </p>
        <form className="mt-6 sm:mt-0 flex w-full max-w-sm">
          <label htmlFor="email" className="sr-only">Your email</label>
          <div className="relative flex-grow">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="far fa-envelope"></i>
            </span>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full pl-10 pr-32 py-3 text-sm rounded-lg border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B4B]"
              aria-label="Your email"
            />
          </div>
          <button
            type="submit"
            className="ml-4 bg-[#FF6B4B] hover:bg-[#e65a3b] text-white font-semibold rounded-lg px-6 py-3 text-sm transition duration-200"
          >
            Subscribe
          </button>
        </form>

        {/* Decorative & Icon */}
        <div aria-hidden="true" className="absolute -top-5 right-0 bg-[#6C63FF] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <i className="fas fa-paper-plane text-white text-sm"></i>
        </div>
        <svg aria-hidden="true" className="absolute bottom-6 left-6 w-40 h-40 stroke-[#6C63FF] opacity-10" fill="none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" strokeWidth="2" />
          <circle cx="100" cy="100" r="50" strokeWidth="2" />
        </svg>
      </section>








      {/* Footer */}
      <footer className="mt-24 bg-[#F4F3FF] rounded-t-3xl py-12 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-12 md:space-y-0">
          <div className="md:w-1/4">
            <h3 className="text-2xl font-bold text-[#0B1E40] mb-2">Jadoo.</h3>
            <p className="text-xs text-gray-500 max-w-[180px]">Book your trip in minute, get full control for much longer.</p>
          </div>
          <div className="md:w-3/4 grid grid-cols-3 gap-12">
            <div>
              <h4 className="font-semibold text-sm text-[#0B1E40] mb-4">Company</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Mobile</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#0B1E40] mb-4">Contact</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><a href="#" className="hover:underline">Help/FAQ</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#0B1E40] mb-4">More</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><a href="#" className="hover:underline">Airlinefees</a></li>
                <li><a href="#" className="hover:underline">Airline</a></li>
                <li><a href="#" className="hover:underline">Low fare tips</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a href="#" aria-label="Facebook" className="hover:text-[#6C63FF]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#6C63FF]"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#6C63FF]"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            <span className="text-xs text-gray-400">Discover our app</span>
            <div className="flex space-x-4">
              <a href="#" aria-label="Google Play Store">
                <img src="https://storage.googleapis.com/a1aa/image/fa9f9936-9f58-4a2a-4127-c15be3272eef.jpg" alt="Google Play Store" className="h-10 object-contain" />
              </a>
              <a href="#" aria-label="Apple App Store">
                <img src="https://storage.googleapis.com/a1aa/image/b7d7937b-3fcc-4a0b-31c8-8a887d705c95.jpg" alt="Apple App Store" className="h-10 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-400">All rights reserved @jadoo.co</p>
      </footer>
    </main>




   





    </div>
  );
};

export default Travel;
