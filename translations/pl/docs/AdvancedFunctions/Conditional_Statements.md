# Conditional Statements

You might want to include code that will only be executed if certain criteria are met (or if they are not). That's what you need conditional Statements for.

## If

An If-Statement is the first part of a conditional statement. It declares the condition that must be true for the following code to be executed. **Be careful, you need TWO EQUALS when comparing values! (That's because one equal is for declaring values!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Else

An Else-Statement can be added to the end of a conditional Statement to declare what will be executed when the if-condition equals to false.

```zenscript
var test = 0;

if (test == 0) { //true
    //will be executed when test is equal to 0
    print("Test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero!");
}

test = 1;
if (test == 0) { //false
    //will be executed when test is equal to 0
    print("Now, test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Now, test is NOT zero!");
}

```

## Things to check for

Supported Calculations are `+`,`-`,`*`,`/`,`mod`,`concatenation(~)`

Supported Operands are `Logical OR(||)`, `Logical AND(&&)`, `Bitwise OR(|)`, `Bitwise AND(&)`, and `Bitwise XOR(^)`

```zenscript
//You can check for:


//Number values
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Calculated number values
val b = 1;
val c = 5;
//All evaluate to true
if (b+c == 6) { print("Num1!"); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0.2) { print("Num3!"); }

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", the Tilde just concatenates one thing to another

//||(OR) means, as long as one of the criteria is met, it evaluates to true
if (d == "Hello" || e == "Hello") { print("OR1!"); }        //true
if (d == "Hello" || e == "World") { print("OR2!"); }        //true

//^(XOR) means, ONLY ONE criteria may be met, otherwise it evaluates to false
if (d == "Hello" ^ e == "Hello") { print("XOR1!"); }        //true
if (d == "Hello" ^ e == "World") { print("XOR2!"); }        //false

//&&(AND) means, both criteria need to be met, otherwise it evaluates to false
if (d == "Hello" && e == "Hello") { print("AND1!"); }       //false
if (d == "Hello" && e == "World") { print("AND2!"); }       //true
```

## The ? Operator

Surely, always typing out an if/else structure can be annoying. Especially if you just want to do an either or condition. That's why the `?` operator was implemented. It follows the same logic as an if/else statement, it only is by far less code required. Syntax: `boolean ? if : else`

```zenscript
val switchy = false;

//prints switchy state
print("Switchy is " ~ switchy);

//if switchy is true, vInt = 1, otherwise vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Prints "Hello" if switchy is stue, otherwise prints "Bye"
print(switchy ? "Hello" : "Bye");

//Prints "Bye" if switchy is true, otherwise prints "Hello"
switchy ? print("Bye") : print("Hello");

```

## Operators

You can use these operators. All the examples given evaluate to true.

| Name             | token        | Explanation                                                                                                                                                                  | Example           |
| ---------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Not              | `!`          | Inverts a boolean                                                                                                                                                            | !false            |
| Not Equal        | `!=`         | Checks if the value before and after are not equal                                                                                                                           | 1 != 2            |
| Equal            | `==`         | Checks if the value before and after are equal                                                                                                                               | 1 == 1            |
| Greater than     | `>`       | Checks if the value before is greater than after                                                                                                                             | 1 > 2             |
| Greater or Equal | `>=`      | Checks if the value before is greater than or equal with after                                                                                                               | 1 >= 1            |
| Lesser than      | `<`       | Checks if the value before is fewer than after                                                                                                                               | 1 < 2             |
| Lesser or Equal  | `<=`      | Checks if the value before is fewer than or equal with after                                                                                                                 | 1 <= 1            |
| Logical AND      | `&&` | Checks if both before and after values are true, false if one or both are false                                                                                              | true && true      |
| Logical OR       | `\|\|`     | Checks if either the value before or after are true, false if neither are true                                                                                               | false \|\| true |
| Bitwise XOR      | `^`          | Checks if exactly one of the before or after values is true, false if both or none are true                                                                                  | true ^ false      |
| Bitwise AND      | `&`      | Performs a bitwise AND operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more | true && true      |
| Bitwise OR       | `\|`        | Performs a bitwise OR operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more  | false \|\| true |

### Difference between `|` and `||` (and `&` and `&&`)

The main difference between the single and the double, with semantics aside, is that the double performs a check after each condition and exits early - this is called short-circuiting. However, the single goes through the entire chain of conditions, even if the first one would have cancelled the entire condition. This not only saves resources, but also allows for easier scripting such as **null checks** and chained conditions.

```zenscript
var a = 5;
var item = ... as IItemStack;

// Even though a is 5, it still goes through all of the conditions listed
if (a == 5 | a == 3 | a == 10 | a == -1) {
    ...
}

// Even though a is 5 and the condition is impossible (a variable can't be both 3 and 5), it still goes through all of the conditions listed
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// Checks if item is not null before accessing variables from item
if (!isNull(item) && item.amount == 1) {
    ...
}

// Checks if item is not null while accessing variables from a potentially null item, throwing an error if the item is null
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## The in/has Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```zenscript
//While contains checks can use in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if (loadedMods has "mcp") {
    print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredient AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
// Checks if the iron ingot is in the oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Iron ingots are in the right oreDict");
}

// Preferred, same function as previous
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("Iron ingots are in the right oreDict");
}
```

This is only true when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if (redstone has allDusts) {

}
```