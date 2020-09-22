# MCTag

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfaces implementadas
MCTag implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)
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


### addFluids

```zenscript
myMCTag.addFluids(fluidos como crafttweaker.api.fluid.MCFluid[]);
```

| Parámetro | Tipo                                                           | Descripción                   |
| --------- | -------------------------------------------------------------- | ----------------------------- |
| fluidos   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No se proporcionó descripción |


### añadir elementos

Añade elementos a esta etiqueta, fallará si no es una etiqueta que puede contener elementos

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parámetro | Tipo                                                                | Descripción                      |
| --------- | ------------------------------------------------------------------- | -------------------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementos a añadir a la etiqueta |


### cualquier daño

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### createBlockTag

Tipo de retorno: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Tipo de retorno: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

Tipo de retorno: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

Tipo de retorno: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(pila como crafttweaker.api.item.ItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
null.matches(stack as crafttweaker.api.item.IIItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |



¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parámetro    | Tipo                                                              | Descripción                |
| ------------ | ----------------------------------------------------------------- | -------------------------- |
| pila         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar        |
| ignorar daño | boolean                                                           | ¿Debe comprobarse el daño? |


### solo dañado

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parámetro | Tipo                                                                                                    | Descripción                   | Opcional | Valor por defecto |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| uid       | Cadena                                                                                                  | No se proporcionó descripción | falso    | `nulo`            |
| función   | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No se proporcionó descripción | verdad   | `nulo`            |


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


### eliminar fluidos

```zenscript
myMCTag.removeFluids(fluidos como crafttweaker.api.fluid.MCFluid[]);
```

| Parámetro | Tipo                                                           | Descripción                   |
| --------- | -------------------------------------------------------------- | ----------------------------- |
| fluidos   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No se proporcionó descripción |


### eliminar elementos

elimina elementos de esta etiqueta, fallará si no es una etiqueta que puede contener elementos

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.ItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parámetro | Tipo                                                                | Descripción                         |
| --------- | ------------------------------------------------------------------- | ----------------------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementos a eliminar de la etiqueta |



## Propiedades

| Nombre                 | Tipo                                                                             | Tiene Obtén | Tiene Setter |
| ---------------------- | -------------------------------------------------------------------------------- | ----------- | ------------ |
| bloques                | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | verdad      | falso        |
| commandString          | Cadena                                                                           | verdad      | falso        |
| tipos de entidad       | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | verdad      | falso        |
| primeroBloque          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | verdad      | falso        |
| Primer tipo de entidad | [tipo de entidad MCT](/vanilla/api/entities/MCEntityType)                        | verdad      | falso        |
| primerFluido           | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | verdad      | falso        |
| primer ítem            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | verdad      | falso        |
| fluidos                | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | verdad      | falso        |
| id                     | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | verdad      | falso        |
| isBlockTag             | boolean                                                                          | verdad      | falso        |
| isEntityTypeTag        | boolean                                                                          | verdad      | falso        |
| isFluidTag             | boolean                                                                          | verdad      | falso        |
| isItemTag              | boolean                                                                          | verdad      | falso        |
| objetos                | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | verdad      | falso        |

## Operadores
### O

```zenscript
<tag:ingotIron> | otro como crafttweaker.api.item.IIngredient
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| otro      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No se proporcionó descripción |

## Casters

| Tipo de resultado                                          | Es implícito |
| ---------------------------------------------------------- | ------------ |
| [data.IData](/vanilla/api/data/IData)                      | verdad       |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | verdad       |

