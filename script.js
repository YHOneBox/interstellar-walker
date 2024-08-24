document.getElementById('openGame').addEventListener('click', function() {
    var gameContainer = document.getElementById('gameContainer');
    gameContainer.style.zIndex = 1000; // 將遊戲放到最上層
});

document.getElementById('closeGame').addEventListener('click', function() {
    var gameContainer = document.getElementById('gameContainer');
    gameContainer.style.zIndex = -1; // 將遊戲放到最底層
});
