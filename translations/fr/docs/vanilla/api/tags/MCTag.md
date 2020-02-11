# MCTag

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
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


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


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

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Returns boolean

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


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


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Properties

| Name          | Type                                                                         | Has Getter | Has Setter |
| ------------- | ---------------------------------------------------------------------------- | ---------- | ---------- |
| blocks        | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true       | false      |
| commandString | String                                                                       | true       | false      |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true       | false      |
| items         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true       | false      |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

