# MCWeightedItemStack

Una pila de ítems con una oportunidad, usualmente usada para las salidas de recetas. <p> Cuidado, si la pila que fue usada para crear el WeightedStack era mutable, ¡entonces el setter de tamaño también mutará la pila original!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Implemented Interfaces
MCWeightedItemStack implementa las siguientes interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Crea manualmente el peso de ItemStack. Generalmente se puede utilizar el operador o el método `.weight(weight)` de ItemStack, aunque
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter       | Type                                                              | Description                             |
| --------------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila de objetos | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La Pila                                 |
| weight          | double                                                            | La oportunidad, entre 0 (0%) y 1 (100%) |



## Methods
### weight

Crea una nueva pila ponderada con el peso dado

 Devuelve: `Un nuevo WeightedItemStack`

Tipo de retorno: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter  | Type   | Description   |
| ---------- | ------ | ------------- |
| nuevo peso | double | El porcentaje |



## Properties

| Name          | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

## Operators
### MUL

Establece la cantidad de la pila de objetos. <p> Si la pila original era mutable, también muta el tamaño de la pila original.

 Devuelve: `Un nuevo WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount como int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parameter    | Type | Description             |
| ------------ | ---- | ----------------------- |
| nuevoAamount | int  | El nuevo tamaño de pila |
### MOD

Crea una nueva pila ponderada con el porcentaje dado

 Devuelve: `Un nuevo WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parameter  | Type | Description   |
| ---------- | ---- | ------------- |
| nuevo peso | int  | El porcentaje |

