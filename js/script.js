// Activities Data, to be searched through by users
var data = {
    activities: [
      {
        activityID: 1,
        activityName: "Surfing",
        activityLocation: "Hawaii, United States",
        activityCost: 79.99,
        linkToActivity: "https://www.surfhawaii.com",
        activityKeywords: ["surfing", "beach", "adventure", "water"],
      },
      {
        activityID: 2,
        activityName: "Hiking",
        activityLocation: "Swiss Alp, Switzerland",
        activityCost: 29.99,
        linkToActivity: "https://www.hikealps.com",
        activityKeywords: ["hiking", "mountain", "outdoor", "scenic"],
      },
      {
        activityID: 3,
        activityName: "Sightseeing Tour",
        activityLocation: "Rome, Italy",
        activityCost: 39.99,
        linkToActivity: "https://www.rometours.com",
        activityKeywords: ["sightseeing", "history", "culture", "tour"],
      },
      {
        activityID: 4,
        activityName: "Scuba Diving",
        activityLocation: "Great Barrier Reef, Australia",
        activityCost: 119.99,
        linkToActivity: "https://www.greatbarrierdive.com",
        activityKeywords: ["scuba", "diving", "underwater", "adventure"],
      },
      {
        activityID: 5,
        activityName: "Wine Tasting",
        activityLocation: "Napa Valley, California",
        activityCost: 69.99,
        linkToActivity: "https://www.napawinetours.com",
        activityKeywords: ["wine", "tasting", "vineyard", "culinary"],
      },
      {
        activityID: 6,
        activityName: "Skiing",
        activityLocation: "Aspen, Colorado",
        activityCost: 99.99,
        linkToActivity: "https://www.aspenski.com",
        activityKeywords: ["skiing", "snow", "mountain", "winter"],
      },
      {
        activityID: 7,
        activityName: "Snorkeling",
        activityLocation: "Maldives",
        activityCost: 69.99,
        linkToActivity: "https://www.maldivesnorkel.com",
        activityKeywords: ["snorkeling", "beach", "coral reef", "water"],
      },
      {
        activityID: 8,
        activityName: "Hot Air Balloon Ride",
        activityLocation: "Cappadocia, Turkey",
        activityCost: 149.99,
        linkToActivity: "https://www.cappadociaballoon.com",
        activityKeywords: ["balloon", "flight", "adventure", "scenic"],
      },
      {
        activityID: 9,
        activityName: "Cooking Class",
        activityLocation: "Bangkok, Thailand",
        activityCost: 59.99,
        linkToActivity: "https://www.bangkokcooking.com",
        activityKeywords: ["cooking", "culinary", "thai cuisine", "culture"],
      },
      {
        activityID: 10,
        activityName: "Golfing",
        activityLocation: "Pebble Beach, California",
        activityCost: 89.99,
        linkToActivity: "https://www.pebblebeachgolf.com",
        activityKeywords: ["golfing", "sport", "golf course", "recreation"],
      },
      {
        activityID: 11,
        activityName: "Kayaking",
        activityLocation: "New Zealand",
        activityCost: 79.99,
        linkToActivity: "https://www.kayaknewzealand.com",
        activityKeywords: ["kayaking", "water", "adventure", "nature"],
      },
      {
        activityID: 12,
        activityName: "Opera Night",
        activityLocation: "Vienna, Austria",
        activityCost: 129.99,
        linkToActivity: "https://www.viennaopera.com",
        activityKeywords: ["opera", "music", "culture", "entertainment"],
      },
      {
        activityID: 13,
        activityName: "Biking Tour",
        activityLocation: "Amsterdam, Netherlands",
        activityCost: 49.99,
        linkToActivity: "https://www.amsterdambiketours.com",
        activityKeywords: ["biking", "tour", "city", "sightseeing"],
      },
      {
        activityID: 14,
        activityName: "Yoga Retreat",
        activityLocation: "Bali, Indonesia",
        activityCost: 109.99,
        linkToActivity: "https://www.baliyogaretreats.com",
        activityKeywords: ["yoga", "retreat", "wellness", "mindfulness"],
      },
      {
        activityID: 15,
        activityName: "Windsurfing",
        activityLocation: "Greece",
        activityCost: 69.99,
        linkToActivity: "https://www.greecewindsurf.com",
        activityKeywords: ["windsurfing", "wind", "water", "adventure"],
      },
      {
        activityID: 16,
        activityName: "Snorkel with Turtles",
        activityLocation: "Hawaii, United States",
        activityCost: 89.99,
        linkToActivity: "https://www.hawaiiturtlesnorkel.com",
        activityKeywords: ["snorkeling", "beach", "wildlife", "water"],
      },
      {
        activityID: 17,
        activityName: "Sunset Luau",
        activityLocation: "Hawaii, United States",
        activityCost: 129.99,
        linkToActivity: "https://www.hawaiiluau.com",
        activityKeywords: ["luau", "culture", "entertainment", "sunset"],
      },
      {
        activityID: 18,
        activityName: "Helicopter Tour",
        activityLocation: "Hawaii, United States",
        activityCost: 229.99,
        linkToActivity: "https://www.hawaiihelitours.com",
        activityKeywords: ["helicopter", "tour", "adventure", "scenic"],
      },
      {
        activityID: 19,
        activityName: "Surf Lessons",
        activityLocation: "Hawaii, United States",
        activityCost: 59.99,
        linkToActivity: "https://www.hawaiisurflessons.com",
        activityKeywords: ["surfing", "beach", "lessons", "water"],
      },
      {
        activityID: 20,
        activityName: "Paddleboarding",
        activityLocation: "Hawaii, United States",
        activityCost: 69.99,
        linkToActivity: "https://www.hawaiipaddleboard.com",
        activityKeywords: ["paddleboarding", "beach", "water", "adventure"],
      },
      {
        activityID: 21,
        activityName: "Whale Watching Tour",
        activityLocation: "Hawaii, United States",
        activityCost: 89.99,
        linkToActivity: "https://www.hawaiwhalewatch.com",
        activityKeywords: ["whale watching", "ocean", "wildlife", "tour"],
      },
      {
        activityID: 22,
        activityName: "Hiking Trails",
        activityLocation: "Hawaii, United States",
        activityCost: 0,
        linkToActivity: "https://www.hawaiitrails.com",
        activityKeywords: ["hiking", "nature", "outdoor", "scenic"],
      },
      {
        activityID: 23,
        activityName: "Surf Competitions",
        activityLocation: "Hawaii, United States",
        activityCost: 19.99,
        linkToActivity: "https://www.hawaiisurfcomp.com",
        activityKeywords: ["surfing", "beach", "competition", "water"],
      },
      {
        activityID: 24,
        activityName: "Sunrise Yoga",
        activityLocation: "Hawaii, United States",
        activityCost: 39.99,
        linkToActivity: "https://www.hawaiiyoga.com",
        activityKeywords: ["yoga", "wellness", "mindfulness", "sunrise"],
      },
      {
        activityID: 25,
        activityName: "Island Tour",
        activityLocation: "Hawaii, United States",
        activityCost: 99.99,
        linkToActivity: "https://www.hawaiitour.com",
        activityKeywords: ["tour", "culture", "history", "adventure"],
      },
      {
        "activityID": 26,
        "activityName": "Beach Volleyball",
        "activityLocation": "Rio de Janeiro, Brazil",
        "activityCost": 39.99,
        "linkToActivity": "https://www.beachvolleybrazil.com",
        "activityKeywords": ["beach", "volleyball", "sports", "sun"]
      },
      {
        "activityID": 27,
        "activityName": "Snorkeling Adventure",
        "activityLocation": "Maui, Hawaii",
        "activityCost": 59.99,
        "linkToActivity": "https://www.mauiadventures.com",
        "activityKeywords": ["beach", "snorkeling", "ocean", "adventure"]
      },
      {
        "activityID": 28,
        "activityName": "Sandcastle Building",
        "activityLocation": "Cancun, Mexico",
        "activityCost": 19.99,
        "linkToActivity": "https://www.sandcastlecancun.com",
        "activityKeywords": ["beach", "creative", "family", "fun"]
      },
      {
        "activityID": 29,
        "activityName": "Beach Yoga",
        "activityLocation": "Bali, Indonesia",
        "activityCost": 29.99,
        "linkToActivity": "https://www.beachyoga-bali.com",
        "activityKeywords": ["beach", "yoga", "wellness", "mindfulness"]
      },
      {
        "activityID": 30,
        "activityName": "Surfing Lessons",
        "activityLocation": "Gold Coast, Australia",
        "activityCost": 79.99,
        "linkToActivity": "https://www.surflessons-au.com",
        "activityKeywords": ["beach", "surfing", "adventure", "water"]
      },
      {
        "activityID": 31,
        "activityName": "Beach Picnic",
        "activityLocation": "Santa Monica, California",
        "activityCost": 34.99,
        "linkToActivity": "https://www.picnicsantamonica.com",
        "activityKeywords": ["beach", "picnic", "relaxation", "food"]
      },
      {
        "activityID": 32,
        "activityName": "Beach Photography Tour",
        "activityLocation": "Phuket, Thailand",
        "activityCost": 49.99,
        "linkToActivity": "https://www.phuketphoto-tour.com",
        "activityKeywords": ["beach", "photography", "tour", "scenic"]
      },
      {
        "activityID": 33,
        "activityName": "Beachfront Horseback Riding",
        "activityLocation": "Barbados",
        "activityCost": 89.99,
        "linkToActivity": "https://www.beachhorsebarbados.com",
        "activityKeywords": ["beach", "horseback riding", "adventure", "nature"]
      },
      {
        "activityID": 34,
        "activityName": "Beachside Massage",
        "activityLocation": "Maldives",
        "activityCost": 69.99,
        "linkToActivity": "https://www.maldivesmassage.com",
        "activityKeywords": ["beach", "massage", "wellness", "relaxation"]
      },
      {
        "activityID": 35,
        "activityName": "Beach Hike",
        "activityLocation": "Big Sur, California",
        "activityCost": 44.99,
        "linkToActivity": "https://www.bigsurhike.com",
        "activityKeywords": ["beach", "hiking", "nature", "scenic"]
      },
      {
        "activityID": 36,
        "activityName": "Beachside Cooking Class",
        "activityLocation": "Santorini, Greece",
        "activityCost": 59.99,
        "linkToActivity": "https://www.santorinicooking.com",
        "activityKeywords": ["beach", "cooking", "culinary", "culture"]
      },
      {
        "activityID": 37,
        "activityName": "Beach Volleyball Tournament",
        "activityLocation": "Miami, Florida",
        "activityCost": 49.99,
        "linkToActivity": "https://www.miamivolleyball.com",
        "activityKeywords": ["beach", "volleyball", "competition", "sports"]
      },
      {
        "activityID": 38,
        "activityName": "Maldives Snorkeling Adventure",
        "activityLocation": "Maldives",
        "activityCost": 69.99,
        "linkToActivity": "https://www.maldivesnorkeladventure.com",
        "activityKeywords": ["snorkeling", "beach", "ocean", "adventure"]
      },
      {
        "activityID": 39,
        "activityName": "Maldives Sunset Cruise",
        "activityLocation": "Maldives",
        "activityCost": 89.99,
        "linkToActivity": "https://www.maldivessunsetcruise.com",
        "activityKeywords": ["sunset", "cruise", "beach", "relaxation"]
      },
      {
        "activityID": 40,
        "activityName": "Maldives Island Hopping",
        "activityLocation": "Maldives",
        "activityCost": 79.99,
        "linkToActivity": "https://www.maldivesislandhopping.com",
        "activityKeywords": ["island hopping", "beach", "exploration", "adventure"]
      },
      {
        "activityID": 41,
        "activityName": "Maldives Underwater Photography",
        "activityLocation": "Maldives",
        "activityCost": 99.99,
        "linkToActivity": "https://www.maldivesunderwaterphoto.com",
        "activityKeywords": ["underwater", "photography", "beach", "adventure"]
      },
      {
        "activityID": 42,
        "activityName": "Maldives Dolphin Watching",
        "activityLocation": "Maldives",
        "activityCost": 54.99,
        "linkToActivity": "https://www.maldivesdolphinwatch.com",
        "activityKeywords": ["dolphin watching", "beach", "ocean", "nature"]
      },
      {
        "activityID": 43,
        "activityName": "Maldives Beachside Spa Retreat",
        "activityLocation": "Maldives",
        "activityCost": 129.99,
        "linkToActivity": "https://www.maldivessparetreat.com",
        "activityKeywords": ["spa", "retreat", "beach", "wellness"]
      },
      {
        "activityID": 44,
        "activityName": "Maldives Fishing Excursion",
        "activityLocation": "Maldives",
        "activityCost": 59.99,
        "linkToActivity": "https://www.maldivesfishing.com",
        "activityKeywords": ["fishing", "excursion", "beach", "adventure"]
      },
      {
        "activityID": 45,
        "activityName": "Maldives Romantic Beach Dinner",
        "activityLocation": "Maldives",
        "activityCost": 149.99,
        "linkToActivity": "https://www.maldivesromanticdinner.com",
        "activityKeywords": ["romantic", "beach", "dinner", "couples"]
      },
      {
        "activityID": 46,
        "activityName": "Maldives Water Villa Experience",
        "activityLocation": "Maldives",
        "activityCost": 199.99,
        "linkToActivity": "https://www.maldiveswatervilla.com",
        "activityKeywords": ["water villa", "beach", "luxury", "accommodation"]
      },
      {
        "activityID": 47,
        "activityName": "Maldives Coral Reef Snorkeling",
        "activityLocation": "Maldives",
        "activityCost": 74.99,
        "linkToActivity": "https://www.maldivescoralreefsnorkel.com",
        "activityKeywords": ["snorkeling", "coral reef", "beach", "nature"]
      },
      {
        "activityID": 48,
        "activityName": "Luxury Spa Retreat",
        "activityLocation": "Bora Bora, French Polynesia",
        "activityCost": 249.99,
        "linkToActivity": "https://www.boraboraluxurysparetreat.com",
        "activityKeywords": ["luxury", "spa", "retreat", "wellness"]
      },
      {
        "activityID": 49,
        "activityName": "Private Yacht Charter",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 499.99,
        "linkToActivity": "https://www.amalfiyachting.com",
        "activityKeywords": ["luxury", "yacht", "charter", "cruise"]
      },
      {
        "activityID": 50,
        "activityName": "Exclusive Wine Tasting",
        "activityLocation": "Napa Valley, California",
        "activityCost": 179.99,
        "linkToActivity": "https://www.napawineexclusives.com",
        "activityKeywords": ["luxury", "wine tasting", "vineyard", "culinary"]
      },
      {
        "activityID": 51,
        "activityName": "Five-Star Beachfront Resort",
        "activityLocation": "Maui, Hawaii",
        "activityCost": 349.99,
        "linkToActivity": "https://www.mauiresortluxury.com",
        "activityKeywords": ["luxury", "resort", "beachfront", "accommodation"]
      },
      {
        "activityID": 52,
        "activityName": "Helicopter Tour of the Grand Canyon",
        "activityLocation": "Las Vegas, Nevada",
        "activityCost": 599.99,
        "linkToActivity": "https://www.vegashelitours.com",
        "activityKeywords": ["luxury", "helicopter tour", "adventure", "scenic"]
      },
      {
        "activityID": 53,
        "activityName": "Gourmet Dinner on a Private Island",
        "activityLocation": "Seychelles",
        "activityCost": 399.99,
        "linkToActivity": "https://www.seychellesgourmetisland.com",
        "activityKeywords": ["luxury", "gourmet", "dinner", "exclusive"]
      },
      {
        "activityID": 54,
        "activityName": "Luxe Shopping Experience",
        "activityLocation": "Paris, France",
        "activityCost": 299.99,
        "linkToActivity": "https://www.parisluxeshopping.com",
        "activityKeywords": ["luxury", "shopping", "experience", "fashion"]
      },
      {
        "activityID": 55,
        "activityName": "Chalet Stay in the Swiss Alps",
        "activityLocation": "Zermatt, Switzerland",
        "activityCost": 449.99,
        "linkToActivity": "https://www.zermattchalet.com",
        "activityKeywords": ["luxury", "chalet", "mountain", "accommodation"]
      },
      {
        "activityID": 56,
        "activityName": "Private Jet Excursion",
        "activityLocation": "Monaco",
        "activityCost": 999.99,
        "linkToActivity": "https://www.monacoprivatejet.com",
        "activityKeywords": ["luxury", "private jet", "excursion", "travel"]
      },
      {
        "activityID": 57,
        "activityName": "Luxury Car Driving Experience",
        "activityLocation": "Maranello, Italy",
        "activityCost": 299.99,
        "linkToActivity": "https://www.maranellocarexperience.com",
        "activityKeywords": ["luxury", "car", "driving", "experience"]
      },
      {
        "activityID": 58,
        "activityName": "Luxury Cliffside Villa Retreat",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 599.99,
        "linkToActivity": "https://www.amalfivillaretreat.com",
        "activityKeywords": ["luxury", "villa", "retreat", "accommodation"]
      },
      {
        "activityID": 59,
        "activityName": "Private Sailing Experience",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 699.99,
        "linkToActivity": "https://www.amalfisailingluxury.com",
        "activityKeywords": ["luxury", "sailing", "experience", "adventure"]
      },
      {
        "activityID": 60,
        "activityName": "Michelin-Star Dining Overlooking the Coast",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 349.99,
        "linkToActivity": "https://www.amalfidiningluxury.com",
        "activityKeywords": ["luxury", "dining", "Michelin-star", "culinary"]
      },
      {
        "activityID": 61,
        "activityName": "Private Helicopter Tour of Amalfi",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 899.99,
        "linkToActivity": "https://www.amalfihelitour.com",
        "activityKeywords": ["luxury", "helicopter tour", "scenic", "adventure"]
      },
      {
        "activityID": 62,
        "activityName": "Exclusive Beachfront Spa Day",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 449.99,
        "linkToActivity": "https://www.amalfispaday.com",
        "activityKeywords": ["luxury", "spa", "beachfront", "wellness"]
      },
      {
        "activityID": 63,
        "activityName": "Luxury Yacht Sunset Cruise",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 799.99,
        "linkToActivity": "https://www.amalfiyachtluxury.com",
        "activityKeywords": ["luxury", "yacht", "sunset cruise", "romantic"]
      },
      {
        "activityID": 64,
        "activityName": "Private Wine Tasting at a Vineyard",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 299.99,
        "linkToActivity": "https://www.amalfiwineexperience.com",
        "activityKeywords": ["luxury", "wine tasting", "vineyard", "culinary"]
      },
      {
        "activityID": 65,
        "activityName": "Luxury Speedboat Tour of Capri",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 749.99,
        "linkToActivity": "https://www.caprispeedboatluxury.com",
        "activityKeywords": ["luxury", "speedboat tour", "Capri", "adventure"]
      },
      {
        "activityID": 66,
        "activityName": "Private Cooking Class with Renowned Chef",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 499.99,
        "linkToActivity": "https://www.amalfichefluxury.com",
        "activityKeywords": ["luxury", "cooking class", "culinary", "experience"]
      },
      {
        "activityID": 67,
        "activityName": "Luxury Coastal Hike with Personal Guide",
        "activityLocation": "Amalfi Coast, Italy",
        "activityCost": 389.99,
        "linkToActivity": "https://www.amalfihikeluxury.com",
        "activityKeywords": ["luxury", "coastal hike", "guide", "adventure"]
      }
    ],
  };

