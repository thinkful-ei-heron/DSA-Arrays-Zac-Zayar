import { Memory } from './Memory'

class Array {
	constructor() {
		this.length = 0;
		this.capacity = 0;
		this.location = Memory.allocate(this.length)
	}

	resize(size) {
		const oldLocation = this.location;
		this.location = Memory.head;
		Memory.allocate(size);
		Memory.copy(this.location, oldLocation, this.length);
		Memory.free(oldLocation);
	}

	get(index) {
		return Memory.get(index);
	}

	pop() {
		const value = Memory.get(this.location + this.length - 1);
		this.length--;
		return value;
	}

	insert(index, value) {
		if (this.length >= this.capacity) this.resize(this.length * 2);
		Memory.copy(this.location + index + 1, this.location + index, this.length - index - 1)
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
    if (this.length >= this.capacity) this.resize(this.length * 2);
    Memory.set(this.location, value);
		this.length++;
	}

}

export default Array;