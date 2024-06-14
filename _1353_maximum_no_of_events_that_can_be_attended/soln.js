/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  var sortingFn = function ([s1, e1], [s2, e2]) {
    if (e1 === e2) return s1 - s2;
    return e1 - e2;
  };
  var binarySearch = function (start, end, events) {
    // let empty = -1;
    // while(start < end) {
    //     let mid = Math.floor((start + end) / 2);
    //     if(events[mid] === 0) {
    //         end = mid;
    //     } else {
    //         start = mid + 1;
    //     }
    // }
    for (let i = start; i <= end; i++) {
      if (events[i] === 0) {
        return i;
      }
    }
    return -1;
  };
  events.sort(sortingFn);
  // console.log(events)
  let count = 0;
  let eventsTracker = Array(100000).fill(0);
  for (let [es, ee] of events) {
    let index = binarySearch(es, ee, eventsTracker);
    // console.log("index", index, "--", es, "--", ee, "--", )
    if (index > -1) {
      eventsTracker[index] = 1;
      count++;
    }
  }
  // console.log(eventsTracker)

  return count;
};
