# MCWeightedItemStack

An ItemStack with a chance, usually used for recipe outputs. <p> Careful, if the stack that was used to create the WeightedStack was mutable, then the size setter will mutate the original stack as well!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Implemented Interfaces
MCWeightedItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Manually creates the weightedItemStack. Usually you can use the operator or `.weight(weight)` method of IItemStack, though
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                                              | Description                             |
| --------- | ----------------------------------------------------------------- | --------------------------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The Stack                               |
| weight    | double                                                            | The chance, between 0 (0%) and 1 (100%) |



## Methods
### weight

Creates a new Weighted Stack with the given weight

 Returns: `A new WeightedItemStack`

Return type: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| newWeight | double | The percentage |



## Properties

| 이름            | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

## 연산자
### MUL

Sets the itemStack's amount. <p> If the original Stack was mutable, also mutates the original stack's size.

 Returns: `A new WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parameter | Type | Description        |
| --------- | ---- | ------------------ |
| newAmount | int  | The new stack size |
### MOD

Creates a new Weighted Stack with the given percentage

 Returns: `A new WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parameter | Type | Description    |
| --------- | ---- | -------------- |
| newWeight | int  | The percentage |

