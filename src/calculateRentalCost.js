/**
 * @param {number} days
 *
 * @return {number}
 */

const AUTO_PRICE_PER_DAY = 40;
const BIG_SALE = 50;
const SMALL_SALE = 20;

function calculateRentalCost(days) {
  let sale = 0;

  if (days >= 3) {
    sale = SMALL_SALE;
  }

  if (days >= 7) {
    sale = BIG_SALE;
  }

  return days * AUTO_PRICE_PER_DAY - sale;
}

module.exports = calculateRentalCost;
