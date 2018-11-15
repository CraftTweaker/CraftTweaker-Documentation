# Conditional Statements

You might want to include code that will only be executed if certain criteria are met (or if they are not).
That's what you need conditional Statements for.

## If

An If-Statement is the first part of a conditional statement. It declares the condition that must be true for the following code to be executed.
Be careful, you need TWO EQUALS when comparing values (that's because one equal is for declaring values!)

```Java
val test = 0;

if(test == 0){ //true
	print("Test is zero!");
}
```

## Else

An Else-Statement can be added to the end of a conditional Statement to declare what will be executed when the if-condition equals to false.

```Java
var test = 0;

if(test == 0){//true
	//will be executed when test is equal to 0
	print("Test is zero!");
} else {
	//will be executed when test is not equal to 0
	print("Test is NOT zero!");
}

test = 1
if(test == 0){//false
	//will be executed when test is equal to 0
	print("Now, test is zero!");
} else {
	//will be executed when test is not equal to 0
	print("Now, test is NOT zero!");
}

```

## Things to check for
Supported Calculations are `+`,`-`,`*`,`/`,`mod`,`concatenation(~)`

Supported Operands are `OR(|)`, `AND(&)`, `XOR(^)`

```Java
//You can check for:


//Number values
val a = 0 as int;
if(a==0){print("NumVal");}

//Calculated number values
val b = 1;
val c = 5;
//All evaluate to true
if(b+c==6){print("Num1!");}
if(b*c==5){print("Num2!");}
if(b/c==0.2){print("Num3!");}

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", the Tilde just concatenates one thing to another

//|(OR) means, as long as one of the criteria is met, it evaluates to true
if(d=="Hello" | e == "Hello"){print("OR1!");}		//true
if(d=="Hello" | e == "World"){print("OR2!");}		//true

//^(XOR) means, ONLY ONE criteria may be met, otherwise it evaluates to false
if(d=="Hello" ^ e == "Hello"){print("XOR1!");}		//true
if(d=="Hello" ^ e == "World"){print("XOR2!");}		//false

//&(AND) means, both criteria need to be met, otherwise it evaluates to false
if(d=="Hello" & e == "Hello"){print("AND1!");}		//false
if(d=="Hello" & e == "World"){print("AND2!");}		//true
```

## The ? Operator
Surely, always typing out an if/else structure can be annoying. Especially if you just want to do an either or condition.
That's why the `?` operator was implemented.
It follows the same logic as an if/else statement, it only is by far less code required.
Syntax: `boolean ? if : else`

```Java
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

You can use these operators.
All the examples given evaluate to true.


| Name              | token        | Explanation                                                                               | Example            |
|-------------------|--------------|-------------------------------------------------------------------------------------------|--------------------|
| Not               | `!`          | Inverts a boolean                                                                         | !false             |
| Not Equal         | `!=`         | Checks if the value before and after are not equal                                        | 1 != 2             |
| Equal             | `==`         | Checks if the value before and after are equal                                            | 1 == 1             |
| Greater than      | `>`          | Checks if the value before is greater than after                                          | 1 > 2              |
| Greater or Equal  | `>=`         | Checks if the value before is greater than or equal with after                            | 1 >= 1             |
| Lesser then       | `<`          | Checks if the value before is fewer than after                                            | 1 < 2              |
| Lesser or Equal   | `<=`         | Checks if the value before is fewer than or equal with after                              | 1 <= 1             |
| AND               | `&`          | Checks whether both, value before and after are true, false if one or both are false      | true & true        |
| OR                | `|`          | Checks if the value before or after is true. True, is both are true                       | true | true        |
| XOR               | `^`          | Checks if either the value before or after is true, false if both or none is true         | true ^ false       |


## The in/has Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for.
`in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```Java
//While contains checks can use in
if(loadedMods in "mcp"){
	print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if(loadedMods has "mcp"){
	print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredeint AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```Java
if(<ore:ingotIron> in <minecraft:iron_ingot>){
	print("Iron ingots are in the right oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
	print("Iron ingots are in the right oreDic");
}
```

This is only then true, when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`:
Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):
```java
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if(redstone has allDusts) {

}
```