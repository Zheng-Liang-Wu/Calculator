var basicUnits = 30;
var eachUnit = 10;
var normalWin;
var selectedBanker; // 保存選中的莊家

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

function updateBanker() {
  var bankerSelect = document.getElementById('banker');
  selectedBanker = bankerSelect.value;
  // 在這裡你可以進行相應的處理，比如打印到控制台
  console.log('Selected Banker:', selectedBanker);
}

function calculateMoney() {
  var wonUnitElement = document.getElementById('wonUnit');
  var wonUnit = wonUnitElement ? parseInt(wonUnitElement.value) : 0;
  console.log('wonUnit:', wonUnit); // 添加這一行

  var continueBankerElement = document.getElementById('continueBanker');
  var continueBanker = continueBankerElement ? parseInt(continueBankerElement.value) : 0;
  var selfDrawnWin = document.querySelector('input[name="selfDrawnWin"]:checked').value;
    
  var normalWin = basicUnits + (eachUnit * wonUnit);
  var extraUnits = calculateExtraUnits(continueBanker);
  console.log('normalWin:', normalWin); // 添加這一行
  console.log('extraUnits:', extraUnits); // 添加這一行

  var amounts = calculatePlayerAmounts(wonUnit, normalWin, continueBanker, selfDrawnWin, extraUnits);
  console.log('amounts', amounts);

  updateAmounts(amounts);

}

function calculateExtraUnits(continueBanker) {
  var minExtraUnitsPerContinue = 1;
  var ExtraUnitsPerContinue = 2;
  var extraUnits = (minExtraUnitsPerContinue + ExtraUnitsPerContinue * continueBanker) * eachUnit;
  return extraUnits;
}

  function calculatePlayerAmounts(wonUnit, normalWin, continueBanker, selfDrawnWin, extraUnits, ) {
    var amounts = {
        'player1': 0,
        'player2': 0,
        'player3': 0,
        'player4': 0,
    };
    
    
    console.log('Self Drawn Win:', wonUnit, normalWin, continueBanker, selfDrawnWin, extraUnits);

    if (selfDrawnWin === 'yes') {
      if (selectedBanker === 'banker') {
        amounts[selectedBanker] = normalWin * 3;
    
        // 扣其他玩家
        for (var player in amounts) {
            if (player !== selectedBanker) {
                amounts[player] -= normalWin; // 扣 normalWin * 1
            }
        }
    } else {
        amounts[selectedBanker] = (normalWin * 2) + extraUnits;
        for (var player in amounts) {
          if (player !== selectedBanker) {
              amounts[player] -= normalWin; // 扣 normalWin * 1
          }
      }
}
    } else {
        amounts[selectedBanker] = normalWin;
    }

    console.log('Final Amounts:', amounts);
    return amounts;
  
}

function updateAmounts(amounts) {
  var playerAmounts = document.getElementById('playerAmounts');
  
  for (var player in amounts){
    var amount = amounts[player];
    var playerParagraph = document.getElementById('player'+ player.replace(/\D/g, '')); // 將 player 變數中的非數字字符去除，只留下數字部分。

    if (playerParagraph) {
      playerParagraph.textContent = player + ':' + amount + '元';
    }
    
  }
}

