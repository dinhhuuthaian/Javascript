function countBill(bill){
	var total = 0;
	for(var bill of bills){
		if(!bill.fake){
		total += bill.value;
		}else{
			console.log('fake bill', bill);
			break
		}
	}
	return total;
}

var bills = [
	{value: 10000},
	{value: 20000},
	{value: 30000, fake: true},
	{value: 40000},
	{value: 50000}
];

var total = countBill(bills);
console.log(total);