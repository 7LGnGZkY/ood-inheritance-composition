class LoanItems {
   constructor(title) {
      this.title = title;
      this.onLoan = false;
   }

   isOnLoan() {
      return this.onLoan;
   }

   checkIn() {
      if (!this.isOnLoan()) throw new Error('Item not on loan');
      this.onLoan = false;
   }

   checkOut() {
      if (this.isOnLoan()) throw new Error('Item currently on loan');
      this.onLoan = true;
   }
}

module.exports = LoanItems;
