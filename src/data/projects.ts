export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  location: string;
  year: number;
  area: string;
  details: string;
}

export const projects: Project[] = [
  // Commercial / Office
  {
    id: "sanskriti-office",
    title: "Sanskriti Architects Office",
    category: "Commercial",
    shortDescription: "Our creative studio space in Ernakulam",
    description: "Designed as a collaborative workspace that reflects our design philosophy. The office integrates open planning with functional zones to foster creativity and teamwork.",
    thumbnail: "https://placehold.co/600x400?text=Sanskriti+Office",
    images: [
      "https://placehold.co/800x600?text=Sanskriti+Office+1",
      "https://placehold.co/800x600?text=Sanskriti+Office+2",
      "https://placehold.co/800x600?text=Sanskriti+Office+3",
    ],
    location: "Ernakulam, Kochi",
    year: 2018,

    area: "2,500 sq ft",
    details: "Our own office space serves as a live portfolio of our capabilities, featuring custom furniture, optimal lighting design, and efficient spatial planning.",
  },
  {
    id: "your-taste-restaurant",
    title: "Your Taste Restaurant",
    category: "Commercial",
    shortDescription: "Contemporary dining experience in Vytila",
    description: "A modern restaurant design located opposite Decathlon in Vytila. The project focuses on creating an inviting ambiance through lighting and spatial arrangement.",
    thumbnail: "https://placehold.co/600x400?text=Your+Taste+Restaurant",
    images: [
      "https://placehold.co/800x600?text=Restaurant+Interior",
      "https://placehold.co/800x600?text=Dining+Area",
      "https://placehold.co/800x600?text=Facade",
    ],
    location: "Vytila, Ernakulam",
    year: 2021,

    area: "3,000 sq ft",
    details: "Designed to handle high footfall while maintaining an intimate dining atmosphere. Uses durable materials and warm lighting to enhance the customer experience.",
  },
  {
    id: "vasudevan-building",
    title: "Vasudevan's Commercial Complex",
    category: "Commercial",
    shortDescription: "Mixed-use commercial and residential building",
    description: "A strategic mixed-use development at Vytila Janatha, blending commercial utility with residential comfort.",
    thumbnail: "https://placehold.co/600x400?text=Commercial+Complex",
    images: [
      "https://placehold.co/800x600?text=Building+Exterior",
      "https://placehold.co/800x600?text=Commercial+Entrance",
    ],
    location: "Vytila Janatha, Ernakulam",
    year: 2019,

    area: "12,000 sq ft",
    details: "The building helps maximize land value by providing retail spaces on lower floors and residential units on upper levels, ensuring privacy and accessibility for both.",
  },

  // Residential
  {
    id: "suresh-kammath-residence",
    title: "Mr. Suresh Kammath's Residence",
    category: "Residential",
    shortDescription: "A serene family home in Vytilla",
    description: "A contemporary residence designed for Mr. Suresh Kammath. The home emphasizes ventilation and natural light within an urban setting.",
    thumbnail: "https://placehold.co/600x400?text=Suresh+Residence",
    images: [
      "https://placehold.co/800x600?text=Exterior+View",
      "https://placehold.co/800x600?text=Living+Room",
      "https://placehold.co/800x600?text=Garden",
    ],
    location: "Vytilla, Ernakulam",
    year: 2020,

    area: "3,200 sq ft",
    details: "Features a modern facade with traditional touches such as a courtyard and verandah, blending the best of both worlds according to client needs.",
  },
  {
    id: "maradu-villa-4bhk",
    title: "4BHK Villa",
    category: "Residential",
    shortDescription: "A spacious luxury villa at Maradu",
    description: "This 4-bedroom luxury villa focuses on spaciousness and privacy. Located in the fast-growing suburb of Maradu.",
    thumbnail: "https://placehold.co/600x400?text=Maradu+Villa",
    images: [
      "https://placehold.co/800x600?text=Villa+Elevation",
      "https://placehold.co/800x600?text=Interior",
    ],
    location: "Maradu, Ernakulam",
    year: 2022,

    area: "3,800 sq ft",
    details: "Designed with an open plan layout to connect family spaces while providing private retreats in the bedrooms. Includes a landscaped garden and terrace.",
  },
  {
    id: "arun-ambily-residence",
    title: "Mr. Arun & Ambily's Residence",
    category: "Residential",
    shortDescription: "Elegant home in Mulanthuruthy",
    description: "A beautifully detailed residence for Mr. Arun and Ambily, balancing functionality with aesthetic appeal.",
    thumbnail: "https://placehold.co/600x400?text=Arun+Residence",
    images: [
      "https://placehold.co/800x600?text=Residence+Front",
      "https://placehold.co/800x600?text=Living+Area",
    ],
    location: "Mulanthuruthy, Ernakulam",
    year: 2021,

    area: "2,800 sq ft",
    details: "The design accommodates the sloping terrain of the site, utilizing split levels to create distinct zones within the house.",
  },
  {
    id: "sajeev-residence",
    title: "Mr. Sajeev's Residence",
    category: "Residential",
    shortDescription: "Modern home at Edapally",
    description: "Ideally situated in Edapally, this residence features a clean, modern aesthetic with robust construction.",
    thumbnail: "https://placehold.co/600x400?text=Sajeev+Residence",
    images: [
      "https://placehold.co/800x600?text=Modern+Facade",
      "https://placehold.co/800x600?text=Interiors",
    ],
    location: "Edapally, Ernakulam",
    year: 2019,

    area: "3,000 sq ft",
    details: "Focuses on privacy from the busy street while opening up to internal courtyards and green spaces.",
  },
  {
    id: "varghese-residence",
    title: "Mr. Varghese's Residence",
    category: "Residential",
    shortDescription: "Family residence at Kalamassery",
    description: "A warm and inviting home in Kalamassery, designed to accommodate a growing family.",
    thumbnail: "https://placehold.co/600x400?text=Varghese+Residence",
    images: [
      "https://placehold.co/800x600?text=Exterior+Shot",
      "https://placehold.co/800x600?text=Family+Living",
    ],
    location: "Kalamassery, Ernakulam",
    year: 2020,

    area: "2,600 sq ft",
    details: "The layout promotes cross-ventilation and natural lighting, reducing reliance on artificial cooling and lighting.",
  },
  {
    id: "unnikrishnan-residence",
    title: "Mr. Unnikrishnan's Residence",
    category: "Residential",
    shortDescription: "Traditional-modern fusion in Eroor",
    description: "Located in Eroor, this residence blends traditional Kerala architecture with modern conveniences.",
    thumbnail: "https://placehold.co/600x400?text=Unnikrishnan+Residence",
    images: [
      "https://placehold.co/800x600?text=Traditional+Roof",
      "https://placehold.co/800x600?text=Courtyard",
    ],
    location: "Eroor, Thripunithura",
    year: 2018,

    area: "2,900 sq ft",
    details: "Features sloping roofs to handle tropical rain and exposed wood work that adds warmth to the interiors.",
  },
  {
    id: "vasudha-residence",
    title: "'Vasudha' Residence",
    category: "Residential",
    shortDescription: "Waterfront home in Kavalam",
    description: "'Vasudha', built for Mr. TR Nadeshan & K Vasumathy, is designed to harmonize with its serene backwater setting.",
    thumbnail: "https://placehold.co/600x400?text=Vasudha+Residence",
    images: [
      "https://placehold.co/800x600?text=Backwater+View",
      "https://placehold.co/800x600?text=Verandah",
    ],
    location: "Cherukara, Kavalam, Alapuzha",
    year: 2021,

    area: "3,500 sq ft",
    details: "Designed to maximize views of the surrounding waterscapes while protecting the structure from the humid waterfront climate.",
  },
  {
    id: "rajeev-residence",
    title: "Mr. Rajeev's Residence",
    category: "Residential",
    shortDescription: "Contemporary home at Puthiyakavu",
    description: "A compact yet spacious residence in Puthiyakavu, Thripunithura, optimizing the available plot area.",
    thumbnail: "https://placehold.co/600x400?text=Rajeev+Residence",
    images: [
      "https://placehold.co/800x600?text=Exterior",
      "https://placehold.co/800x600?text=Detailing",
    ],
    location: "Puthiyakavu, Thripunithura",
    year: 2020,

    area: "2,400 sq ft",
    details: "Smart storage solutions and open-plan living and dining areas make this home feel larger than its footprint suggests.",
  },
  {
    id: "abhilash-residence",
    title: "Mr. Abhilash's Residence",
    category: "Residential",
    shortDescription: "Rubber plantation home in Chingavanam",
    description: "A residence designed to sit harmoniously within the green landscapes of Chingavanam, Kottayam.",
    thumbnail: "https://placehold.co/600x400?text=Abhilash+Residence",
    images: [
      "https://placehold.co/800x600?text=Green+Surroundings",
      "https://placehold.co/800x600?text=Entryway",
    ],
    location: "Chingavanam, Kottayam",
    year: 2022,

    area: "3,100 sq ft",
    details: "Large windows and verandahs help integrate the indoor spaces with the lush outdoor greenery.",
  },
  {
    id: "kayamkulam-river-residence",
    title: "River View Residence",
    category: "Residential",
    shortDescription: "Scenic home on the Kayamkulam River bank",
    description: "Designed specifically to capture the breathtaking views of the Kayamkulam river.",
    thumbnail: "https://placehold.co/600x400?text=River+View+Home",
    images: [
      "https://placehold.co/800x600?text=River+Front",
      "https://placehold.co/800x600?text=Deck",
    ],
    location: "Kayamkulam",
    year: 2023,

    area: "4,000 sq ft",
    details: "The living spaces are oriented towards the river, with expansive glass walls ensuring an unobstructed connection to nature.",
  },
  {
    id: "coimbatore-residence",
    title: "Coimbatore Residence",
    category: "Residential",
    shortDescription: "Sustainable home for a hot climate",
    description: "A contemporary yet traditional Kerala-style home adapted for the hot and dry climate of Coimbatore.",
    thumbnail: "https://placehold.co/600x400?text=Coimbatore+Project",
    images: [
      "https://placehold.co/800x600?text=Roof+Details",
      "https://placehold.co/800x600?text=Courtyard",
    ],
    location: "Coimbatore, Tamil Nadu",
    year: 2023,

    area: "3,600 sq ft",
    details: "Uses traditional roof profiles with wooden shingles and internal courtyards to facilitate passive cooling and air circulation.",
  },
  {
    id: "vinay-villa-interior",
    title: "Mr. Vinay's Villa Interior",
    category: "Interior",
    shortDescription: "Luxury interior design",
    description: "A bespoke interior design project for a luxury villa, focusing on elegance and comfort.",
    thumbnail: "https://placehold.co/600x400?text=Villa+Internal",
    images: [
      "https://placehold.co/800x600?text=Living+Room",
      "https://placehold.co/800x600?text=Bedroom",
    ],
    location: "Ernakulam",
    year: 2021,

    area: "N/A",
    details: "Custom furniture, curated art pieces, and a sophisticated color palette bring this villa to life.",
  },
];
