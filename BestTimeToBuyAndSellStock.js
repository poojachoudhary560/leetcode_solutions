// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let auxArray = [];
  let latest = prices[prices.length - 1];
  for (let j = prices.length - 1; j >= 0; j--) {
    if (prices[j] >= latest) {
      auxArray.push(prices[j]);
      latest = prices[j];
    } else {
      auxArray.push(latest);
    }
  }

  //  console.log(prices, auxArray)
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let res = auxArray[auxArray.length - i - 1] - prices[i];
    if (res > profit) {
      profit = res;
    }
  }
  return profit;
};
