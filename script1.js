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

    updateNumber() {
        const ids = ["num1", "num2", "num3", "num4"];
        const values = [this.hunger, this.hygiene, this.sleep, this.joy];
        
        ids.forEach((id, index) => {
            const el = document.getElementById(id);
            if (el) el.innerText = values[index];
        });
    }

    tick() {
        this.hunger = Math.min(100, this.hunger - 2);
        this.joy = Math.max(0, this.joy - 2);
        this.hygiene = Math.max(0, this.hygiene - 2);
        this.sleep = Math.max(0, this.sleep - 2);

        if (this.currentRoom === 'bathroom-wrapper') {
            this.hygiene = Math.min(100, this.hygiene + 10);
        }
        if (this.currentRoom === 'bedroom-wrapper') {
            this.joy = Math.min(100, this.joy + 5);
            this.sleep = Math.min(100, this.sleep + 10);
        }
        if (this.currentRoom === 'kitchen-wrapper') {
            this.hunger = Math.max(0, this.hunger + 10);
        }

        this.updateNumber();
    }
}

const myPet = new Pet();
setInterval(() => myPet.tick(), 1000);

function showRoom(name) {
    const rooms = ['.bathroom-wrapper', '.bedroom-wrapper', '.kitchen-wrapper'];
    rooms.forEach(room => {
        const el = document.querySelector(room);
        if (el) el.style.display = 'none';
    });

    const activeRoom = document.querySelector('.' + name);
    if (activeRoom) activeRoom.style.display = 'flex';
    
    myPet.currentRoom = name;
}