// Function that loops through all activities and returns list of
// activities matching the @param query.
// @param query The location we are searching for
// @return List of activity objects to be displayed as horizontal cards on screen.
function searchActivitiesLocation(query) {
  var resultsList = [];
  query = query.toLowerCase();
  // Loop through data, searching for a match in Location
  for (const activity of data.activities) {
    let lowercaseLocation = activity.activityLocation.toLowerCase();
    if (lowercaseLocation.includes(query)) {
      resultsList.push(activity);
      console.log("Activity Pushed");
    }
  }
  // @return list of objects of activities
  return resultsList;
};
// Function that loops through all activities and returns list of
// activities matching the @param query.
// @param query The keyword we are searching for
// @return List of activity objects to be displayed as horizontal cards on screen.
function searchActivitiesKW(query) {
    var resultsList = [];
    query = query.toLowerCase();
    // Loop through data, searching for a match in keyword
    for (const activity of data.activities) {
      let kw = activity.activityKeywords
      if (kw.includes(query)) {
        resultsList.push(activity);
        console.log("activity pushed KW");
      }
    }
    // @return list of objects of activities
    return resultsList;
};


// Store HTML elements of results container, Location Search container, keyword search container and 
// submit button as vars
const searchBoxLocation = document.getElementById("searchBoxLocation");
const searchBoxKW = document.getElementById("searchBoxKW");
const searchButton = document.getElementById("submitSearch");
const resultsContainer = document.getElementById("resultsContainer");

