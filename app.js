//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom/client";

const NavItems = (
  <ul className="nav">
    <a href="#">
      <li>Home</li>
    </a>
    <a href="#">
      <li>About Us</li>
    </a>
    <a href="#">
      <li>Contact Us</li>
    </a>
    <a href="#">
      <li>Cart</li>
    </a>
  </ul>
);

const Header = () => {
  return (
    // <img src={require('./logo.png')} alt='Logo.png' />
    <div className="heading">
      <a href="/">
        <img
          className="logo"
          src="http://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"
          alt="Logo.png"
        />
      </a>
      {NavItems}
    </div>
  );
};

// Configue driven UI
const configue = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off"
      },
      {
        offerName: "No delivery charges"
      }
    ]
  },
  {
    type: "restaurants",
    cards: [
      {
        imageSrc:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eywohwrrwky4rqmeyc3f",
        name: "Burger King",
        cuisines: ["Italian", "Australian"],
        rating: 5
      },
      {
        imageSrc:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eywohwrrwky4rqmeyc3f",
        name: "KFC",
        cuisines: ["Russian", "German"],
        rating: 4.8
      }
    ]
  }
];

/**  For single restaurant
  const restaurantList = {
  imageSrc:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eywohwrrwky4rqmeyc3f",
  name: "Burger King",
  cuisines: ["Italian", "Australian"],
  rating: 5
};
 */

const restaurantList = [
  {
    info: {
      id: "138202",
      name: "Food As Mood",
      cloudinaryImageId: "msqdatxej7qsx7xi8s0x",
      locality: "Meenakshi Chowk",
      areaName: "Meenakhshi Chowk",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chinese", "Arabian", "Continental"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "138202",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "15975",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=5813937~p=1~eid=00000186-167b-0360-01b8-fe6300b40147~45995",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=138202",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "135629",
      name: "JCC ( Jain Chat Corner)",
      cloudinaryImageId: "nbfludp4wmev8xdatzbn",
      locality: "New Mandi",
      areaName: "New Mandi",
      costForTwo: "₹200 for two",
      cuisines: ["Chaat"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "135629",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "108840",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 22:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=135629",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "243535",
      name: "ROL GOL",
      cloudinaryImageId: "e63sblh4b25eytr4veyu",
      locality: "New_Mandi",
      areaName: "New_Mandi",
      costForTwo: "₹200 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "243535",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "170654",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=243535",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "359854",
      name: "PRADEEP SWEETS",
      cloudinaryImageId: "dgsrowncxiwmu4fikuzw",
      locality: "New_Mandi",
      areaName: "railway road main gate",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Beverages"],
      feeDetails: {
        restaurantId: "359854",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "160362",
      avgRatingString: "--",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 22:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=359854",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "238539",
      name: "New Yadgar Restaurant",
      cloudinaryImageId: "sruj73mc6emxd6r19sto",
      locality: "New_Mandi",
      areaName: "Khalapar",
      costForTwo: "₹150 for two",
      cuisines: ["Mughlai"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "238539",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "148383",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=5814308~p=2~eid=00000186-167b-0360-01b8-fe6400b40267~45995",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 23:01:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=238539",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "565607",
      name: "AL-BAIK.COM",
      cloudinaryImageId: "ega2f6gz0ttaxxnbsn1w",
      locality: "New_Mandi",
      areaName: "MEENAKSHI CHOWK",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "565607",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "6315",
      avgRatingString: "3.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 23:30:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=565607",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "613951",
      name: "Kwality Walls",
      cloudinaryImageId: "ltsqzrzmc94lnujgrfpq",
      locality: "New Mandi",
      areaName: "Muzaffarnagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      veg: true,
      feeDetails: {
        restaurantId: "613951",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "582",
      avgRatingString: "--",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 20:30:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=613951",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "249399",
      name: "Swad",
      cloudinaryImageId: "ws5q5sivdpcqniqrlgdf",
      locality: "New_Mandi",
      areaName: "Jila Parisad Colony",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks"],
      avgRating: 3.3,
      veg: true,
      feeDetails: {
        restaurantId: "249399",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 1900
      },
      parentId: "4297",
      avgRatingString: "3.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-02-03 17:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=249399",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  }
];

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString
}) => {
  // {console.log(props)}
  // const { name, cuisines, cloudinaryImageId, avgRatingString } =
  //   restaurant.info;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="img "
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString}* rating</h4>
    </div>
  );
};

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb' alt='img '></img>
//             <h2>Burger King</h2>
//             <h3>Italian, Australian</h3>
//             <h4>5* rating</h4>
//         </div>
//     )
// }

const Body = () => {
  const result = [];

  restaurantList.forEach((restaurant) => {
    console.log(restaurant);
    result.push(<RestaurantCard {...restaurant.info} />);
  });

  return (
    <div className="restaurant-list">
      {/* {result} */}

      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.info} />
      ))}

      {/* <RestaurantCard {...restaurantList[0].info} />
      <RestaurantCard {...restaurantList[1].info} />
       */}
    </div>
  );
};
const Footer = () => <h1>I am Footer</h1>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
