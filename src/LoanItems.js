class LoanItems {
   constructor(title) {
      this.title = title;
      this.onLoan = false;
   }

   isOnLoan() {
      return this.onLoan;
   }
}

module.exports = LoanItems;
