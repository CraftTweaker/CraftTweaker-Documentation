# MCWeightedItemStack

An ItemStack with a chance, usually used for recipe outputs.
 <p>
 Careful, if the stack that was used to create the WeightedStack was mutable, then the size setter will mutate the original stack as well!

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Manually creates the weightedItemStack.
 Usually you can use the operator or `.weight(weight)` method of IItemStack, though
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | The Stack |
| weight | double | The chance, between 0 (0%) and 1 (100%) |



## Methods

### weight

Creates a new Weighted Stack with the given weight

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| newWeight | double | The percentage |



## Operators

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```



### MUL

Sets the itemStack's amount.
 <p>
 If the original Stack was mutable, also mutates the original stack's size.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```




## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | true | false |
| weight | double | true | false |

