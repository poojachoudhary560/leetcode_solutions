// Employee - Manager
// A            C
// B            C
// C            F
// D            E
// E            F
// F            F

let input = {
  A: "C",
  B: "C",
  C: "F",
  D: "E",
  E: "F",
  F: "F",
};

// create manager emp list - tree
function fetchManagerEmpList() {
  let managerEmpListMap = {};
  let ceo = "";
  for (let i in input) {
    if (i === input[i]) {
      ceo = i;
    } else {
      let manager = input[i];
      if (managerEmpListMap[manager]) {
        managerEmpListMap[manager].add(i);
      } else {
        managerEmpListMap[manager] = new Set();
        managerEmpListMap[manager].add(i);
      }
    }
  }
  console.log("managerEmpListMap", managerEmpListMap);
  return {
    ceo,
    managerEmpListMap,
  };
}

function getSize(manager, managerEmpListMap, sizeMap) {
  if (managerEmpListMap[manager] === undefined) {
    sizeMap[manager] = 0;
    return 1;
  }
  let listEmp = managerEmpListMap[manager];
  let size = 0;
  for (let i of listEmp) {
    size += getSize(i, managerEmpListMap, sizeMap);
  }
  sizeMap[manager] = size;
  return size + 1;
}

function main() {
  let { ceo, managerEmpListMap } = fetchManagerEmpList();
  let sizeMap = {};
  let res = getSize(ceo, managerEmpListMap, sizeMap);
  console.log("res", res);
}
