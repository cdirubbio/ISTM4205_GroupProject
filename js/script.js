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
    ],
  };

// Function that loops through all activities and returns list of
// activities matching the @param query.
// @param query The location we are searching for
// @return List of activity objects to be displayed as horizontal cards on screen.
function searchActivitiesLocation(query) {
  var resultsList = [];
  // Loop through data, searching for a match in Location
  for (const activity of data.activities) {
    if (activity.activityLocation.includes(query.toLowerCase())) {
      resultsList.push(activity);
      console.log(activity.activityLocation);
    }
  }
  // @return list of objects of activities
  return resultsList;
}
// Function that loops through all activities and returns list of
// activities matching the @param query.
// @param query The keyword we are searching for
// @return List of activity objects to be displayed as horizontal cards on screen.
function searchActivitiesKW(query) {
    var resultsList = [];
    // Loop through data, searching for a match in keyword
    for (const activity of data.activities) {
      if (activity.activityKeywords.includes(query.toLowerCase())) {
        resultsList.push(activity);
        console.log(activity);
      }
    }
    // @return list of objects of activities
    return resultsList;
  }


// Store HTML elements of results container, Location Search container, and 
// submit button as vars
const searchBoxLocation = document.getElementById("searchBoxLocation");
const resultsContainer = document.getElementById("resultsContainer");
const searchButton = document.getElementById("submitSearch")

// Add even listener to check for input in searchBoxLocation text input
// @param keyup Checks for key input, causes callBack function
// @param function() The Callback function to execute on keyup. Used to
// display results of search 
searchButton.addEventListener('click', function () {
  const query = searchBoxLocation.value;
  const searchResultsLocation = searchActivitiesLocation(query);
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

//   const resultCountContainer = document.getElementById("resultCountContainer")
//   resultCountContainer.appendChild(`The search ${query} returned ${searchResultsLocation.length} results.`);
  // Loop through list of matches
  for (const obj of searchResultsLocation){
    // Create div for each
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");
    // Create card content using obj
    cardElement.innerHTML = `
            <div class="card-content">
                <div class="card-title">${obj.activityName}</div>
                <div class="card-location">${obj.activityLocation}</div>
                <div class="card-link">${obj.linkToActivity}</div>
            </div>`;
    resultsContainer.appendChild(cardElement); 
  }
});

// <img src="${searchResultsLocation[i].activityImage}" alt="${searchResultsLocation[i].activityName}">