# MCWeightedItemStack

[PLACEHOLDER] ItemStack with a przypadek, zwykle used for recipe outputs. <p> Ostrożnie, jeśli stos użyty do utworzenia Wagi Stack był zmienny, to ustawnik rozmiaru zmusza również oryginalny stos!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeweightedItemStack implementuje następujące interfejsy. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Ręcznie tworzy ważony ItemStack. Zazwyczaj możesz użyć operatora lub `.weight (waga)` metody IItemStack, choć
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

Tworzy nowy ważony stos o podanej wadze

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

Ustawia ilość itemStack. <p> Jeśli oryginalny Stack był zmienny, również mutuje rozmiar oryginalnego stacka.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

