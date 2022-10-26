# Arrays and Lists

Often in programming you will encounter a situation, where you need not one of something, but multiple elements.
For example, when creating a crafting table recipe, you need not one input, but up to 9.
Still, all of these elements somehow "belong" together as a single grouping.

Depending on whom you ask, this grouping can have many names.
These names could include `Lists`, `Arrays`, `Sets`, `Collections`, `Fields`, `Vectors`.  
Furthermore, some of these names carry specific meanings with them as to what these structures allow you to do with the data stored inside them.

In this page, we will look at the way `Lists` and `Arrays` can be used from within ZenCode scripts.
For the terminology, we will call the items inside a List or an Array as `Elements` of that structure.
For example, in the array below, `"A"`, `"B"` and `"C"` would be the elements of the array `arr`.

```zenscript
var arr = ["A", "B", "C"] as string[];
```

Also, this guide will only cover *linear* Arrays.
These are the arrays that you will most likely encounter when working with mods.

The other sort of arrays are *rectangular* Arrays, which take more than one index at a time, like below.
They will be covered in another wiki page eventually, though some of their properties are not yet implemented properly.
```zenscript
var rectangularArray = new string[,](3, 3, "X"); //creates a 3x3 Grid which is filled with "X" on every slot.
println(rectangularArray[0,0]); //Accessing elements here requires 2 indices
```

## The main difference between Lists and Arrays

The most important difference between Lists and Arrays is their size.
Or rather, if they can shrink or expand in size.  

Arrays are said to have a **fixed size**. That means that once you have created an Array, you **cannot add additional elements to it**.
You can, however, replace an element inside the array with another element.

Lists on the other hand are said to have a **variable size**. That means you **can add additional** elements to a list if you need to.

So if a List's size can be changed but an Array's cannot, why not always use Lists?
That comes from the ways that fixed sizes also gives you the ensurance that nothing gets messed up by accident.
For example, what if you registered a crafting recipe but then added a new item to the List you used as inputs?
Would the recipe now need to heed that additional item or adhere to the List you gave it at the beginning?  
Additionally, the Array's type syntax might be easier to read for some, especially when it comes to nested structures.
For example, `string[][]` might be easier to read and understand than `List<List<string>>` for some.

## Lists and Arrays can be converted to each other

You can convert between Lists and Arrays if you need to.
For example, you could convert an Array to a List, add an additional element to the List and then convert it back to an Array.
However, note that these operations will always create **new** objects and not modify the existing ones.

Below you can see such an example:

```zenscript

var oldArray = ["A", "B", "C"] as string[];

var list = oldArray as stdlib.List<string>;
list.add("D");

var newArray = list as string[];

println(oldArray.length); //oldArray still has 3 elements so it prints "3"
println(newArray.length); //newArray now also has "D", so it prints "4"
```


## Creating a List or an Array

Lists can be created via their constructor.  
Arrays on the other hand, have multiple different ways to create them: 
The easiest way is to simply specify the elements inside `[]` and with commas separating them from each other.
For most cases that way is the way to go, as you don't have to write any more code than necessary.
The Examples in most of this wiki will use that format when using arrays, like for adding recipes to the crafting table.
More sophisticated ways include using functions to specify which element belongs where in the array.

In the examples, you need to fill `ELEMENT_TYPE` with the proper type, e.g. `string` or `IItemStack`.  
See further below for working examples

