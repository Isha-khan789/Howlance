import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Start from "../assets/Start.webp";
import small from "../assets/small.webp";
import Enter from "../assets/Enterprise.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";

const Stage = () => {
  return (
    <div className="flex flex-col justify-center bg-white items-center p-4 md:p-8 w-full">
      <h3 className="font-normal font-display text-2xl sm:text-3xl text-center text-[#2F2C2B]">
        Whatever Stage You’re At, We’ve Got Your Back
      </h3>
      <p className="mt-3 text-sm sm:text-base max-w-4xl mx-auto px-2 sm:px-6 text-center mb-7 text-gray-600">
        We’re all about helping people take their business dreams and make them
        real. Doesn’t matter if you’re just getting started, picking up steam,
        or already running the show. We help you connect with your audience in a
        way that actually works. No fluff. Just real convos that move people and
        make things happen.
      </p>

      <div>
        <Tabs>
          <TabList className="flex flex-col lg:items-center lg:justify-center  items-center sm:flex-row sm:items-center md:text-center md:justify-center  gap-6 sm:gap-4 md:gap-8 w-full">
            <Tab
              className="w-full sm:w-auto text-center
               px-2 sm:px-4 md:px-6 py-2 md:py-3 
               cursor-pointer rounded-3xl 
               hover:bg-[#2F2C2B] hover:text-white 
               active:bg-[#2F2C2B] active:text-white 
               data-[selected]:bg-white data-[selected]:text-[#2F2C2B]"
            >
              Startup
            </Tab>

            <Tab
              className="w-full sm:w-auto text-center
              px-2 sm:px-4 md:px-6 py-2 md:py-3 
               cursor-pointer rounded-3xl 
               hover:bg-[#2F2C2B] hover:text-white 
               active:bg-[#2F2C2B] active:text-white 
               data-[selected]:bg-white data-[selected]:text-[#2F2C2B]"
            >
              Small & Midsized Businesses
            </Tab>

            <Tab
              className="w-full sm:w-auto text-center
               px-2 sm:px-4 md:px-6 py-2 md:py-3 
               cursor-pointer rounded-3xl 
               hover:bg-[#2F2C2B] hover:text-white 
               active:bg-[#2F2C2B] active:text-white 
               data-[selected]:bg-white data-[selected]:text-[#2F2C2B]"
            >
              Enterprises
            </Tab>
          </TabList>

          {/* Startups Panel */}
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <motion.div
                className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
              >
                <h2 className="text-2xl sm:text-3xl text-[#2F2C2B] font-semibold text-primary mb-4">
                  The Challenge
                </h2>
                <p className="mb-8 text-gray-600">
                  You’ve got the vision and the drive. Maybe even a small team
                  and some early buzz. But time, budget, and focus are stretched
                  thin. You’re putting in the effort, yet the results don’t
                  match the hustle. Momentum slows, and opportunities slip away.
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-[#2F2C2B] mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4 text-gray-600">
                  We step in to keep things moving:
                </p>
                <ul className="list-disc list-outside space-y-2 sm:space-y-3 text-gray-600">
                  <li>Build conversations that create trust and momentum</li>
                  <li>
                    Stop valuable opportunities from falling through the cracks
                  </li>
                  <li>
                    Free your time so you can focus on growth while we handle
                    the rest
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="md:w-1/2 bg-white "
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
              >
                <img
                  src={Start}
                  className="w-full h-auto max-h-[446px] rounded-2xl  object-cover"
                  alt="Startups"
                />
              </motion.div>
            </div>
          </TabPanel>

          {/* Small & Midsized Businesses Panel */}
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
                <h2 className="text-2xl  text-[#2F2C2B] sm:text-3xl font-semibold text-primary mb-4">
                  The Challenge
                </h2>
                <p className="mb-8 text-gray-600">
                  You’re growing and things are moving fast. But with limited
                  time, budget, and resources, it’s tough to stay on top of
                  everything. Processes get messy, tasks slip through the
                  cracks, and opportunities are missed. That slows down growth
                  and leaves potential on the table.
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-[#2F2C2B] mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4 text-gray-600">
                  We help you stay organized and keep momentum strong:
                </p>
                <ul className="list-disc list-outside space-y-2 sm:space-y-3 text-gray-600">
                  <li>Simplify the way you manage and execute tasks</li>
                  <li>Turn complexity into clear, actionable steps</li>
                  <li>
                    Free up your time and team to focus on what matters most
                    while we handle the rest
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={small}
                  className="w-full h-auto max-h-[446px] rounded-2xl object-cover"
                  alt="Small Businesses"
                />
              </div>
            </div>
          </TabPanel>

          {/* Enterprises Panel */}
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <div className="md:w-1/2 bg-white rounded-lg p-6 md:p-12 font-secondary">
                <h2 className="text-2xl sm:text-3xl text-[#2F2C2B] font-semibold text-primary mb-4">
                  The Challenge
                </h2>
                <p className="mb-8 text-gray-600">
                  Managing campaigns across multiple teams, tools, and timelines
                  is complex. Staying consistent, keeping track of every lead,
                  and making sure nothing slips through the cracks can feel
                  overwhelming. Missed opportunities and cold leads slow down
                  growth and efficiency.
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-[#2F2C2B] mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4 text-gray-600">
                  We help you stay connected and in control at scale:
                </p>
                <ul className="list-disc list-outside space-y-2 sm:space-y-3 text-gray-600">
                  <li>Keep communication seamless across markets and teams</li>
                  <li>
                    Ensure every opportunity gets the right attention at the
                    right time
                  </li>
                  <li>
                    Free your team to focus on closing deals while we manage the
                    frontlines
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={Enter}
                  className="w-full h-auto max-h-[446px] rounded-2xl object-cover"
                  alt="Enterprises"
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Stage;
