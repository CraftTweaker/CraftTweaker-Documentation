# MCWeightedItemStack

[PLACEHOLDER] ItemStack with a przypadek, zwykle used for recipe outputs. <p> Ostrożnie, jeśli stos użyty do utworzenia Wagi Stack był zmienny, to ustawnik rozmiaru zmusza również oryginalny stos!

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Manually creates the weightedItemStack. Usually you can use the operator or `.weight(weight)` method of IItemStack, though
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter        | Type                                        | Description                     |
| ---------------- | ------------------------------------------- | ------------------------------- |
| stos przedmiotów | [IItemStack](/vanilla/api/items/IItemStack) | Stos                            |
| weight           | double                                      | Szansa między 0 (0%) a 1 (100%) |


## Methods

### weight

Creates a new Weighted Stack with the given weight

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter        | Type   | Description |
| ---------------- | ------ | ----------- |
| młoda masa ciała | double | Procent     |


## Operators

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Sets the itemStack's amount. <p> If the original Stack was mutable, also mutates the original stack's size.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

