import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilities/animation";
// Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 bg-white mb-6 rounded   max-w-2xl w-full mx-auto">
      <div
        className="flex items-center justify-between cursor-pointer text-[black]"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-lg font-semibold text-[black]">{question}</h3>
        {toggle ? <FaMinus /> : <FaPlus />}
      </div>
      <div className={`mt-4 ${toggle ? "block" : "hidden"}`}>
        <p className="text-[black]">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <motion.div
      className="mt-12 px-4 max-w-4xl font-display mx-auto text-center"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* Title */}
      <h3 className="text-5xl font-bold mb-10">FAQ</h3>

      {/* Accordions stacked in a row */}
      <div className="flex flex-col items-center">
        <AccordionItem
          question="How do you generate leads on LinkedIn?"
          answer="There are several great ways to attract qualified sales leads on LinkedIn. Here are some examples:Optimize your business presence - Business profiles act as the face of your organization online. By making sure it’s optimized for maximum visibility with compelling copy, you can start to draw in more prospective customers. Craft targeted outreach messages - Personalized, targeted messages are a great way to attract high-value clients. Using messaging that speaks to their industry and needs, you can grab the attention of decision-makers and make meaningful connections. Create content - Content marketing is a great way to engage your audience, showcase your expertise and authority in the field, and get more quality leads and sales. Blog posts, videos, and other types of media are great ways to capture the attention of your B2B audience. Utilize LinkedIn Ads - With the help of paid ads, you can target the right people with laser-focused accuracy. Ads are a great way to get quick results and have access to detailed."
        />
        <AccordionItem
          question="Is LinkedIn good for lead generation?"
          answer="Yes, LinkedIn marketing is an excellent tool for generating leads. Research shows that the platform is highly effective for B2B businesses and can bring in more high-value qualified leads with a lower cost of acquisition than other platforms. Marketers can tap into the platform’s ample resources to connect with potential prospects in their industry and respond to the needs of their target audience.LinkedIn sales navigator also helps you uncover new potential clients by providing insights such as company size, job title, and more. By leveraging position, seniority, industry, and location details – you are able to tailor your campaigns in a way that is both relevant and engaging for your target audience.It's an effective formula that has been tested time and time again and has proven to be successful. We know how to use LinkedIn’s tools to acquire qualified leads and optimize campaigns, helping you drive better results and make more sales. Contact us today to learn more about our LinkedIn lead generation service."
        />
        <AccordionItem
          question="How much do LinkedIn lead generation services cost?"
          answer="At our LinkedIn lead generation agency, we tailor our service to meet the needs of each individual client. This means that each project is unique and the costs can vary depending on what you need. Our agency believes in making sure you get results for your money, so we strive to keep our prices competitive and offer flexible payment plans that make sense for your budget.If you're interested in learning more about our pricing, please contact us today. We'd be happy to discuss your requirements and develop a custom package that works best for you."
        />
      </div>
    </motion.div>
  );
};

export default Accordion;
