import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Start from "../assets/Start.webp";
import small from "../assets/small.webp";
import Enter from "../assets/Enterprise.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";
const Stage = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="justify-center items-center mt-8 p-8  overflow-x-scroll no-scrollbar"
    >
      <h3 className="font-semibold font-display text-3xl text-center">
        Whatever Stage You’re At, We’ve Got Your Back
      </h3>
      <p className=" mt-3 text-normal  max-w-4xl mx-auto px-6 text-center">
        We’re all about helping people take their business dreams and make them
        real. Doesn’t matter if you’re just getting started, picking up steam,
        or already running the show. We help you connect with your audience in a
        way that actually works. No fluff. Just real convos that move people and
        make things happen.
      </p>
      <div className="py-12 md:w-4/5 mx-auto">
        <Tabs>
          <TabList className="flex flex-wrap items-center justify-center text-xl font-semibold md:gap-8">
            <Tab className="shadow-md px-6 py-3 cursor-pointer rounded-3xl hover:bg-black hover:text-white">
              Startups
            </Tab>
            <Tab className="shadow-md px-6 py-3 cursor-pointer rounded-3xl hover:bg-black hover:text-white">
              Small and Midsized Businesses
            </Tab>
            <Tab className="shadow-md px-6 py-3 cursor-pointer rounded-3xl hover:bg-black hover:text-white">
              Enterprises
            </Tab>
          </TabList>

          <TabPanel>
            <div className=" flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                <h2 className="text-3xl font-semibold text-primary mb-4 ">
                  The Challenge
                </h2>
                <p className="mb-8">
                  You’ve got the vision and the drive. Maybe even a small team
                  and some early buzz. But time, budget, and focus are stretched
                  thin. You’re putting in the effort, yet the results don’t
                  match the hustle. Momentum slows, and opportunities slip away.
                </p>
                <h4 className="text-xl font-bold text-black mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4">We step in to keep things moving:</p>
                <ul className="list-disc list-outside space-y-3">
                  <li>Build conversations that create trust and momentum</li>
                  <li>
                    Stop valuable opportunities from falling through the cracks
                  </li>
                  <li>
                    Free your time so you can focus on growth while we handle
                    the rest
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={Start}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className=" flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                <h2 className="text-3xl font-semibold text-primary mb-4">
                  The Challenge
                </h2>
                <p className="mb-8">
                  You’re growing and things are moving fast. But with limited
                  time, budget, and resources, it’s tough to stay on top of
                  everything. Processes get messy, tasks slip through the
                  cracks, and opportunities are missed. That slows down growth
                  and leaves potential on the table.
                </p>
                <h4 className="text-xl font-bold text-black mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4">
                  We help you stay organized and keep momentum strong:
                </p>
                <ul className="list-disc list-outside space-y-3">
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
                  className="w-full h-auto rounded-2xl object-cover md:h[446px]"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" flex flex-col md:flex-row gap-8 mt-8 shadow-2xl">
              <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                <h2 className="text-3xl font-semibold text-primary mb-4">
                  The Challenge
                </h2>
                <p className="mb-8">
                  Managing campaigns across multiple teams, tools, and timelines
                  is complex. Staying consistent, keeping track of every lead,
                  and making sure nothing slips through the cracks can feel
                  overwhelming. Missed opportunities and cold leads slow down
                  growth and efficiency.
                </p>
                <h4 className="text-xl font-bold text-black mb-4">
                  The Solution
                </h4>
                <p className="mt-3 mb-4">
                  We help you stay connected and in control at scale:
                </p>
                <ul className="list-disc list-outside space-y-3">
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
                  className="w-full h-auto rounded-2xl object-cover"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Stage;
