# MCTag

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parámetro | Tipo                                                            | Descripción             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| bloques   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parámetro | Tipo                                                                         | Descripción             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entidades | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


### createBlockTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### partidas

Does the given stack match the ingredient?

Returns boolean

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parámetro | Tipo                                                            | Descripción             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| bloques   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parámetro | Tipo                                                                         | Descripción             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entidades | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Propiedades

| Nombre        | Tipo                                                                         | Has Getter | Has Setter |
| ------------- | ---------------------------------------------------------------------------- | ---------- | ---------- |
| bloques       | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | verdad     | falso      |
| commandString | Cadena                                                                       | verdad     | falso      |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | verdad     | falso      |
| objetos       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | verdad     | falso      |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | verdad      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | verdad      |

