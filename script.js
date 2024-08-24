document.getElementById('openGame').addEventListener('click', function() {
    document.getElementById('gameContainer').style.display = 'block'; // 顯示遊戲
});

document.getElementById('closeGame').addEventListener('click', function() {
    document.getElementById('gameContainer').style.display = 'none'; // 隱藏遊戲，不重新加載
});
