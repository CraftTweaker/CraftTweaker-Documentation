# Bedingte Anweisungen

Manche Codezeilen sollten nur ausgeführt werden, wenn bestimmte Kriterien erfüllt werden (oder auch nicht). Für sowas gibt es bedingte Anweisungen.

## If (Wenn)

Eine bedingte Anweisung beginnt immer mit einer If-Abfrage. Sie prüft, ob das gegebene Statement wahr (true) ist und führt ggf. den folgenden Code in der Klammer aus. **Be careful, you need TWO EQUALS when comparing values! (That's because one equal is for declaring values!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Else (Ansonsten)

Ein Else-Statement kann an eine If-Abfrage angehängt werden und wird ausgeführt, falls die Abfrage nicht true (false) ergibt.

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

## Dinge, die man überprüfen kann

Berechnungen: `+`,`-`,`*`,`/`,`mod`,`verkettung(~)`

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

## Der ? Operator

Die ganze Zeit überall If/Else schreiben zu müssen kann schnell nervig werden. Besonders wenn du nur kleinere entweder/oder-Bedingungen benötigst. Für solche Fälle wurde der `?`-Operator implementiert. Er funktioniert genau wie ein If/Else-Statement, für welches man weniger Code benötigt. Syntax: `boolean ? if : else`

```zenscript
val switchy = false;

//gibt den Status aus
print("Switchy is " ~ switchy);

//wenn switchy true ergibt, vInt = 1, ansonsten vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Gibt "Hallo" aus, wenn switchy true ist, ansonsten "Tschüss"
print(switchy ? print("Tschüss") : print("Hallo"); "Hallo" : "Tschüss");

//Gibt "Tschüss" aus, wenn switchy true ergibt, ansonsten "Hallo"
switchy ?

```

## Operatoren

Du kannst folgende Operatoren verwenden. Alle gegebenen Beispiele ergeben true.

| Name                | Zeichen      | Erklärung                                                                                                                                                                    | Beispiel          |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Nicht               | `!`          | Invertiert ein Boolean (true/false)                                                                                                                                          | !false            |
| Nicht gleich        | `!=`         | Prüft, ob der Wert davor und danach nicht gleich ist                                                                                                                         | 1 != 2            |
| Gleich              | `==`         | Prüft, ob der Wert davor und danach gleich ist                                                                                                                               | 1 == 1            |
| Größer als          | `>`       | Prüft, ob der Wert davor größer ist als der Wert danach                                                                                                                      | 2 > 1             |
| Größer oder gleich  | `>=`      | Prüft, ob der Wert davor größer oder gleich groß wie der Wert danach ist                                                                                                     | 1 >= 1            |
| Lesser than         | `<`       | Prüft, ob der Wert davor kleiner ist als der Wert danach                                                                                                                     | 1 < 2             |
| Kleiner oder gleich | `<=`      | Prüft, ob der Wert davor kleiner oder gleich klein wie der Wert danach ist                                                                                                   | 1 <= 1            |
| Logical AND         | `&&` | Checks if both before and after values are true, false if one or both are false                                                                                              | true && true      |
| Logical OR          | `\|\|`     | Checks if either the value before or after are true, false if neither are true                                                                                               | false \|\| true |
| Bitwise XOR         | `^`          | Checks if exactly one of the before or after values is true, false if both or none are true                                                                                  | true ^ false      |
| Bitwise AND         | `&`      | Performs a bitwise AND operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more | true && true      |
| Bitwise OR          | `\|`        | Performs a bitwise OR operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more  | false \|\| true |

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

## Der in/has-Operator

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