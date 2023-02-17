import React from 'react';
import banner1 from '../../asset/Images/banner-1.jpg'
import banner2 from '../../asset/Images/banner-2.png'
import banner3 from '../../asset/Images/banner-3.jpg'
const Carousel = () => {

    return (
        <div class="carousel w-full ">
            {/* slide 1 */}
            <div id="slide1" class="carousel-item relative w-full text-white">

                <div class="hero h-[600px] md:h-[800px] lg:h-screen " Style="background-image: url('https://i.ibb.co/MV6gFX0/banner-1.jpg');">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="max-w-sm rounded-lg shadow-2xl">
                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>


            {/* slide 2 */}

            <div id="slide2" class="carousel-item relative w-full text-white">

                <div class="hero h-[600px] md:h-[800px] lg:h-screen  " Style="background-image: url('https://i.ibb.co/vwGqZrc/banner-2.png');">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="max-w-sm rounded-lg shadow-2xl">

                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>



            {/* slide 3 */}

            <div id="slide3" class="carousel-item relative w-full text-white">

            <div class="hero h-[600px] md:h-[800px] lg:h-screen  " Style="background-image: url('https://i.ibb.co/zmM9PqJ/businessman-cupped-his-hands-blue-tone.jpg');">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="max-w-sm rounded-lg shadow-2xl">

                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Carousel;


/* 
<a href="https://ibb.co/Kqw5T1v"><img src="https://i.ibb.co/MV6gFX0/banner-1.jpg" alt="banner-1" border="0"></a>
<a href="https://ibb.co/QbRQrqJ"><img src="https://i.ibb.co/vwGqZrc/banner-2.png" alt="banner-2" border="0"></a>
<a href="https://ibb.co/vh3wbpL"><img src="https://i.ibb.co/Nr9VX5W/banner-3.jpg" alt="banner-3" border="0"></a>

https://media.licdn.com/dms/image/C4E03AQHobkuE35rOSQ/profile-displayphoto-shrink_800_800/0/1632413505329?e=2147483647&v=beta&t=6e60RQLuvpQCM2Il7mbGwx56ckPMlE9tO8LY2GHryO4

<a href="https://ibb.co/HKSwG5d"><img src="https://i.ibb.co/zmM9PqJ/businessman-cupped-his-hands-blue-tone.jpg" alt="businessman-cupped-his-hands-blue-tone" border="0"></a>
*/