```zenscript
// Creates an empty list and fill it using .add() calls
var list = new List<ELEMENT_TYPE>();
list.add(ELEMENT);


// Create an Array and provide its elements directly
var array = [ELEMENT, ELEMENT, ...] as ELEMENT_TYPE[];

// Creates a new array that can hold SIZE elements
// All elements will be the default value of the provided type
var array = new ELEMENT_TYPE[](SIZE);

// Creates a new array that holds SIZE elements with each being assigned to INITIAL_VALUE
var array = new ELEMENT_TYPE[](SIZE, INITIAL_VALUE);


// The next two lines create a new array which holds SIZE elements.
// Each element is determined by invoking the "lambda" function with the given element's index (starting at 0).
var lambda as function(index as usize) as ELEMENT_TYPE = (index as usize) as ELEMENT_TYPE => someFunction();
var array = new ELEMENT_TYPE[](SIZE, filler);


// You can also create a new array based on an existing one.
// Here you must provide a "projection_function" that maps the values from the old array to the values from the new array.
// This function can either only take the old array's elements' values or both the element and the element's index into account.
var oldArray = ... as SOME_TYPE[];

var projection_function as function(element as SOME_TYPE) as ELEMENT_TYPE = (element as SOME_TYPE) as ELEMENT_TYPE => some_function();
var projection_function_indexed as function(element as SOME_TYPE, index) as ELEMENT_TYPE = (element as SOME_TYPE, index) as ELEMENT_TYPE => some_function();

var array = new ELEMENT_TYPE[]<SOME_TYPE>(oldArray, projection_function);
var array = new ELEMENT_TYPE[]<SOME_TYPE>(oldArray, projection_function_indexed);
```

## Retrieving and setting an element

You can access elements in Lists and Arrays using the Getter and Setter syntax.
Here, each element has a number starting from 0.

```zenscript
var array = ["A", "B", "C"] as string[];

// Retrieving Values
println(array[0]); // "A"
println(array[1]); // "B"
println(array[2]); // "C"
//println(array[3]); // Error at runtime: ArrayIndexOutOfBounds Exception

// Arrays only: Retrieving a Range of Values as new Array
var subArray = array[1 .. 3]; //subArray now contains the elements [array[1], array[2]], 3 exclusive
println(subArray[0]); // "B"
println(subArray[1]); // "C"


// Setting Values
array[2] = "X";
println(array[2]); // "X"


// For lists you can do the same thing
var list = new stdlib.List<string>();
list.add("A");
list.add("B");
list.add("C");

println(array[0]); // "A"
println(array[1]); // "B"
println(array[2]); // "C"
//println(array[3]); // Error at runtime: IndexOutOfBounds Exception

// Setting a value
list[2] = "X"; 
println(list[2]); // "X"

// Since lists are variable sized, these methods are only available for lists

// Adding a new Element at the end of the list
list.add("D"); // now the list has 4 elements: "A", "B", "X", "D"

// Add a new Element at the given index, moving all following elements one index further
list.insert(0, "_"); // Now the list has 5 elements: "_", "A", "B", "X", "D"

// Removes the element at the given index.
// This method also returns the element returned
list.remove(3); // Removes the "X" element, the list now has 4 elements: "_", "A", "B", "D"
println(list.remove(0)); //Removes the "_" element and prints it to the console. The list now has 3 Elements: "A", "B", "D"
```

## Doing something for each element in the List or Array

Many times you create Lists or arrays in order to shorten your code.
For this you can use for-loops.
```zenscript
var array = ["A", "B", "C"] as string[];

// Works for both Arrays and Lists:
for element in array {
    // The code in here will be run three times.
    // The 1st time, "element" will refer to "A"
    // The 2nd time, "element" will refer to "B"
    // The 3rd time, "element" will refer to "C"

    println(element);
}

// Arrays only:
// You can also use the index (0, 1, 2) and the element value ("A", "B", "C")
for index, element in array {
    println("At index " + index + " you can find: " + element);
}
```

## Getting information on the List or Array

At some times you may need to get the length of an array, or whether or not it is empty or contains a given element.  
These methods exist on both Lists and Arrays.
```zenscript
var array = [""] as string[];

println(array.length); //prints "1"
println(array.isEmpty); //prints "false"

// Try it out, change the array constructor above to contain other elements and see how the prints change ^^
if("" in array) { // If "" is an element of array
    println("array contains the empty string!");
} else {
    println("array does not contain the empty string!");
}
```


## Other methods existing in Arrays and Lists

There are many more methods existing on Arrays and Lists.  
Not all of them are working yet and not all of them are available for both structures.
If you are interested in these additional methods, check out the stdlib Entries for them.

You can find them here:

- [Arrays.zs](https://github.com/ZenCodeLang/StdLibs/blob/master/src/main/zencode/stdlib/src/Arrays.zs)
- [List.zs](https://github.com/ZenCodeLang/StdLibs/blob/master/src/main/zencode/stdlib/src/List.zs)
