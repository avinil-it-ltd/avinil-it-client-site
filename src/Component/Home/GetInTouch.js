import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <div>
            <div class="hero h-52 my-8 " Style="background-image: url(https://i.ibb.co/8Bqx25N/Screenshot-20230105-010502.png);">
                <div class="hero-overlay bg-opacity-0 "></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold invisible">Hello there</h1>
                        <Link to="/contact" class="btn bg-slate-900 text-white">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;