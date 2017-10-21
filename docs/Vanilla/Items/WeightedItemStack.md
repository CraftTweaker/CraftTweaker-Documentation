# WeightedItemStack
A Weighted Item Stack is like a normal [IItemStack](IItemStack) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.WeightedItemStack;`

## Calling a weightedItemStack
You can derive a weightedItemStack from an [IItemStack](IItemStack) by either using the modulo operator or the weight function on it.

```
val itemStack = <minecraft:dirt>;

//both create a weightedItemstack object with a chance of 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack.weight(0.2);
```



## ZenGetters

| ZenGetter | What does it do                                      | Return Type              |
|-----------|------------------------------------------------------|--------------------------|
| stack     | Returns the associated itemStack                     | [IItemStack](IItemStack) |
| chance    | Returns the stack's chance as decimal (e.g. 0.2)     | float                    |
| percent   | Returns the stack's chance as percentage (e.g. 20.0) | float                    |