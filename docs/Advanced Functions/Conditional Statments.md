#Conditional Statements

You might want to include code that will only be executed if certain criteria are met (or if they are not).
That's what you need conditional Statements for.

##If

An If-Statement is the first part of a conditional statement. It declares the condition that must be true for the following code to be executed.
Be careful, you need TWO EQUALS when comparing values (that's because one equal is for declaring values!)

```
val test = 0;

if(test == 0){ //true
	print("Test is zero!");
}
```

##Else

An Else-Statement can be added to the end of a conditional Statment to declare what will be executed when the if-condition equals to false.

```
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
Supported Calculations are +,-,*,/,mod,concatenation(~)
Supported Operands are OR(|), AND(&&), XOR(^)
```
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

//&&(AND) means, both criteria need to be met, otherwise it evaluates to false
if(d=="Hello" && e == "Hello"){print("AND1!");}		//false
if(d=="Hello" && e == "World"){print("AND2!");}		//true
```