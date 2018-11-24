# WeightedLiquidStack
A Weighted Liquid Stack is like a normal [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.WeightedLiquidStack;`

## Calling a weightedLiquidStack
You can derive a weightedLiquidStack from an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) by either using the modulo operator or the weight function on it.

```
val liquidStack = <liquid:lava>;

//both create a weightedLiquidstack object with a chance of 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack.weight(0.2);
```



## ZenGetters

| ZenGetter | What does it do                                      | Return Type                                    |
|-----------|------------------------------------------------------|------------------------------------------------|
| stack     | Returns the associated LiquidStack                   | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| chance    | Returns the stack's chance as decimal (e.g. 0.2)     | float                                          |
| percent   | Returns the stack's chance as percentage (e.g. 20.0) | float                                          |