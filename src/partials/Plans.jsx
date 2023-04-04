import React from 'react';
import '../css/plans.css';

function Plans() {
  return (
    <section id="plans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Plans</h2>
            <p className="text-xl text-gray-400">Subscriptions of different durations are available</p>
          </div>

          {/* Plans */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st plan */}
            <div className="flex flex-col h-full p-6 bg-gray-600 plan-outline" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="plan">
                    <ul className="plan-list">
                      <li className="plan-header">2-year plan</li>
                      <li className="bg-gray-900">$4 / month</li>
                      <li>With our Pro plan, you can take your fitness to the next level</li>
                      <li className="bg-gray-800">
                        <a href="#" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                          Subscribe<br/>$96
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd plan */}
            <div className="flex flex-col h-full p-6 bg-gray-700 plan-outline" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="plan">
                    <ul className="plan-list">
                      <li className="plan-header">1-year plan</li>
                      <li className="bg-gray-900">$4.5 / month</li>
                      <li>With our Pro plan, you can take your fitness to the next level</li>
                      <li className="bg-gray-800">
                        <a href="#" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                          Subscribe<br/>$54
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd plan */}
            <div className="flex flex-col h-full p-6 bg-gray-700 plan-outline" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="plan">
                    <ul className="plan-list">
                      <li className="plan-header">Monthly plan</li>
                      <li className="bg-gray-900">$5 / month</li>
                      <li>With our Pro plan, you can take your fitness to the next level</li>
                      <li className="bg-gray-800">
                        <a href="#" className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button">
                          Subscribe<br/>$5
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Plans;
