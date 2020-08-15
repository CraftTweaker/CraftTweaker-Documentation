# MCTag

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfaces implementadas
MCTag implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### addBlocks

```zenscript
myMCTag.addBlocks(bloques como crafttweaker.api.block.MCBlock[]);
```

| Parámetro | Tipo                                                            | Descripción                   |
| --------- | --------------------------------------------------------------- | ----------------------------- |
| bloques   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No se proporcionó descripción |


### añadir tipos de entidad

```zenscript
myMCTag.addEntityTypes(entidades como crafttweaker.api.entity.MCEntityType[]);
```

| Parámetro | Tipo                                                                         | Descripción                   |
| --------- | ---------------------------------------------------------------------------- | ----------------------------- |
| entidades | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No se proporcionó descripción |


### añadir elementos

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.ItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No se proporcionó descripción |


### createBlockTag

Devuelve [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Devuelve [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Devuelve [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(pila como crafttweaker.api.item.ItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Devuelve booleano

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |


### eliminar bloques

```zenscript
myMCTag.removeBlocks(bloques como crafttweaker.api.block.MCBlock[]);
```

| Parámetro | Tipo                                                            | Descripción                   |
| --------- | --------------------------------------------------------------- | ----------------------------- |
| bloques   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No se proporcionó descripción |


### eliminar tipos de entidad

```zenscript
myMCTag.removeEntityTypes(entidades como crafttweaker.api.entity.MCEntityType[]);
```

| Parámetro | Tipo                                                                         | Descripción                   |
| --------- | ---------------------------------------------------------------------------- | ----------------------------- |
| entidades | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No se proporcionó descripción |


### eliminar elementos

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.ItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No se proporcionó descripción |



## Propiedades

| Nombre           | Tipo                                                                         | Tiene Obtén | Tiene Setter |
| ---------------- | ---------------------------------------------------------------------------- | ----------- | ------------ |
| bloques          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | verdad      | falso        |
| commandString    | Cadena                                                                       | verdad      | falso        |
| tipos de entidad | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | verdad      | falso        |
| objetos          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | verdad      | falso        |

## Casters

| Tipo de resultado                                          | Es implícito |
| ---------------------------------------------------------- | ------------ |
| [data.IData](/vanilla/api/data/IData)                      | verdad       |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | verdad       |

