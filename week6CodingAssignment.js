class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  
    get value() {
      switch (this.rank) {
        case 'A': return 14;
        case 'K': return 13;
        case 'Q': return 12;
        case 'J': return 11;
        default: return Number(this.rank);
      }
    }
  
    toString() {
      return `${this.rank} ${this.suit}`;
    }
  }
  
class Deck {
    constructor() {
      this.cards = [];
      const suits = ['♠️', '♥', '♦', '♣'];
      const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
    }

    shuffle() {
      for (let i = 0; i < this.cards.length; i++) {
        const j = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }
  
    deal() {
      return this.cards.shift();
    }
  }
  
class Player {
    constructor(name) {
      this.name = name;
      this.points = 0;
      this.hand = [];
    }
  
    playCard() {
      return this.hand.shift();
    }
  
    addPoints(points) {
      this.points += points;
    }
  
    toString() {
      return `${this.name} has ${this.points} points`;
    }
  }
  
class Game {
    constructor(player1, player2) {
      this.deck = new Deck();
      this.deck.shuffle();
      this.players = [new Player(player1), new Player(player2)];
      for (let i = 0; i < 26; i++) {
        this.players[0].hand.push(this.deck.deal());
        this.players[1].hand.push(this.deck.deal());
      }
    }
  
    play() {
        console.log(`🚀⭐ Let's play WAR! ⭐🚀\n\n\n`)
        while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0) {
        const card1 = this.players[0].playCard();
        const card2 = this.players[1].playCard();
        console.log(`${this.players[0].name}:  ${card1}   vs   ${this.players[1].name}:  ${card2}`);
        const value1 = card1.value;
        const value2 = card2.value;
        if (value1 > value2) {
          console.log(`${this.players[0].name} wins the round!`);
          this.players[0].addPoints(1);
        } else if (value1 < value2) {
          console.log(`${this.players[1].name} wins the round!`);
          this.players[1].addPoints(1);
        } else {
          console.log(`Tie!`);
        }
      }
      console.log(`\nGAME OVER!\n${this.players[0]} vs ${this.players[1]}`);
      if (this.players[0].points > this.players[1].points) {
        console.log(`${this.players[0].name} wins the game!`);
        } else if (this.players[0].points < this.players[1].points) {
        console.log(`🎉 ${this.players[1].name} wins the game! 🎉`);
        } else {
            console.log(`It's a tie!`);
        }
     }
    }
  
  const game = new Game('Tom', 'Jerry');
  game.play();


        