// src/data.js
export const siteData = {
  featured: [
    {
      title: "The Best of Exton in 2026",
      subtitle: "Things to Do • Attractions & Tours",
      image: "/assets/cards/best-of-2026.jpg",
      tags: ["Things to Do", "Attractions & Tours"],
      href: "/itineraries",
    },
    {
      title: "Learn Something New in Exton",
      subtitle: "Things to Do • Attractions & Tours",
      image: "/assets/cards/learn-new.jpg",
      tags: ["Things to Do", "Attractions & Tours"],
      href: "/itineraries",
    },
    {
      title: "Trails + Town in One Day",
      subtitle: "Things to Do • Outdoors & Wellness",
      image: "/assets/cards/outdoor-daytrip.jpg",
      tags: ["Things to Do", "Outdoors & Wellness"],
      href: "/itineraries",
    },
    {
      title: "A Taste of Local Cuisine",
      subtitle: "Eat & Drink • Restaurants",
      image: "/assets/cards/local-cuisine.jpg",
      tags: ["Eat & Drink", "Restaurants"],
      href: "/itineraries",
    },
  ],

  events: [
    {
      id: "e1",
      title: "Exton Winter Market",
      date: "Jan 10, 2026",
      time: "10:00AM - 2:00PM",
      image: "/assets/events/winter-market.jpg",
      categories: ["Things to Do", "Family"],
      location: "Exton Square area",
    },
    {
      id: "e2",
      title: "Live Music Night (Local Bands)",
      date: "Jan 14, 2026",
      time: "7:00PM - 10:00PM",
      image: "/assets/events/live-music.jpg",
      categories: ["Arts & Culture", "Eat & Drink"],
      location: "Main Street Exton",
    },
    {
      id: "e3",
      title: "Chester Valley Trail Community Ride",
      date: "Jan 17, 2026",
      time: "9:00AM - 12:00PM",
      image: "/assets/events/trail-ride.jpg",
      categories: ["Sports & Events", "Outdoors & Wellness"],
      location: "Trailhead meet-up",
    },
    {
      id: "e4",
      title: "Family Fun Day: Science + Crafts",
      date: "Jan 18, 2026",
      time: "11:00AM - 3:00PM",
      image: "/assets/events/family-fun.jpg",
      categories: ["Family", "Things to Do"],
      location: "Library / community center",
    },
  ],

  itineraries: [
    {
      id: "i1",
      title: "3 Days of Historic Exton",
      image: "/assets/itineraries/historic.jpg",
      description: "History-rich stops, nearby heritage sites, and small-town charm with easy drives.",
    },
    {
      id: "i2",
      title: "3 Days of Arts and Culture",
      image: "/assets/itineraries/arts.jpg",
      description: "Galleries, live music, local makers, and cultural experiences across Chester County.",
    },
    {
      id: "i3",
      title: "3 Days of Dining in Exton",
      image: "/assets/itineraries/dining.jpg",
      description: "Neighborhood favorites, coffee spots, dessert stops, and date-night picks.",
    },
    {
      id: "i4",
      title: "3 Days of Outdoor Adventures",
      image: "/assets/itineraries/outdoors.jpg",
      description: "Trails, parks, biking routes, and scenic drives that feel like a reset.",
    },
    {
      id: "i5",
      title: "3 Days of Family Fun",
      image: "/assets/itineraries/family.jpg",
      description: "Kid-friendly attractions, hands-on activities, and easy wins for all ages.",
    },
    {
      id: "i6",
      title: "3 Days of Local Shopping",
      image: "/assets/itineraries/shopping.jpg",
      description: "Boutiques, outlets, and local finds with breaks for coffee and snacks.",
    },
  ],

  featuredArticles: [
    {
      id: "a1",
      title: "Exton’s Best Rooftop Spots",
      author: "Discover Exton",
      image: "/assets/articles/rooftop.jpg",
      categories: ["Eat & Drink", "Bars"],
    },
    {
      id: "a2",
      title: "What’s Next in Exton: Milestone Moments",
      author: "Discover Exton",
      image: "/assets/articles/milestones.jpg",
      categories: ["LA Guides", "Community"],
    },
    {
      id: "a3",
      title: "Exton’s Best Hiking Trails",
      author: "Discover Exton",
      image: "/assets/articles/hiking.jpg",
      categories: ["Outdoors & Wellness", "Things to Do"],
    },
    {
      id: "a4",
      title: "Exton’s Best Parks",
      author: "Discover Exton",
      image: "/assets/articles/parks.jpg",
      categories: ["Outdoors & Wellness", "Things to Do"],
    },
  ],

  streets: [
    {
      id: "s1",
      name: "Local Coffee Roaster",
      tagline: "Small batch • Big flavor",
      thumb: "/assets/streets/coffee.jpg",
      video: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
    },
    {
      id: "s2",
      name: "Chef + Kitchen Story",
      tagline: "Neighborhood comfort food",
      thumb: "/assets/streets/chef.jpg",
      video: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
    },
    {
      id: "s3",
      name: "Trail Guide",
      tagline: "Best loops + views",
      thumb: "/assets/streets/trails.jpg",
      video: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
    },
  ],

  neighborhoods: [
    {
      name: "Exton",
      description:
        "The hub: shops, dining, parks, and quick access to trails and day trips.",
      chips: ["Dining", "Shopping", "Family"],
      coordinates: { lat: 40.029, lng: -75.627 },
    },
    {
      name: "West Whiteland",
      description:
        "Convenient retail, restaurants, and easy routes to surrounding towns.",
      chips: ["Convenience", "Food", "Events"],
      coordinates: { lat: 40.039, lng: -75.665 },
    },
    {
      name: "East Whiteland",
      description:
        "Parks, trails, and a calm suburban feel with great access to the region.",
      chips: ["Outdoors", "Parks", "Wellness"],
      coordinates: { lat: 40.047, lng: -75.571 },
    },
    {
      name: "Downingtown",
      description:
        "Walkable main-street energy, local eats, and community happenings nearby.",
      chips: ["Main Street", "Dining", "Culture"],
      coordinates: { lat: 40.007, lng: -75.705 },
    },
  ],
};
