# Conditional Code

Onto more complex scripting! Conditional code is an important aspect of intermediate to advanced scripts.

Conditional code entails running a chunk of code if a `boolean` condition evaluates to `true`. This allows you to execute code that can adapt to conditions in the world, the player, a block, or the entity that's dropping items.

# If Statement

An if statement executes the piece of code if the `boolean` inside of its bracket evaluates to `true`.

```zenscript
val test = 0;

//test == 0 returns a boolean

if (test == 0) { //true
    print("Test is zero!");
}
```

# Else Statement

An else statement can be added to the end of an if statement to execute the block in case the if statement returns false, which means it did not execute.

```zenscript

var test = 0;

if (test == 0) { //true
    //wird ausgeführt, falls test gleich 0 ist
    print("Test ist Null!");
} else {
    //wird ausgeführt, falls test ungleich 0 ist
    print("Test ist NICHT Null!");
}

test = 1;
if (test == 0) { //false
    //wird ausgeführt, falls test gleich 0 ist
    print("Jetzt ist test gleich Null!");
} else {
    //wird ausgeführt, falls test ungleich 0 ist
    print("Jetzt ist test NICHT gleich Null!");
}
```

# Supported Operators

Supported operators you can do calculations with are: `+`, `-`, `+`, `/`, `%`. Keep in mind you can also use the logic operators: `!`, `!=`, `==`, `>`, `>=`, `<`, `<=`, `&&`, `||`, `^`

Apart from these, as long as whatever is inside of the if bracket returns true, you can have anything in there!

Beispiel:
```zenscript

//In the context of an event:

if (!event.world.remote){
    event.player.sendMessage(MCTextComponent.createStringTextComponent("Successfully completed action!"));
}
```
