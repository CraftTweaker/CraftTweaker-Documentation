# MCTag

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addFluids

```zenscript
myMCTag.addFluids(fluidos como crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### addItems

Añade elementos a esta etiqueta, fallará si no es una etiqueta que puede contener elementos

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description                      |
| --------- | ------------------------------------------------------------------- | -------------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementos a añadir a la etiqueta |


### anyDamage

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

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(pila como crafttweaker.api.item.ItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IIItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter    | Type                                                              | Description                |
| ------------ | ----------------------------------------------------------------- | -------------------------- |
| stack        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check         |
| ignorar daño | boolean                                                           | ¿Debe comprobarse el daño? |


### onlyDamaged

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description             | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | No description provided | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`        |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### eliminar fluidos

```zenscript
myMCTag.removeFluids(fluidos como crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### removeItems

elimina elementos de esta etiqueta, fallará si no es una etiqueta que puede contener elementos

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.ItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description                         |
| --------- | ------------------------------------------------------------------- | ----------------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementos a eliminar de la etiqueta |



## Properties

| Name                   | Type                                                                             | Has Getter | Has Setter |
| ---------------------- | -------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks                 | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true       | false      |
| commandString          | String                                                                           | true       | false      |
| entityTypes            | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true       | false      |
| primeroBloque          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true       | false      |
| Primer tipo de entidad | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true       | false      |
| primerFluido           | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true       | false      |
| firstItem              | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true       | false      |
| fluids                 | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true       | false      |
| id                     | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| isBlockTag             | boolean                                                                          | true       | false      |
| isEntityTypeTag        | boolean                                                                          | true       | false      |
| isFluidTag             | boolean                                                                          | true       | false      |
| isItemTag              | boolean                                                                          | true       | false      |
| items                  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true       | false      |

## Operators
### OR

```zenscript
<tag:ingotIron> | otro como crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

