// Exercise #2: Promotion Conditions

// Start coding here

const John = {
    lastMonthPaidAmount: 4001,
    boughtOnWeekday: true,
    boughtITProduct: true,
    attendedDiscountEvent: true,
    memberRanking: "Gold",
}

let lastMonthPaidMoreThan4000 = John.lastMonthPaidAmount > 4000;
let isWeekday = John.boughtOnWeekday;
let hasBoughtProductFromITCategory = John.boughtITProduct;
let hasAttendedDiscountEvent = John.attendedDiscountEvent;
let isPlatinum = John.memberRanking === "Platinum";

let hasPromotion = (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent)
    || isPlatinum;

console.log(hasPromotion);
