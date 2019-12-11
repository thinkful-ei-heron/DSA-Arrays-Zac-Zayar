const MyMemory = require('./Memory')
const Memory = new MyMemory()
class Array {
	constructor() {
		this.length = 0;
		this.capacity = 0;
		this.location = Memory.allocate(this.length)
	}

	resize(size) {
		const oldLocation = this.location;
		this.location = Memory.allocate(size);
		Memory.copy(this.location, oldLocation, this.length);
		Memory.free(oldLocation);
		this.capacity = size;
	}

	get(index) {
		return Memory.get(this.location + index);
	}

	pop() {
		const value = Memory.get(this.location + this.length - 1);
		this.length--;
		return value;
	}

	insert(index, value) {
		if (this.length >= this.capacity) this.resize((this.length + 1) * 2);
		Memory.copy(this.location + index + 1, this.location + index, this.length - index)
		Memory.set(this.location + index, value);
		this.length++;
	}

	remove(index) {
		const value = Memory.get(index);
		Memory.copy(this.location + index, this.location + index + 1, this.length - index - 1)
		this.length--;
		return value;
	}

	push(value) {
		if (this.length >= this.capacity) this.resize((this.length + 1) * 2);
		Memory.set(this.location + this.length, value);
		this.length++;
	}

}

function main() {
	let arr = new Array();
	arr.push(3);

	arr.push(5);
	arr.push(15);
	arr.push(19);
	arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr.get(0))
  for (let i = 0; i <= arr.length; i++){
    console.log(arr.remove(i))
  }

  arr.push("tauhida");
  console.log(arr.get(0))
	console.log(arr);
}

main();