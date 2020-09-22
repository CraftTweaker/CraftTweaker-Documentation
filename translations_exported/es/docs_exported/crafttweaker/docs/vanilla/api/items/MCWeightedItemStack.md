# MCWeightedItemStack

Una pila de ítems con una oportunidad, usualmente usada para las salidas de recetas. <p> Cuidado, si la pila que fue usada para crear el WeightedStack era mutable, ¡entonces el setter de tamaño también mutará la pila original!

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Interfaces implementadas
MCWeightedItemStack implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Constructores
Crea manualmente el peso de ItemStack. Generalmente se puede utilizar el operador o el método `.weight(weight)` de ItemStack, aunque
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parámetro       | Tipo                                                              | Descripción                             |
| --------------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila de objetos | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La Pila                                 |
| peso            | doble                                                             | La oportunidad, entre 0 (0%) y 1 (100%) |



## Métodos
### peso

Crea una nueva pila ponderada con el peso dado

 Devuelve: `Un nuevo WeightedItemStack`

Tipo de retorno: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parámetro  | Tipo  | Descripción   |
| ---------- | ----- | ------------- |
| nuevo peso | doble | El porcentaje |



## Propiedades

| Nombre        | Tipo                                                              | Tiene Obtén | Tiene Setter |
| ------------- | ----------------------------------------------------------------- | ----------- | ------------ |
| commandString | Cadena                                                            | verdad      | falso        |
| pila          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | verdad      | falso        |
| peso          | doble                                                             | verdad      | falso        |

## Operadores
### MUL

Establece la cantidad de la pila de objetos. <p> Si la pila original era mutable, también muta el tamaño de la pila original.

 Devuelve: `Un nuevo WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount como int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parámetro    | Tipo | Descripción             |
| ------------ | ---- | ----------------------- |
| nuevoAamount | int  | El nuevo tamaño de pila |
### MOD

Crea una nueva pila ponderada con el porcentaje dado

 Devuelve: `Un nuevo WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parámetro  | Tipo | Descripción   |
| ---------- | ---- | ------------- |
| nuevo peso | int  | El porcentaje |

