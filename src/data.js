export const profile = {
  name: "Uday Nandaniya",
  role: "AI & Machine Learning Engineer",
  tagline:
    "I chose a B.Tech in AI back when it was an underrated niche, long before ChatGPT blew up. Today, I balance two worlds: optimizing government IT infrastructure on weekdays and spending weekends training deep learning systems for plant disease detection, stock forecasting and beyond.",
  email: "udayahir84@gmail.com",
  phone: "+91 95104 12548",
  location: "Gujarat, India",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "5+", label: "AI / ML projects shipped" },
  { value: "86.97%", label: "Best model accuracy" },
  { value: "5,000+", label: "Images trained on" },
  { value: "2025", label: "B.Tech graduate" },
];

export const projects = [
  {
    title: "Plant Disease Detection",
    kind: "Major Project",
    period: "Jan 2025 – May 2025",
    accuracy: "86.97%",
    description:
      "VGG16 convolutional network trained on 5,000+ leaf images spanning 8 plant types to classify disease at scale.",
    tags: ["Deep Learning", "VGG16", "CNN", "Python"],
  },
  {
    title: "To-Do List with Face & Voice Recognition",
    kind: "Minor Project",
    period: "Jun 2024 – Dec 2024",
    accuracy: "~70%",
    description:
      "Secure face authentication with OpenCV plus voice-driven task operations - add, update and delete entirely hands-free.",
    tags: ["OpenCV", "Speech Recognition", "Python"],
  },
  {
    title: "Stock Trend Prediction",
    kind: "Marwadi University",
    period: "Jul 2024 – Dec 2024",
    accuracy: "61%",
    description:
      "LSTM neural network trained and validated on real-world market data to forecast directional price trends.",
    tags: ["LSTM", "Neural Networks", "Python"],
  },
  {
    title: "Hospital Management System",
    kind: "Advanced Machine Learning",
    period: "Jan 2024 – Jul 2024",
    accuracy: "88%",
    description:
      "Full-stack hospital platform with an integrated heart-attack risk predictor built on logistic regression.",
    tags: ["Django", "PHP", "HTML/CSS", "Python"],
  },
  {
    title: "Heart Disease Prediction",
    kind: "Machine Learning Essentials",
    period: "Jul 2023 – Dec 2023",
    accuracy: "80%",
    description:
      "Logistic regression baseline cross-verified with an LSTM model to predict cardiac risk from clinical features.",
    tags: ["Logistic Regression", "LSTM", "Python"],
  },
];

export const experience = [
  {
    role: "IT Support Engineer",
    org: "Dev Information Technology Ltd.",
    period: "Jul 2025 – Present",
    detail:
      "Appointed at the Department of Information, Government of Gujarat - supporting critical public-sector IT systems.",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Engineering (AI)",
    org: "Marwadi University (NAAC A+)",
    period: "2021 – 2025",
  },
  {
    degree: "Higher Secondary",
    org: "Utkarsh School of Excellence",
    period: "2020 – 2021",
  },
  {
    degree: "Matriculation",
    org: "Genius English Medium School",
    period: "2019",
  },
];

export const skillGroups = [
  {
    title: "Core",
    items: ["Python", "Advanced Machine Learning", "Deep Learning", "Blockchain"],
  },
  { title: "Languages", items: ["C", "C++", "Java", "Python"] },
  { title: "Data", items: ["MySQL", "Data Structures & Algorithms"] },
  {
    title: "Soft skills",
    items: ["Teamwork", "Communication", "Leadership", "Digital Marketing"],
  },
];

export const certifications = [
  "C for Everyone - Coursera",
  "AWS Cloud Foundations",
  "Database Programming with SQL",
  "Object Oriented Programming in Java",
  "Machine Learning with Python",
  "Python for Everybody",
  "AI for Everyone",
];

export const leadership = [
  "Vice Chairman - IEEE Computer Society (2023–2024)",
  "Student Organizer - MU Fest 2024",
  "Languages: English, Hindi, Gujarati",
];

export const aboutText =
  "I'm a Computer Engineering graduate specialising in Artificial Intelligence, with hands-on experience across the full model lifecycle - data preparation, architecture selection, training and real-world evaluation. My work spans computer vision with CNNs, sequence modelling with LSTMs and classical machine learning applied to healthcare and finance. Today I keep public-sector systems running as an IT Support Engineer, while continuing to build and refine models on the side.";

export const aboutFacts = [
  ["Email", profile.email],
  ["Phone", profile.phone],
  ["Location", profile.location],
  ["Degree", "B.Tech CE (AI), 2025"],
];
