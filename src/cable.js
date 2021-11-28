/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(curr, req, sale) {
  let count = 0;
  let i = curr;
  while (i < req) {
    i += sale;
    count++;
  };
  return count
};


/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(curr, req, sale) {
  let distance = req - curr;
  let total = Math.round(distance / sale);
  return total;
}


module.exports = { cable1, cable2 };