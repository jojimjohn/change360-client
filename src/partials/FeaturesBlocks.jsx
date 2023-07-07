import React, { useState } from 'react';
import UserForm from '../components/userform/UserForm'
import features_break_free from '../images/features-break-free.jpg';
import features_overcome_challenges from '../images/features-overcome-challenges.jpg';
import features_health from '../images/features-health.jpg';
import features_personal_transformation from '../images/features-personal-transformation.jpg';
import features_change from '../images/features-change.png';
import features_fingertips from '../images/features-fingertips.jpg';
import features_getting_started from '../images/features-getting-started.jpg';
import features_gains from '../images/features-gains.jpg';
import features_success_priority from '../images/features-success-priority.jpg';
import features_take_action_today from '../images/features-take-action-today.jpg';
import features_satisfied_customer from '../images/features-satisfied-customer.jpg';
import features_start_journey from '../images/features-start-journey.jpg';
import features_transform_now from '../images/features-transform-now.jpg';

function FeaturesBlocks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'flex';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-16 items-start md:max-w-2xl" data-aos-id-blocks>
            <hr/>
            
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_break_free} alt="Break Free" className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">Break Free From Your Health & Fitness Plateau</h4>
              <p className="text-lg text-gray-400" align="justify">
                Tired of feeling defeated by your health and fitness journey? Have you tried countless diets and exercise programs without seeing the desired results? You're not alone. Discover how CHANGE 360 is revolutionizing the health and wellness industry and helping people just like you achieve their goals.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Ready to Break free?
              </button>
            </div>
            <hr/>
            
            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_overcome_challenges} alt="Overcome Challenges" className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Your Struggles with Health & Wellness, Understood
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                It's no secret that many of us struggle with our health and wellness. Busy lives, lack of motivation, and conflicting information about nutrition and exercise often lead to plateaus and discouragement. We understand the frustration, and we're here to help you overcome these challenges with CHANGE 360.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Overcome your challenges?
              </button>
            </div>
            <hr/>
            
            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_personal_transformation} alt="Personal Transformation" className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Connect with Your Personal Transformation
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                We get it – life gets in the way, and finding time and energy to prioritize your health is difficult. Let us empathize with your struggles and show you that CHANGE 360 is the solution you've been searching for. Imagine waking up every day with the energy and confidence to take on the world. We're here to help you achieve that.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Embrace a Healthier Lifestyle?
              </button>
            </div>
            <hr/>
            
            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_change} alt="CHANGE 360" className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Introducing CHANGE 360: The Ultimate Health & Fitness Solution
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                CHANGE 360 is an AI-powered health and fitness platform that provides personalized meal plans, exercise programs, and insights to help you achieve your goals. We've taken the guesswork out of health and wellness, so you can focus on your journey to a healthier you. Designed for your busy lifestyle, CHANGE 360 enables you to reach your goals without sacrificing your time.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Discover the Future of Fitness?
              </button>
            </div>
            <hr/>
            
            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_fingertips} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Cutting-Edge Technology & Expertise at Your Fingertips
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                With CHANGE 360's AI technology, you'll have access to the most up-to-date, scientifically supported information, cross-referenced with thousands of health and wellness modalities. Gone are the days when your local gym trainer was your only source of information. You now have a personal health and wellness AI assistant at your fingertips, ensuring you stay on track.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Unlock Your Personal AI Assistant?
              </button>
            </div>
            <hr/>
            
            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_health} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Transform Your Health & Wellness Journey
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                At the heart of CHANGE 360 is our commitment to transforming your health and wellness journey. We're here to guide you every step of the way, providing the support and tools you need to succeed. Our platform delivers results, and we're confident that you'll feel the benefits in every aspect of your life.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Transform Your Life Today?
              </button>
            </div>
            <hr/>
            
            {/* 7th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_getting_started} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">Simple & Effective: How CHANGE 360 Works</h4>
              <p className="text-lg text-gray-400" align="justify">
                Getting started with CHANGE 360 is easy. First, complete a comprehensive assessment to determine your unique needs and goals. Then, receive personalized meal plans, exercise programs, and insights to help you achieve your objectives. Our AI technology adapts to your progress, ensuring you're always making strides towards your fitness goals.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Ready for a Personalized Plan?
              </button>
            </div>
            <hr/>
            
            {/* 8th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_gains} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Experience the Gains of CHANGE 360
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                With CHANGE 360, you'll gain more than just a healthier body. You'll gain confidence, energy, and a new outlook on life. Earn rewards and tokens for your achievements, and become part of a community of individuals who share your passion for health and wellness. Invest in yourself today and take the first step towards a healthier you.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Gain Confidence and Energy?
              </button>
            </div>
            <hr/>
            
            {/* 9th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_success_priority} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Our Guarantee: Your Success is Our Priority
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                We're confident that you'll see results with CHANGE 360, but we also understand that trying something new can be daunting. That's why we make it easy and risk-free to cancel at any time. Pay only for what you need and use, and access a 1-click cancellation option if you wish to stop using our subscription services. We want your success, not just your money.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Experience Risk-Free Results?
              </button>
            </div>
            <hr/>
            
            {/* 10th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_take_action_today} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Make the Logical Choice: Take Action Today
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                You know the benefits of CHANGE 360, you understand how it works, and you know that we stand behind our product. It's time to take action and invest in yourself. With our platform, you'll have everything you need to transform your health and wellness journey. Don't wait any longer – start making positive changes today. Sign up for CHANGE 360 now and unlock your full potential.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Join the CHANGE 360 Revolution?
              </button>
            </div>
            <hr/>
            
            {/* 11th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_satisfied_customer} className="circle-image" width="480" height="480" /><br/>
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
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Are you next?
              </button>
            </div>
            <hr/>
            
            {/* 12th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_start_journey} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Don't Wait: Start Your Journey Today
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                Don't let another day go by without taking control of your health and wellness. Start your journey with CHANGE 360 today, and experience the difference a personalized, AI-powered platform can make. Remember, the sooner you start, the sooner you'll see results.
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Start Now!
              </button>
            </div>
            <hr/>
            
            {/* 13th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src={features_transform_now} className="circle-image" width="480" height="480" /><br/>
              <h4 className="h4 mb-2">
                Begin Your Transformation Now
              </h4>
              <p className="text-lg text-gray-400" align="justify">
                Are you ready to make a change? Sign up for CHANGE 360 now and embark on the journey to a healthier, happier you. Your future self will thank you. Join our growing community and start transforming your life today!
              </p>
              <br/>
              <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={openModal}>
                Transform!
              </button>
            </div>
            <hr/>
            
          </div>

        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <UserForm closeModal={closeModal} />
          </div>
        </div>
      )}
      </section>
  );
}

export default FeaturesBlocks;
