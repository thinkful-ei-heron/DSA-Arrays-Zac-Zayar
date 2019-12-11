# DSA Arrays: Zac and Zayar

## 2)
	- length: 1, capacity: 2, location: 0
	- length: 6, capacity: 6, location: 2

	When full capacity is reached, the code allocates a larger section at the next available memory block and moves its location forward.

## 3)
	- length: 3, capacity: 6, location: 2

	After removing three items from the end of the array, the length is shorter but the allocated capactity and its location remain unchanged.

## 4)
	The returned value is NaN because the memory can only store float numbers.
	The resize() function allocates a larger capacity of memory for the array at the
	next large-enough series of memory blocks.