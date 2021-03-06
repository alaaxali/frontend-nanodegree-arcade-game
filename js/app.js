// Enemies our player must avoid
var Enemy = function (x, y, speed) {//
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x || 0;//
    this.y = y || 0;//
    this.speed = speed || 100;//
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;//
    this.repeat();//
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.




// Start Here//
Enemy.prototype.repeat = function () {
    if (this.x > 500) {
      this.x = -100;
    }
  };

  var Player = function () {
    this.x = 200;
    this.y = 380;
    this.hasWon = false;
    this.sprite = 'images/char-princess-girl.png';
  }
  
  // Updating player
  Player.prototype.update = function (dt) {
   
  }
  
  // Rendering player
  Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  
 
  // When the player wins 
  Player.prototype.checkWin = function () {
    if (this.y < 10 && !this.hasWon) {
      this.hasWon = true;
      // Pop up window to announce winning 
      setTimeout(function(){
        if(confirm('You Won, play again?')){
          // To restart the game 
        }
      }.bind(this), 100);
    }
  }
  
  // Player reset to the initial position
  Player.prototype.reset = function () {
    this.x = 200;
    this.y = 380;
    this.hasWon = false;
  }
  
  // Keyboard controls 
  Player.prototype.handleInput = function (key) {
    // 
    var hash = {
      left: handleLeft,
      right: handleRight,
      up: handleUp,
      down: handleDown
    };
    // Keyboard logic
    if (hash[key]) {
      hash[key](this);
      this.render();
      // 
      this.checkWin();
    }
  
    // 
    function handleLeft(scope) {
      scope.x -= 100;
      scope.x = Math.max(scope.x, 0);
    }
    function handleRight(scope) {
      scope.x += 100;
      scope.x = Math.min(scope.x, 400);
    }
    function handleUp(scope) {
      scope.y -= 83;
      scope.y = Math.max(scope.y, -10);
    }
    function handleDown(scope) {
      scope.y += 83;
      scope.y = Math.min(scope.y, 400);
    }
  }




// Till Here//

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(0, 60), new Enemy(0, 145, 200), new Enemy(0, 230, 300)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
