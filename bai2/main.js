class Game {
    constructor() {
        this.score = 0;
        this.missedCount = 0;
        this.maxMisses = 5;
        this.gameOver = false;
        this.introSection = document.getElementById('intro');
        this.gameSection = document.querySelector('.game');
        this.basketElement = document.getElementById('basket');
        this.eggElement = document.getElementById('egg');
        this.scoreElement = document.getElementById('score');
        this.startButton = document.getElementById('startButton');
        this.startButton.addEventListener('click', () => this.startGame());
        document.addEventListener('mousemove', (e) => this.moveBasket(e)); 
        this.basket = new Basket(this.basketElement);
        this.egg = new Egg(this.eggElement);
    }

    startGame() {
        this.introSection.style.display = 'none';
        this.gameSection.style.display = 'block';
        this.resetGame();
        this.gameLoop();
    }

    resetGame() {
        this.score = 0;
        this.missedCount = 0;
        this.gameOver = false;
        this.updateScore();
        this.egg.reset();
    }

    moveBasket(event) {
        if (!this.gameOver) {
            this.basket.move(event.clientX);
        }
    }

    updateScore() {
        this.scoreElement.textContent = `Score: ${this.score}`;
    }

    checkCollision() {
        const basketRect = this.basketElement.getBoundingClientRect();
        const eggRect = this.eggElement.getBoundingClientRect();

        return !(
            basketRect.right < eggRect.left ||
            basketRect.left > eggRect.right ||
            basketRect.bottom < eggRect.top ||
            basketRect.top > eggRect.bottom
        );
    }

    gameLoop() {
        if (this.gameOver) return;

        this.egg.fall();
        if (this.egg.hasHitBottom()) {
            if (this.checkCollision()) {
                //caught
                this.score++;
                this.updateScore();
            } else {
                // missed
                this.missedCount++;
                if (this.missedCount >= this.maxMisses) {
                    this.endGame();
                    return;
                }
            }
            this.egg.reset();
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    endGame() {
        this.gameOver = true;
        alert(`Game Over! Your final score is ${this.score}`);
        if (confirm('Would you like to play again?')) {
            this.resetGame();
            this.gameLoop();
        } else {
            this.introSection.style.display = 'flex';
            this.gameSection.style.display = 'none';
        }
    }
}

class Basket {
    constructor(element) {
        this.element = element;
        this.width = element.offsetWidth;
    }

    move(mouseX) {
        const maxX = window.innerWidth - this.width;
        let newX = mouseX - this.width / 2;
        newX = Math.max(0, Math.min(newX, maxX));
        this.element.style.left = `${newX}px`;
    }
}

class Egg {
    constructor(element) {
        this.element = element;
        this.fallSpeed = 1;
        this.acceleration = 0.2;
        this.letterElement = element.querySelector('.egg-letter'); 
        this.reset();
    }

    reset() {
        this.position = 0;
        this.currentSpeed = this.fallSpeed;
        const maxX = window.innerWidth - this.element.offsetWidth;
        this.element.style.left = `${Math.random() * maxX}px`;
        this.element.style.top = '0px';
        this.setRandomLetter();
    }

    setRandomLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        this.letterElement.textContent = randomLetter; 
    }

    fall() {
        this.currentSpeed += this.acceleration;
        this.position += this.currentSpeed;
        this.element.style.top = `${this.position}px`;
    }

    hasHitBottom() {
        return this.position + this.element.offsetHeight >= window.innerHeight;
    }
}
window.addEventListener('load', () => {
    new Game();
});