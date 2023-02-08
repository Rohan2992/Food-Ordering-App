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

export const restaurantList = [
  {
    data: {
      id: "325742",
      name: "Puri Wala",
      cloudinaryImageId: "keuptchsuxzqi7obcds1",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["North Indian", "Thalis", "Snacks", "Street Food"],
      slaString: "34 MINS",
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "3.2",
      veg: true,
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 3500,
        title: "Delivery Charge",
        amount: "3500"
      },
      badges: {},
      cta: {
        link: "swiggy://menu?restaurant_id=325742",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Greater Noida",
      lastMileTravelString: "3.5 kms",
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "235728",
      name: "Chilli Vada Pav",
      cloudinaryImageId: "ug4abycw5givfeibfyfi",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Maharashtrian", "Snacks", "Beverages"],
      slaString: "36 MINS",
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.2",
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6700
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 6700,
        title: "Delivery Charge",
        amount: "6700"
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      cta: {
        link: "swiggy://menu?restaurant_id=235728",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Ghaziabad",
      lastMileTravelString: "9.6 kms",
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "516337",
      name: "Samosa Party",
      cloudinaryImageId: "eywohwrrwky4rqmeyc3f",
      costForTwo: "₹150 FOR TWO",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery"
      ],
      adTrackingId:
        "cid=5843147~p=2~eid=00000186-2f30-60cf-1c34-90bb00bb022e~45995",
      slaString: "33 MINS",
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "3.9",
      isPromoted: true,
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3000
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 3000,
        title: "Delivery Charge",
        amount: "3000"
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      cta: {
        link: "swiggy://menu?restaurant_id=516337",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Crossing Republic",
      lastMileTravelString: "1.9 kms",
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "454004",
      name: "MR BHATURA",
      cloudinaryImageId: "aviquejfszzvqfigfyq0",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Indian", "Beverages"],
      slaString: "33 MINS",
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.2",
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6200
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 6200,
        title: "Delivery Charge",
        amount: "6200"
      },
      badges: {},
      cta: {
        link: "swiggy://menu?restaurant_id=454004",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Sector 72",
      lastMileTravelString: "8.8 kms",
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "531070",
      name: "Gol vada pav no 1",
      cloudinaryImageId: "gcc4dkeya7whyxgp7xst",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Street Food", "Snacks"],
      slaString: "36 MINS",
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.3",
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6700
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 6700,
        title: "Delivery Charge",
        amount: "6700"
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      cta: {
        link: "swiggy://menu?restaurant_id=531070",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Ghaziabad",
      lastMileTravelString: "9.6 kms",
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "623615",
      name: "EatFit",
      cloudinaryImageId: "b690685198b90802f8771d78c3a38a5e",
      costForTwo: "₹270 FOR TWO",
      cuisines: [
        "Healthy Food",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
        "Chinese"
      ],
      slaString: "30-40 MINS",
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.1",
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3000
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 3000,
        title: "Delivery Charge",
        amount: "3000"
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C"
          }
        ]
      },
      cta: {
        link: "swiggy://menu?restaurant_id=623615",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Shaberi",
      lastMileTravelString: "2.3 kms",
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "338756",
      name: "CRUST & CRISPY SANDWICH",
      cloudinaryImageId: "sqtrjrjosfuizck7xfrr",
      costForTwo: "₹120 FOR TWO",
      cuisines: ["Snacks"],
      adTrackingId:
        "cid=5772722~p=5~eid=00000186-2f30-60cf-1c34-90be00bb056f~45995",
      slaString: "40-50 MINS",
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.4",
      isPromoted: true,
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4000
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 4000,
        title: "Delivery Charge",
        amount: "4000"
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      cta: {
        link: "swiggy://menu?restaurant_id=338756",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Crossing republic",
      lastMileTravelString: "4.8 kms",
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  },
  {
    data: {
      id: "467224",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "beb5cae2995c6a06ede74bd520de83b2",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      slaString: "30-40 MINS",
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      },
      avgRating: "4.0",
      veg: true,
      restaurantAvailability: {
        opened: true
      },
      restaurantFeeDetails: {
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4000
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFees: 4000,
        title: "Delivery Charge",
        amount: "4000"
      },
      badges: {},
      cta: {
        link: "swiggy://menu?restaurant_id=467224",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      areaName: "Gaur city 2",
      lastMileTravelString: "4 kms",
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ]
      }
    }
  }
];

export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
