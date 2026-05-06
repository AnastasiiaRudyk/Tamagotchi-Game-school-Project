function toggleWater() {
    let water = document.getElementById('water');
    if (water.style.display === "none" || water.style.display === "") {
        water.style.display = "block";
    } else {
        water.style.display = "none";
    }
}

function toggleWater1() {
    let water1 = document.getElementById('water1');
    if (water1.style.display === "none" || water1.style.display === "") {
        water1.style.display = "block";
    } else {
        water1.style.display = "none";
    }
}

class Pet {
  constructor() {
    this.hunger = 50;
    this.hygiene = 50;
    this.sleep = 50;
    this.joy = 50;
    this.currentRoom = "bathroom-wrapper";
  }

  tick() {
    this.hunger -= 2;
    this.hygiene -= 2;
    this.sleep -= 2;
    this.joy -= 2;

    if (this.currentRoom === 'bathroom-wrapper') this.hygiene += 12;
    if (this.currentRoom === 'kitchen-wrapper') this.hunger += 12;
    if (this.currentRoom === 'bedroom-wrapper') {
      this.sleep += 12;
      this.joy += 7;
    }

    this.render();
  }

  render() {
    document.getElementById('num1').innerText = this.hunger;
    document.getElementById('num2').innerText = this.hygiene;
    document.getElementById('num3').innerText = this.sleep;
    document.getElementById('num4').innerText = this.joy;
  }
}

const myPet = new Pet();
setInterval(() => myPet.tick(), 1000);

function showRoom(name) {
  document.querySelector('.bathroom-wrapper').style.display = 'none';
  document.querySelector('.bedroom-wrapper').style.display = 'none';
  document.querySelector('.kitchen-wrapper').style.display = 'none';

  const active = document.querySelector('.' + name);
  if (active) {
    active.style.display = 'flex';
    myPet.currentRoom = name;
  }
}