// Add even listener to check for input in searchBoxLocation text input
// @param keyup Checks for key input, causes callBack function
// @param function() The Callback function to execute on keyup. Used to
// display results of search 
searchButton.addEventListener('click', function () {
  // queries in both search bars
  const locationQuery = searchBoxLocation.value;
  const keywordQuery = searchBoxKW.value;

  const searchResultsLocation = searchActivitiesLocation(locationQuery);
  const searchResultsKW = searchActivitiesKW(keywordQuery);
  // intersection of KW search and location search
  const trueResults = searchResultsKW.filter(x  => searchResultsLocation.includes(x));
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";
  console.log(trueResults);
  if (keywordQuery.length == 0 || keywordQuery == null) {
    for (const obj of searchResultsLocation){
      // Create div for each
      let cardElement = document.createElement("div");
      cardElement.classList.add("card");
      // Create card content using obj
      cardElement.innerHTML = `
              <div class="card-content">
                  <div class="card-title"><h3 class="activTitle">${obj.activityName}</h3></div>
                  <div class="card-location"><h4 class="locationC">${obj.activityLocation}</h4></div>
                  <div class="card-link"><a href="${obj.linkToActivity}">${obj.linkToActivity}</a></div>
                  <div class="card-price"><h5 class="activCost">Cost of Activity: $${obj.activityCost} (per person)</h5></div>
                  <input type="button" id="bookNow" value="Book Now!"onclick="window.location.href="${obj.linkToActivity}" />
              </div>`;
      resultsContainer.appendChild(cardElement); 
    }
    return;
  }

  // Loop through list of matches
  for (const obj of trueResults){
    // Create div for each
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");
    // Create card content using obj
    cardElement.innerHTML = `
            <div class="card-content">
                <div class="card-title"><h3 class="activTitle">${obj.activityName}</h3></div>
                <div class="card-location"><h4 class="locationC">${obj.activityLocation}</h4></div>
                <div class="card-link"><a href="${obj.linkToActivity}">${obj.linkToActivity}</a></div>
                <div class="card-price"><h5 class="activCost">Cost of Activity: $${obj.activityCost} (per person)</h5></div>
                <input type="button" id="bookNow" value="Book Now!"onclick="window.location.href="${obj.linkToActivity}" />
            </div>`;
    resultsContainer.appendChild(cardElement); 
  }
});

