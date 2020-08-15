# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### partidas

Does the given stack match the ingredient?

Returns boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parámetro | Tipo   | Descripción            |
| --------- | ------ | ---------------------- |
| nombre    | Cadena | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| daño      | int  | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parámetro | Tipo                                                   | Descripción     |
| --------- | ------------------------------------------------------ | --------------- |
| etiqueta  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Propiedades

| Nombre             | Tipo                                                                | Has Getter | Has Setter |
| ------------------ | ------------------------------------------------------------------- | ---------- | ---------- |
| monto              | int                                                                 | verdad     | falso      |
| tiempo quemado     | int                                                                 | verdad     | verdad     |
| commandString      | Cadena                                                              | verdad     | falso      |
| dañable            | boolean                                                             | verdad     | falso      |
| damaged            | boolean                                                             | verdad     | falso      |
| nombre de pantalla | Cadena                                                              | verdad     | falso      |
| vacío              | boolean                                                             | verdad     | falso      |
| food               | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | verdad     | verdad     |
| getOrCreate        | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | verdad     | falso      |
| getRepairCost      | int                                                                 | verdad     | falso      |
| hasDisplayName     | boolean                                                             | verdad     | falso      |
| hasEffect          | boolean                                                             | verdad     | falso      |
| hasTag             | boolean                                                             | verdad     | falso      |
| isCrossbow         | boolean                                                             | verdad     | falso      |
| encantable         | boolean                                                             | verdad     | falso      |
| encantado          | boolean                                                             | verdad     | falso      |
| objetos            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | verdad     | falso      |
| maxDamage          | int                                                                 | verdad     | falso      |
| maxStackSize       | int                                                                 | verdad     | falso      |
| registryName       | Cadena                                                              | verdad     | falso      |
| stackable          | boolean                                                             | verdad     | falso      |
| etiqueta           | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | verdad     | falso      |
| translationKey     | Cadena                                                              | verdad     | falso      |
| useDuration        | int                                                                 | verdad     | falso      |

## Operadores
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parámetro | Tipo | Descripción |
| --------- | ---- | ----------- |
| monto     | int  | new amount  |

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | verdad      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | verdad      |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | falso       |

