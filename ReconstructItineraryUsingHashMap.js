// reconstruct itinerary using hash maps
// chennai bangalore
// bombay delhi
// goa chennai
// delhi goa

// bombay --> delhi --> goa --> chennai --> bangalore

function reconstructItinerary(obj) {
  let map = {};

  for (let i in obj) {
    if (map[i] === undefined) {
      map[i] = true;
    }
    map[obj[i]] = false;
  }
  console.log(map);
  // find source
  let source = "";
  for (let i in map) {
    if (map[i]) {
      source = i;
    }
  }

  // print path
  while (true) {
    if (obj[source]) {
      console.log(source + " --> ");
      source = obj[source];
    } else {
      console.log(source);
      break;
    }
  }
}

let obj = {
  chennai: "bangalore",
  bombay: "delhi",
  goa: "chennai",
  delhi: "goa",
};

reconstructItinerary(obj);
