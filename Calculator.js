function toggleContent() {
    // 根據選擇的自摸有無切換顯示狀態
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