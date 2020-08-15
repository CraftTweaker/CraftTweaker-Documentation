# IIngredientes

This is IIngredient!!!

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.IIngredient
```

## Implemented Interfaces
IIngredient implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### partidas

Does the given stack match the ingredient?

Returns boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



## Propiedades

| Nombre        | Tipo                                                                | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| commandString | Cadena                                                              | verdad     | falso      |
| objetos       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | verdad     | falso      |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | verdad      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | verdad      |

