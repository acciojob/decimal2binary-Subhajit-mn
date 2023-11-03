function decimalToBinary(num) {
  //Write you code here
  let output = "";
	while(num > 0){
		if(num % 2 == 1){
			output = "1" + output;
		}else{
			output = "0" + output;
		}
		num = Math.floor(num / 2);
	}
	//console.log(output);
}

window.decimalToBinary = decimalToBinary;
