const LoanItems = require('./LoanItems');

class Newspaper extends LoanItems {
   checkIn() {
      throw new Error('newspapers are not available for loan');
   }
}

module.exports = Newspaper;
