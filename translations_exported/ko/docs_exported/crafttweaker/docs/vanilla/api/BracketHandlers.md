# BracketHandlers

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.BracketHandlers
```

## Methods
### getBlockMaterial

Gets the given [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial). Throws an Exception if not found.

 Returns: `The found [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

Return type: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Parameter | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| tokens    | String | What you would write in the BEP call. |


### getBlockState

Creates a Blockstate based on the given inputs. Returns `null` if it cannot find the block, ignored invalid variants

 Returns: `The found BlockState`

Return type: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parameter | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| tokens    | String | The block's resource location and variants |


### getDirectionAxis

Gets the direction Axis based on name. Throws an error if it can't find the direction Axis.

 Returns: `The found direction Axis`

Return type: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parameter | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| tokens    | String | The direction Axis's resource location |


### getEffect

Gets the effect based on registry name. Throws an error if it can't find the effect.

 Returns: `The found effect`

Return type: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| tokens    | String | The effect's resource location |


### getEntityClassification

Gets the entityClassification based on registry name. Logs an error and returns `null` if it can't find the entityClassification.

 Returns: `The found entityClassification`

Return type: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| tokens    | String | The entityClassification's resource location |


### getEntityType

Gets the entityType based on registry name. Logs an error and return `null` if it can't find the entityType.

 Returns: `The found entityType`

Return type: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| tokens    | String | The entityType's resource location |


### getFluidStack

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

 Returns: `A stack of the liquid with amount == 1mb`

Return type: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| tokens    | String | The Fluid's resource location |


### getItem

Gets the item based on registry name. Throws an error if it can't find the item.

 Returns: `The found item`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokens as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| tokens    | String | The item's resource location |


### getPotion

Return type: [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |


### getRecipeManager

Gets the recipeManager based on registry name. Throws an error if it can't find the recipeManager. Throws an expcetion if the given recipeType is not found. <p> This will always return IRecipeManager.<br> There is also a BEP for that but that works differently so it can't be automatically added to the docs here. But the BEP looks the same as the other ones: `<recipetype:minecraft:crafting>`

 Returns: `The found recipeManager`

Return type: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| tokens    | String | The recipeManager's resource location |


### getResourceLocation

Creates a Resource location based on the tokens. Throws an error if the tokens are not a valid location.

 Returns: `The location`

Return type: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokens as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| tokens    | String | The resource location |


### getTag

Gets the tag based on registry name. Will create an empty Tag if none is found.<br> However, in such a case, you need to register the tag as its appropriate type

 Returns: `The found tag, or a newly created one`

Return type: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| tokens    | String | The tag's resource location |


### getTextFormatting

Return type: [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokens as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |



