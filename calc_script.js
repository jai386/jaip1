function displynumber(number) {
				if(calcform.txt1.value=="Infinity")
				{
					calcform.txt1.value='';
				}
				calcform.txt1.value = calcform.txt1.value+number;
			}

			function clearButton() {
				calcform.txt1.value = '';
			}

			function allClearButton(str) {
				let str1=str.slice(0,-1);
				calcform.txt1.value = str1;	
			}

			function calc(exp) {
				var result = eval(exp);
				calcform.txt1.value = result;
			}