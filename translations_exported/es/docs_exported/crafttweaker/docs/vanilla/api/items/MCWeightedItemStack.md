# MCWeightedItemStack

Una pila de ítems con una oportunidad, usualmente usada para las salidas de recetas. <p> Cuidado, si la pila que fue usada para crear el WeightedStack era mutable, ¡entonces el setter de tamaño también mutará la pila original!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack implementa las siguientes interfaces. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Crea manualmente el peso de ItemStack. Generalmente se puede utilizar el operador o el método `.weight(weight)` de ItemStack, aunque
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter       | Type                                        | Description                             |
| --------------- | ------------------------------------------- | --------------------------------------- |
| pila de objetos | [IItemStack](/vanilla/api/items/IItemStack) | La Pila                                 |
| weight          | double                                      | La oportunidad, entre 0 (0%) y 1 (100%) |


## Methods

### weight

Crea una nueva pila ponderada con el peso dado

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter  | Type   | Description   |
| ---------- | ------ | ------------- |
| nuevo peso | double | El porcentaje |


## Operators

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Establece la cantidad de la pila de objetos. <p> Si la pila original era mutable, también muta el tamaño de la pila original.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

