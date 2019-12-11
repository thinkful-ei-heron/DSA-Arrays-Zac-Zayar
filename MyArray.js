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
  console.log('created array', arr)
  let arr2 = new Array();
  console.log('created array2', arr2);
  arr2.push(2)
  console.log('pushed 2 to array2: ', arr2);

  console.log('get index 0 from arr2', arr2.get(0))

  arr.push(3);
  console.log('pushed 3', arr);
  arr.push(4);
  console.log('pushed 4', arr);
  console.log(arr.get(0));
  console.log(arr.get(1));
}

main();