import { project1, project2, project3, news1, news2, news3 } from "@/assets";

export const nav = [
  ["Company", "#company"],
  ["Our presence", "#presence"],
  ["Portfolio", "#portfolio"],
  ["Investors", "#investors"],
  ["Journal", "#journal"],
];

export const projects = [
  { name: "Nova Meadows", market: "Bangladesh", city: "Dhaka", type: "Land development", image: project1, text: "A fully planned land estate positioned within Dhaka’s eastern growth corridor. A considered approach to community, connection and the possibilities of tomorrow." },
  { name: "Nova Harbour Residences", market: "UAE", city: "Dubai Harbour", type: "Residential", image: project2, text: "A waterfront residential development in Dubai Harbour, bringing together refined living spaces and a sense of connection to the city." },
  { name: "Nova Quay", market: "USA", city: "New York", type: "Commercial", image: project3, text: "A commercial destination in New York, shaped around the evolving needs of businesses and the people who bring them to life." },
];

export const portfolioFilters = ["All", "UAE", "Bangladesh", "USA", "UK"];

export const markets = [
  { name: "Dubai", country: "United Arab Emirates", status: "Operating", text: "Our Gulf platform brings a global perspective to residential and investment-led development.", address: "Level 24, Boulevard Plaza, Downtown Dubai, United Arab Emirates" },
  { name: "Dhaka", country: "Bangladesh", status: "Operating", text: "Where our story began. Master-planned land estates and communities shaped by local knowledge and long-term thinking.", address: "Nova Land Tower, Gulshan Avenue, Gulshan 2, Dhaka 1212, Bangladesh" },
  { name: "New York", country: "United States", status: "Expanding", text: "Extending our development platform through commercial opportunities and strategic partnerships in North America.", address: "One World Trade Center, Floor 62, New York, NY 10007, USA" },
  { name: "London", country: "United Kingdom", status: "Entering", text: "A new chapter in our global presence, guided by the same commitment to design, engineering and stewardship.", address: "One Canada Square, Canary Wharf, London E14 5AB, United Kingdom" },
];

export const news = [
  { date: "12 AUG 2026", place: "DUBAI", title: "A new perspective on waterfront living.", image: news1, text: "NOVA announces new waterfront residences in Dubai Harbour as part of its expanding Gulf platform." },
  { date: "28 JUN 2026", place: "UNITED KINGDOM", title: "The next chapter of our UK presence.", image: news2, text: "NOVA’s existing newsroom reports a 180-acre land assembly in London, extending the group’s development presence in the UK." },
  { date: "05 MAY 2026", place: "UNITED STATES", title: "Partnerships that look further ahead.", image: news3, text: "NOVA Capital announces a North American co-investment mandate, supporting the group’s long-term approach to partnership." },
];

export const principles = [
  ["Design with purpose", "Thoughtful spaces. Meaningful details."],
  ["Rooted in place", "Local understanding. Global perspective."],
  ["Built for tomorrow", "Enduring quality. Long-term stewardship."],
];

export const responsibilities = [
  { title: "Community & belonging", text: "We see communities as more than addresses. Our approach begins with the people who will call a place home, and the connections that make it meaningful." },
  { title: "Environmental stewardship", text: "Long-term thinking informs how we approach land, infrastructure and the environments surrounding our developments." },
  { title: "Education & opportunity", text: "NOVA’s community focus includes education and young people, helping create opportunities beyond the boundaries of our projects." },
];

export const story = {
  title: "A new perspective. A lasting legacy.",
  meta: "OUR STORY · EST. 2009",
  text: "NOVA began in Dhaka in 2009 with a focus on disciplined land development. The group’s corporate story traces its expansion to Dubai in 2016, New York in 2019, and a four-market platform in 2026. The NOVA vision is to create communities that blend premium design, thoughtful investment and a sense of belonging. Design, engineering, governance and stewardship guide that ambition.",
};
