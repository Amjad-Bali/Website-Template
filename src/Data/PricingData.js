import Basic from "../assets/hosting-basic.png";
import Advanced from "../assets/hosting-advanced.png";
import Professional from "../assets/hosting-professional.png";
const pricingData = [
  {
    id: "Pricing-01",
    title: "Basic",
    image: Basic,
    amount: "$15",
    time: "Per Month",
    featurs: [
      "10GB HDD Space",
      "5 Email Addresses",
      "2 Subdomains",
      "4 Databases",
      "Basic Support",
    ],
  },
  {
    id: "Pricing-02",
    title: "Advanced",
    image: Advanced,
    amount: "$25",
    time: "Per Month",
    featurs: [
      "20GB HDD Space",
      "10 Email Addresses",
      "5 Subdomains",
      "8 Databases",
      "Advanced Support",
    ],
  },
  {
    id: "Pricing-03",
    title: "Professional",
    image: Professional,
    amount: "$45",
    time: "Per Month",
    featurs: [
      "50GB HDD Space",
      "20 Email Addresses",
      "10 Subdomains",
      "20 Databases",
      "Professional Support",
    ],
  },
];

export default pricingData;
