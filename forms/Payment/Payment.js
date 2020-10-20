//create car loan payment function
function carLoanPayment(carPrinciple, carMonths, carInterest) {
  let carPayment = (carPrinciple/carMonths) * ((carInterest/100)+1)
  return carPayment
  }

//create home loan function
function homeLoanPayment(homePrinciple, homeYears, homeInterest) {
  let homePayment = (homePrinciple/homeYears * 12) * ((homeInterest/100 +1))
   return homePayment;
  }

//when user want to compute car loan
btnAuto.onclick=function(){
  let carPrin = ''
  let carInt = ''
  let carMon = ''
  carPrin = Number(inptPrinc.value)
  carInt = (Number(inptInt.value))/100
  carMon = Number(inptMon.value)
  console.log(carInt)
  let total = carLoanPayment(carPrin, carInt, carMon)
  lblRes.value = `A car loan for $${carPrin} over ${carMon} months at ${carInt}% interest would have a monthly payment of $${total}`
}

//when user wants to computer home loan
btnHome.onclick=function(){
  let homePrin = ''
  let homeInt = ''
  let homeYear = ''
  homePrin = Number(inptPrinc.value)
  homeInt = (Number(inptInt.value))/100
  homeYear = Number(inptMon.value)
  let total1 = homeLoanPayment(homePrin, homeInt, homeYear)
  lblRes.value = `A home loan for $${homePrin} over ${homeYear} years at ${homeInt}% interest would have a monthly payment of $${total1}`
}


