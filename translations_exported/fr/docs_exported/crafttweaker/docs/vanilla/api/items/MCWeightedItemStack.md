# MCWeightedItemStack

Un ItemStack avec une chance, généralement utilisé pour les sorties de recettes. <p> Attention, si la pile utilisée pour créer la WeightedStack était mutable, alors le réglage de taille mutera également la pile originale !

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack implémente les interfaces suivantes. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Crée manuellement la weightedItemStack. Habituellement, vous pouvez utiliser l'opérateur ou la méthode `.weight(weight)` de IItemStack, bien que
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter           | Type                                        | Description                         |
| ------------------- | ------------------------------------------- | ----------------------------------- |
| format@@0 itemStack | [IItemStack](/vanilla/api/items/IItemStack) | La pile                             |
| weight              | double                                      | La chance, entre 0 (0%) et 1 (100%) |


## Methods

### weight

Crée une nouvelle pile pondérée avec le poids donné

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter     | Type   | Description    |
| ------------- | ------ | -------------- |
| Nouveau poids | double | Le pourcentage |


## Operators

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Définit le montant de la pile. <p> Si la pile originale était mutable, elle mute également la taille de la pile originale.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

