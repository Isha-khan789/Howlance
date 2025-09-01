import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utilities/animation.js";

// Accordion Item Component
const AccordionItem = ({ title, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-2 mb-4 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
      <div
        className="flex items-center cursor-pointer text-white justify-between rounded-lg p-4 sm:p-5 md:p-6 bg-neutral-800"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-normal flex-grow pr-4">
          {title}
        </h3>
        <span className="flex-shrink-0 text-lg sm:text-xl md:text-2xl">
          {toggle ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      {toggle && (
        <div className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 text-left leading-relaxed space-y-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const Accordiannn = () => {
  const faqs = [
    {
      title: "Business Development Representative",
      answer: (
        <>
          <div>
            <h4 className="text-white font-semibold mb-1">
              Position Overview:
            </h4>
            <p>
              We’re looking for a highly motivated and driven Business
              Development Representative (BDR) to join our team. In this role,
              you will be responsible for managing outbound marketing,
              generating new business opportunities, following up with leads,
              and scheduling qualified meetings for our sales team. The ideal
              candidate will have excellent English communication skills, a
              clear accent, and the confidence to engage prospects across
              multiple digital channels.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-1">
              Key Responsibilities:
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Manage multichannel outreach to engage potential clients and key
                decision-makers.
              </li>
              <li>
                Schedule and confirm qualified meetings for the sales team.
              </li>
              <li>
                Research, identify, and prospect new business opportunities.
              </li>
              <li>
                Qualify leads by understanding client needs and aligning them
                with our solutions.
              </li>
              <li>
                Build and maintain strong relationships to support a healthy
                pipeline.
              </li>
              <li>
                Collaborate with internal teams to develop and implement
                effective outreach strategies.
              </li>
              <li>
                Track activities and ensure accurate reporting in the CRM.
              </li>
              <li>
                Consistently meet or exceed performance targets for outreach,
                meetings, and pipeline growth.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-1">Qualifications:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Minimum 1 year of experience in sales, business development, or
                lead generation.
              </li>
              <li>
                Proven experience handling outbound calls with prospects in the
                USA, Canada, or UK.
              </li>
              <li>
                Strong English communication skills with a clear and confident
                accent.
              </li>
              <li>
                Comfortable managing outbound marketing activities and booking
                appointments.
              </li>
              <li>
                Strong interpersonal skills with the ability to engage prospects
                effectively.
              </li>
              <li>
                Familiarity with CRM systems and sales tools is an advantage.
              </li>
              <li>Self-motivated, resilient, and adaptable to challenges.</li>
              <li>
                Target-oriented with strong organizational and follow-up
                abilities.
              </li>
            </ul>
          </div>

          <p>
            We’re looking for professionals who can drive business growth and
            build strong connections with decision-makers. Candidates who are
            shortlisted will be invited for an interview with our leadership
            team.
          </p>
        </>
      ),
    },
    {
      title: "Upwork Bidding Specialist",
      answer: (
        <>
          <div>
            <h4 className="text-white font-semibold mb-1">
              Position Overview:
            </h4>
            <p>
              We’re looking for a highly motivated and detail-oriented Upwork
              Bidding Specialist to join our team. In this role, you will be
              responsible for managing our Upwork profile, identifying
              high-potential projects, and submitting tailored proposals that
              win new business. The ideal candidate will have strong written
              communication skills, the ability to understand client needs, and
              proven experience in converting bids into successful contracts.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-1">
              Key Responsibilities:
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Manage daily bidding activities on Upwork to secure new
                projects.
              </li>
              <li>
                Research and analyze project requirements to prepare customized,
                client-focused proposals.
              </li>
              <li>
                Maintain and optimize the company’s Upwork profile for higher
                visibility and credibility.
              </li>
              <li>
                Respond to client messages, schedule discovery calls, and follow
                up on active proposals.
              </li>
              <li>
                Collaborate with internal teams to align proposals with services
                offered (e.g., digital marketing, IT, software, or business
                solutions).
              </li>
              <li>
                Track proposal performance, monitor conversion rates, and adjust
                strategies for better results.
              </li>
              <li>
                Build and nurture client relationships for repeat business and
                long-term partnerships.
              </li>
              <li>
                Consistently meet or exceed monthly targets for proposals
                submitted and contracts won.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-1">Qualifications:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Minimum 6 months of experience in bidding on Upwork with a
                proven track record of winning projects.
              </li>
              <li>
                Strong English writing skills with the ability to craft clear,
                persuasive, and tailored proposals.
              </li>
              <li>
                Hands-on experience handling client communications and project
                negotiations on Upwork.
              </li>
              <li>
                Familiarity with Upwork algorithms, profile optimization, and
                proposal best practices.
              </li>
              <li>
                Ability to analyze client requirements and align them with
                company solutions.
              </li>
              <li>
                Familiarity with CRM systems and sales tools is an advantage.
              </li>
              <li>
                Strong organizational skills with the ability to manage multiple
                proposals simultaneously.
              </li>
              <li>
                Self-motivated, target-driven, and capable of working
                independently.
              </li>
            </ul>
          </div>

          <p>
            We’re looking for professionals who can turn opportunities into
            contracts and drive business growth through Upwork. Shortlisted
            candidates will be invited for an interview with our leadership
            team.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-8xl px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 bg-black mx-auto text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 md:mb-10 text-white">
        Open Positions
      </h3>

      <motion.div
        className="flex flex-col gap-4 text-left"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {faqs.map((acc, index) => (
          <AccordionItem key={index} title={acc.title} answer={acc.answer} />
        ))}
      </motion.div>
    </div>
  );
};

export default Accordiannn;
