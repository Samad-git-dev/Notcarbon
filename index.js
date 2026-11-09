let it = 3;

function formatWithComma(num) {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Months(params) {


   it = params;

   if (it == 1) {
      interestValue.innerHTML = '₦' + formatWithComma(0.05 * Number(loan.value));
      repayment.innerHTML = '₦' + formatWithComma((0.05 * Number(loan.value)) + parseInt(loan.value));
      estimatePay.innerHTML = '₦' +  formatWithComma(parseInt(((0.05 * Number(loan.value)) + Number(loan.value)) / it));
      document.getElementById('1').style.background = '#3b6dff';
      document.getElementById('3').style.background = 'white';
      document.getElementById('6').style.background = 'white';
      document.getElementById('9').style.background = 'white';
      document.getElementById('12').style.background = 'white';
   } else if (it == 3) {
      interestValue.innerHTML = '₦' + formatWithComma(0.15 * Number(loan.value));
      repayment.innerText = '₦' + formatWithComma((0.15 * Number(loan.value)) + parseInt(loan.value));
      estimatePay.innerHTML = '₦' +  formatWithComma(parseInt(((0.15 * Number(loan.value)) + Number(loan.value)) / it));
      document.getElementById('1').style.background = 'white';
      document.getElementById('3').style.background = '#3b6dff';
      document.getElementById('6').style.background = 'white';
      document.getElementById('9').style.background = 'white';
      document.getElementById('12').style.background = 'white';
      
   }
   else if (it == 6) {
      interestValue.innerHTML = '₦' + formatWithComma(0.30 * Number(loan.value));
      repayment.innerText = '₦' + formatWithComma((0.30 * Number(loan.value)) + parseInt(loan.value));
      estimatePay.innerHTML = '₦' +  formatWithComma(parseInt(((0.30 * Number(loan.value)) + Number(loan.value)) / it));
      document.getElementById('1').style.background = 'white';
      document.getElementById('3').style.background = 'white';
      document.getElementById('6').style.background = '#3b6dff';
      document.getElementById('9').style.background = 'white';
      document.getElementById('12').style.background = 'white';
   }
   else if (it == 9) {
      interestValue.innerHTML = '₦' + formatWithComma(0.45 * Number(loan.value));
      repayment.innerText = '₦' + formatWithComma((0.45 * Number(loan.value)) + parseInt(loan.value));
      estimatePay.innerHTML = '₦' +  formatWithComma(parseInt(((0.45 * Number(loan.value)) + Number(loan.value)) / it));
      document.getElementById('1').style.background = 'white';
      document.getElementById('3').style.background = 'white';
      document.getElementById('6').style.background = 'white';
      document.getElementById('9').style.background = '#3b6dff';
      document.getElementById('12').style.background = 'white';
   }
   else if (it == 12) {
      interestValue.innerHTML = '₦' + formatWithComma(0.60 * Number(loan.value));
      repayment.innerText = '₦' + formatWithComma((0.60 * Number(loan.value)) + parseInt(loan.value));
      estimatePay.innerHTML = '₦' +  formatWithComma(parseInt(((0.60 * Number(loan.value)) + Number(loan.value)) / it));
      document.getElementById('1').style.background = 'white';
      document.getElementById('3').style.background = 'white';
      document.getElementById('6').style.background = 'white';
      document.getElementById('9').style.background = 'white';
      document.getElementById('12').style.background = '#3b6dff';
   }
}



function inPut() {
   let outPut = document.getElementById('outPut');
   let range = document.getElementById('loan')
   outPut.innerText = '₦' + formatWithComma(range.value);
   principal.innerText = outPut.innerText;
   estimatePay.innerHTML
   Months(it)
}

