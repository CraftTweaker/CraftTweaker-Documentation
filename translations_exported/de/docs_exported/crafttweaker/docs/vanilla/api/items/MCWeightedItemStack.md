# MCWeightedItemStack

Ein ItemStack mit einer Chance, in der Regel für die Rezeptausgabe. <p> Vorsichtig, wenn der Stapel verwendet wurde, um den WeightedStack zu erstellen war veränderbar, dann wird der Größensatz auch den ursprünglichen Stapel mutieren!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack implementiert die folgenden Schnittstellen. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Erstellt manuell den gewichteten Artikelstack. Normalerweise können Sie den Operator oder `.weight(weight)` Methode von IItemStack verwenden, obwohl
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                        | Beschreibung                             |
| --------- | ------------------------------------------- | ---------------------------------------- |
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | Der Stapel                               |
| weight    | double                                      | Die Chance, zwischen 0 (0%) und 1 (100%) |


## Methoden

### weight

Erstellt einen neuen Gewichteten Stapel mit dem angegebenen Gewicht

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter     | Type   | Beschreibung    |
| ------------- | ------ | --------------- |
| neues Gewicht | double | Der Prozentsatz |


## Operatoren

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Legt den Betrag des Gegenstands fest. <p> Wenn der ursprüngliche Stack veränderbar war, mutiert auch die Größe des Originalstapels.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

