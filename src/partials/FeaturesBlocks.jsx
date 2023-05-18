import React from 'react';
import timeline_launch from '../images/timeline-launch.png';
import timeline_wellness from '../images/timeline-wellness.png';
import timeline_habit from '../images/timeline-habit.png';
import timeline_blockchain from '../images/timeline-blockchain.png';
import timeline_nutrition from '../images/timeline-nutrition.png';
import timeline_motivation from '../images/timeline-motivation.png';
import timeline_gym from '../images/timeline-gym.png';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-16 items-start md:max-w-2xl" data-aos-id-blocks>
            <hr/>
            
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_launch} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Break Free From Your Health & Fitness Plateau</h4>
              <p className="text-lg text-gray-400" align="justify">
                Tired of feeling defeated by your health and fitness journey? Have you tried countless diets and exercise programs without seeing the desired results? You're not alone. Discover how CHANGE 360 is revolutionizing the health and wellness industry and helping people just like you achieve their goals.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Ready to Break free?
              </a>
            </div>
            <hr/>
            
            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_wellness} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Your Struggles with Health & Wellness, Understood
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                It's no secret that many of us struggle with our health and wellness. Busy lives, lack of motivation, and conflicting information about nutrition and exercise often lead to plateaus and discouragement. We understand the frustration, and we're here to help you overcome these challenges with CHANGE 360.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Overcome your challenges?
              </a>
            </div>
            <hr/>
            
            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-primary-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-primary-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Connect with Your Personal Transformation
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                We get it – life gets in the way, and finding time and energy to prioritize your health is difficult. Let us empathize with your struggles and show you that CHANGE 360 is the solution you've been searching for. Imagine waking up every day with the energy and confidence to take on the world. We're here to help you achieve that.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Embrace a Healthier Lifestyle?
              </a>
            </div>
            <hr/>
            
            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_habit} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Introducing CHANGE 360: The Ultimate Health & Fitness Solution
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                CHANGE 360 is an AI-powered health and fitness platform that provides personalized meal plans, exercise programs, and insights to help you achieve your goals. We've taken the guesswork out of health and wellness, so you can focus on your journey to a healthier you. Designed for your busy lifestyle, CHANGE 360 enables you to reach your goals without sacrificing your time.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Discover the Future of Fitness?
              </a>
            </div>
            <hr/>
            
            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_blockchain} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Cutting-Edge Technology & Expertise at Your Fingertips
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                With CHANGE 360's AI technology, you'll have access to the most up-to-date, scientifically supported information, cross-referenced with thousands of health and wellness modalities. Gone are the days when your local gym trainer was your only source of information. You now have a personal health and wellness AI assistant at your fingertips, ensuring you stay on track.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Unlock Your Personal AI Assistant?
              </a>
            </div>
            <hr/>
            
            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_nutrition} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Transform Your Health & Wellness Journey
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                At the heart of CHANGE 360 is our commitment to transforming your health and wellness journey. We're here to guide you every step of the way, providing the support and tools you need to succeed. Our platform delivers results, and we're confident that you'll feel the benefits in every aspect of your life.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Transform Your Life Today?
              </a>
            </div>
            <hr/>
            
            {/* 7th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-primary-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-primary-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Simple & Effective: How CHANGE 360 Works</h4>
              <p className="text-lg text-gray-400" align="justify">
                Getting started with CHANGE 360 is easy. First, complete a comprehensive assessment to determine your unique needs and goals. Then, receive personalized meal plans, exercise programs, and insights to help you achieve your objectives. Our AI technology adapts to your progress, ensuring you're always making strides towards your fitness goals.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Ready for a Personalized Plan?
              </a>
            </div>
            <hr/>
            
            {/* 8th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_motivation} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Experience the Gains of CHANGE 360
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                With CHANGE 360, you'll gain more than just a healthier body. You'll gain confidence, energy, and a new outlook on life. Earn rewards and tokens for your achievements, and become part of a community of individuals who share your passion for health and wellness. Invest in yourself today and take the first step towards a healthier you.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Gain Confidence and Energy?
              </a>
            </div>
            <hr/>
            
            {/* 9th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <path className="stroke-current text-primary-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-primary-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </svg>
              <h4 className="h4 mb-2">
                Our Guarantee: Your Success is Our Priority
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                We're confident that you'll see results with CHANGE 360, but we also understand that trying something new can be daunting. That's why we make it easy and risk-free to cancel at any time. Pay only for what you need and use, and access a 1-click cancellation option if you wish to stop using our subscription services. We want your success, not just your money.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Experience Risk-Free Results?
              </a>
            </div>
            <hr/>
            
            {/* 10th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <path className="stroke-current text-primary-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-primary-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">
                Make the Logical Choice: Take Action Today
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                You know the benefits of CHANGE 360, you understand how it works, and you know that we stand behind our product. It's time to take action and invest in yourself. With our platform, you'll have everything you need to transform your health and wellness journey. Don't wait any longer – start making positive changes today. Sign up for CHANGE 360 now and unlock your full potential.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Join the CHANGE 360 Revolution?
              </a>
            </div>
            <hr/>
            
            {/* 11th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-primary-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-primary-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-primary-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Real Success Stories: Hear from Our Satisfied Customers
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                But don't just take our word for it! Hear what some of our satisfied customers have to say about CHANGE 360:
              </p>
              <br/>
              <p className="text-lg text-gray-400" align="justify">
                <i>"CHANGE 360 has completely transformed my life. I've lost weight, gained energy, and feel more confident than ever before. This platform is truly a game-changer!"</i> - Jason, 35
              </p>
              <br/>
              <p className="text-lg text-gray-400" align="justify">
                <i>"I've tried so many diets and workout programs in the past, but none of them stuck. With CHANGE 360, I finally found something that works for me. It's personalized, easy to follow, and keeps me motivated."</i> - David, 42
              </p>
              <br/>
              <p className="text-lg text-gray-400" align="justify">
                <i>"As a busy dad of three, I thought I'd never have the time or energy to prioritize my health. CHANGE 360 changed all that. Now, I'm healthier, happier, and able to keep up with my kids. Thank you, CHANGE 360!"</i> - Mark, 38
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Are you next?
              </a>
            </div>
            <hr/>
            
            {/* 12th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-primary-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-primary-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-primary-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Don't Wait: Start Your Journey Today
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                Don't let another day go by without taking control of your health and wellness. Start your journey with CHANGE 360 today, and experience the difference a personalized, AI-powered platform can make. Remember, the sooner you start, the sooner you'll see results.
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Start Now!
              </a>
            </div>
            <hr/>
            
            {/* 13th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary-400" width="64" height="64" rx="32" />
                <g transform="translate(32, 32)">
                  <image xlinkHref={timeline_gym} width="42" height="42"  x="-21" y="-21" />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                Begin Your Transformation Now
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                Are you ready to make a change? Sign up for CHANGE 360 now and embark on the journey to a healthier, happier you. Your future self will thank you. Join our growing community and start transforming your life today!
              </p>
              <br/>
              <a href="/signup" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                Transform!
              </a>
            </div>
            <hr/>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
