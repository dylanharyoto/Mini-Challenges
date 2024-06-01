function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let list = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let final = [];
    let result = {status: "", change: []};
    for (let i = cid.length - 1; i >= 0; i--) {
        let whole = 0;
        if (change > list[i]) {
            whole = Math.floor(change / list[i]) * list[i];
            change %= whole;
            if (cid[i][1] >= whole) {
                final.push([cid[i][0], whole]);
                cid[i][1] -= whole;
            }
            else {
                final.push([cid[i][0], cid[i][1]]);
                change += whole - cid[i][1];
                cid[i][1] = 0;
            }
            change = change.toFixed(2);
            if (cid[i][1] > 0) {
                result["status"] = "OPEN";
                result["change"] = final;
            }
            else if (change > 0) {
                result["status"] = "INSUFFICIENT_FUNDS";
            }
            else {
                result["status"] = "CLOSED";
                cid[i][1] = whole;
                result["change"] = cid;
            }
        }
        continue;
    }
    return result;
}
let one = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(one);
let two = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(two);
let three = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(three);
let four = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(four);
let five = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(five);
