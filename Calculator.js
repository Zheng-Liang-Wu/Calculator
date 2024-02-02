function toggleContent() {
  var selfDrawnWinValue = document.querySelector('input[name="selfDrawnWin"]:checked').value;
  var whoBanker = document.getElementById('whoBanker');
  var bankerArea = document.getElementById('bankerArea');
  var paymentDropdown = document.getElementById('paymentDropdown');
    
  if (selfDrawnWinValue === 'yes') {
      whoBanker.classList.remove('hidden');
      bankerArea.classList.remove('hidden');
      paymentDropdown.classList.add('hidden');
  } else {
      whoBanker.classList.add('hidden');
      bankerArea.classList.add('hidden');
      paymentDropdown.classList.remove('hidden');
    }
} 

function calculateMoney() {
  var WonUnit = parseInt(document.getElementById('wonUnit').value);
  var continueBanker = parseInt(document.getElementById('continueBanker').value);
  var selfDrawnWin = document.querySelector('input[name="selfDrawnWin"]:checked').value;
    
  var basicUnits = 30;
  var eachUnit = 10;
  var normalWin = basicUnits + eachUnit * WonUnit;

  var amounts = calculatePlayerAmounts(wonUnit, normalWin, continueBanker, selfDrawnWin);
  updateAmounts(amounts.playerAmounts);
  }

function calculateExtraUnits(continueBanker) {
  var minExtraUnitsPerContinue = 1;
  var ExtraUnitsPerContinue = 2;
  var extraUnits = minExtraUnitsPerContinue + ExtraUnitsPerContinue * continueBanker;
  return extraUnits;
  }

