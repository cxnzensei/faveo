import {
  exam,
  science,
  marketing,
  law,
  finance,
  Law,
  Finance,
  Microbiology,
  Dissertation,
  oneOnOne,
  assignment,
  fullCourse,
  economics,
  IT,
  BS,
  management,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Assignments",
    content: "We provide top quality assignment services with subject matter experts for in-depth research and effective writing, ensuring clarity and timely delivery.",
    icon: assignment,
  },
  {
    title: "Live Exams",
    content: "At Faveo, we prioritize the importance of exams and specialize in live quizzes, tests, and exams to help you impress your professors and achieve top grades.",
    icon: exam,
  },
  {
    title: "Full Courses/Semesters",
    content: "We offer complete courses with assignments, practice sets, tests, and exams to support your creativity and ensure uninterrupted work.",
    icon: fullCourse,
  },
  {
    title: "One-on-one doubt sessions",
    content: "We provide semester/course consultation and assistance for students to excel in their academics. Get expert help with just a call.",
    icon: oneOnOne,
  },
];

const experiences = [
  {
    title: "Management",
    icon: management,
    iconBg: "#383E56",
    points: [
      "Organizational behavior has been one of our most focused and important subjects in the entire management section.",
      "Faveo pays keen attention to some of the other important subsidiaries of management which are organisational behavior, operations management, change management, and many more.",
      "In addition, we also assist in HR, project, strategic, and supply chain management included in the student’s as well as our assistance to management courses list."
    ],
  },
  {
    title: "Law",
    icon: law,
    iconBg: "#E6DEDD",
    points: [
      "Our law expertise section consists of various real-time professionals from high-end law research guides.",
      "we closely study the best law firms including other cities of various countries to enhance our skills. This becomes easier for us to assist the students based on the current constitution of the specified country. In doing so, our assistance to law activities consists of business, contract, corporate, property, and many more.",
      "Our other professional expertise also consists of criminal law, tort law, commercial law, taxation law, and others."
    ],
  },
  {
    title: "Economics",
    icon: economics,
    iconBg: "#383E56",
    points: [
      "Our high-end assistance regarding economics has been flourishing among the students’ assignments and courses for the past couple of years.",
      "We consult with the students and try to find out what are the 3 important concepts of economics considering their perspective.",
      "Our assistance involves the integration of the base of economics and then the procedure heads on to various subjects like labour, financials, macro economics, micro-economics, econometrics, and many more. "
    ],
  },
  {
    title: "Science & Technology",
    icon: science,
    iconBg: "#1d1836",
    points: [
      "Our assistance, as well as guidance, involves all the subjects of science in the form of assignments, dissertations, and many more.",
      "Our assistance in the field of science consists of not limited to a bachelor’s degree but also has paved the path through a master's up to a doctorate. Only for the sake of the students, we keep track of the current issues in science too.",
      "Our expertise in some of the main fields of science and technology is biotechnology, agriculture, zoology, nursing, and many more."
    ],
  },
  {
    title: "Information Technology",
    icon: IT,
    iconBg: "#808080",
    points: [
      "Apart from assisting with various types of assignments, coursework, and others, we also hold supremacy in business statistics probability which helps the students not only get good grades in statistics but also make them understand statistics examples, statistics math definition, statistics information definition, and many more for their future preferences.",
      "Our engineering expertise consists of specializations like mechanical, electrical, chemical, civil, solid works, geothermal, MATLAB, and many more."
    ],
  },
  {
    title: "Business Statistics",
    icon: BS,
    iconBg: "#ffffbb",
    points: [
      "Our statistical advancement has been quite popular among the students of various universities. Of course, we do respect the stream and that is why our stats experts are always here to assist you regarding any type of assignment, any kind of report, along with the entire coursework as well.",
      "Apart from assisting with various types of assignments, coursework, and others, we also hold supremacy in business statistics probability which helps the students not only get good grades in statistics but also make them understand statistics examples, statistics math definition, statistics information definition, and many more for their future preferences.",
    ],
  },
  {
    title: "Accounting & Finance",
    icon: finance,
    iconBg: "#008080",
    points: [
      "We, at Faveo, remove the fear of finance from the students by delivering them the best quality finance assignments.",
      "The finance news from the student's perspective regarding us has always been positive and that is why we not only specifically involve the assistance of Google Finance but also, we are considered one of the best financial advisory organizations among various students in the universities.",
      "Our best assistance towards the global financial courses consists of quantitative methods, financial management, corporate finance, portfolio management, commercial banking, and many more."
    ],
  },
  {
    title: "Specialised Marketing",
    icon: marketing,
    iconBg: "#E6E6DC",
    points: [
      "We, at Faveo, remove the fear of finance from the students by delivering them the best quality finance assignments.",
      "The finance news from the student's perspective regarding us has always been positive and that is why we not only specifically involve the assistance of Google Finance but also, we are considered one of the best financial advisory organizations among various students in the universities.",
      "Our best assistance towards the global financial courses consists of quantitative methods, financial management, corporate finance, portfolio management, commercial banking, and many more."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I was delighted to discover a group of people who were willing to assist me with study materials and assignments before my exam. They fulfilled their promise and provided everything I needed within a day. As a result, I achieved excellent scores. Thank you very much!",
    name: "Simranjeet Kaur",
    designation: "Student",
    company: "UCW",
  },
  {
    testimonial:
      "Faveo has been a game-changer for my IT studies. Their study materials and expert guidance have made complex concepts easy to understand and assignments easy to complete. If you're looking for reliable study help in the IT field, I highly recommend Faveo.",
    name: "Melissa K.",
    designation: "Student",
    company: "UTD",
  },
  {
    testimonial:
      "In my personal experience, Faveo is the best online assignment help available. They fulfilled their promise of providing assistance within 1-1.5 hours, even helping me until 3 am. Their 24/7 availability is a testament to their commitment to their students. I am grateful for their services.",
    name: "Seung Kyung",
    designation: "Student",
    company: "U of T",
  },
];

const projects = [
  {
    name: "Dissertation",
    src: Dissertation,
    description: "We are proud to announce that our experts have been deeply involved a prepared one of the best dissertations ever made. The topic for the dissertation was the impact of industry 4.0 technologies on the performance of international distribution channels for the global electronics industry. The dissertation was solely based on not only technology but also consist of the core factors of business management. Our experts have successfully identified the purpose of the study on industry 4.0 technologies and its core functionalities of the international distribution centers in the global electronics industry. In doing so, the students have successfully learnt the importance as well as the deployment of cloud-based technologies that have originally taken place on a real-time basis. In addition, our experts have also found out that the role of data and its connectivity with each other has mitigated several challenges that have been identified. The entire management dissertation has been done by considering the primary data which has been quite a hectic task. The results have been analyzed with the help of the SPSS analytical tool.",
  },
  {
    name: "Law",
    src: Law,
    description: "We all know that property and its desired aspects hold a crucial point in involving various types of laws. That is why, the context of NHS which is the national healthcare service in the UK of owning an office building in London has been considered. Our law experts have found the legal issues with the help of keen scrutinization and found the illegal possession. In the project, several court laws have been identified and mentioned that reflected the capability of not only research and understanding of the laws and their in-depth factors of the UK. All the important factors of licensing and its distinctive features of the country have been provided by our law experts. They have also elaborated on every purpose of the license distinction.",
  },
  {
    name: "Finance",
    src: Finance,
    description: "One of our best financial works reflected one of the best evaluation reports where the associated British foods have been taken into the consideration. With the help of our financial experts, the current issues of the organization have been identified that reflected the proper and adequate research. The skilled financial performance evaluation capability of our financial experts and researchers has been reflected in the findings of the profitability ratio, gross profit margin, current ration, solvency ratio, debts to assets, and others. This showcases the upper hand in not only research and performing the complex calculation of finance. The real-time budgeting and performance management of the organization has been researched and implemented in the financial project reflecting the advantages and disadvantages of the said things. This work of expertise has been dedicated to the explanation and drawing up a budget for business which again proved the power of our expert’s research work and calculation.",
  },
  {
    name: "Microbiology",
    src: Microbiology,
    description: "Our microbiology experts assist the students in preparing projects for their university courses. Here is one of our best work samples that reflects the consideration of a food fermentation organisation in the entire of Western Europe which is Sauerkraut. While doing this project, we found out the fermentation of cabbage is possible freshly and healthily. Our expert’s in-depth research work has also found out that fresh cabbage commonly consists of mesophilic aerobes and coliform bacteria which is harmful to human health. In doing so, we have silently warned about how dangerous can be a cabbage if not washed properly before making it edible. With the help of the identified fermentation process, the decrease and change in bacteria are also known as LAB (lactic acid bacteria)."
  }
];

export { services, experiences, testimonials, projects };
