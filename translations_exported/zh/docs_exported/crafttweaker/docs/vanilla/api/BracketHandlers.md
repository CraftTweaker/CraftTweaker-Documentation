# BracketHandlers

This class contains the "simple" Bracket handlers from CraftTweaker. However, some Bracket handlers, like for recipeTypes, tags, tagManagers, won't be shown here as they use a different internal structure.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.BracketHandlers;
```


## 方法

### getBlock

Gets the give [MCBlock](/vanilla/api/blocks/MCBlock). Throws an Exception if not found

Returns: The found [MCBlock](/vanilla/api/blocks/MCBlock) Return Type: [MCBlock](/vanilla/api/blocks/MCBlock)

```zenscript
<block:minecraft:dirt>

BracketHandlers.getBlock(tokens as string) as MCBlock
BracketHandlers.getBlock("minecraft:dirt");
```

| 参数     | 类型     | 描述              |
| ------ | ------ | --------------- |
| tokens | string | 您要在 BEP 通话中写什么。 |


### getBlockMaterial

Gets the given [MCMaterial](/vanilla/api/block/material/MCMaterial). Throws an Exception if not found.

Returns: The found [MCMaterial](/vanilla/api/block/material/MCMaterial) Return Type: [MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

BracketHandlers.getBlockMaterial(tokens as string) as MCMaterial
BracketHandlers.getBlockMaterial("earth");
```

| 参数     | 类型     | 描述              |
| ------ | ------ | --------------- |
| tokens | string | 您要在 BEP 通话中写什么。 |


### getBlockState

Creates a Blockstate based on the given inputs. Returns `null` if it cannot find the block, ignored invalid variants

Returns: The found BlockState Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

BracketHandlers.getBlockState(tokens as string) as MCBlockState
BracketHandlers.getBlockState("minecraft:acacia_planks");
BracketHandlers.getBlockState("minecraft:furnace:facing=north,lit=false");
```

| 参数     | 类型     | 描述                                         |
| ------ | ------ | ------------------------------------------ |
| tokens | string | The block's resource location and variants |


### getDirectionAxis

Gets the direction Axis based on name. Throws an error if it can't find the direction Axis.

Returns: The found direction Axis Return Type: [DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

BracketHandlers.getDirectionAxis(tokens as string) as DirectionAxis
BracketHandlers.getDirectionAxis("x");
```

| 参数     | 类型     | 描述                                     |
| ------ | ------ | -------------------------------------- |
| tokens | string | The direction Axis's resource location |


### getEffect

Gets the effect based on registry name. Throws an error if it can't find the effect.

Returns: The found effect Return Type: [MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

BracketHandlers.getEffect(tokens as string) as MCPotionEffect
BracketHandlers.getEffect("minecraft:haste");
```

| 参数     | 类型     | 描述                             |
| ------ | ------ | ------------------------------ |
| tokens | string | The effect's resource location |


### getEntityClassification

Gets the entityClassification based on registry name. Logs an error and returns `null` if it can't find the entityClassification.

Returns: The found entityClassification Return Type: [MCEntityClassification](/vanilla/api/entity/MCEntityClassification)

```zenscript
<entityclassification:monster>

BracketHandlers.getEntityClassification(tokens as string) as MCEntityClassification
BracketHandlers.getEntityClassification("monster");
```

| 参数     | 类型     | 描述                                           |
| ------ | ------ | -------------------------------------------- |
| tokens | string | The entityClassification's resource location |


### getEntityType

Gets the entityType based on registry name. Logs an error and return `null` if it can't find the entityType.

Returns: The found entityType Return Type: [MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

BracketHandlers.getEntityType(tokens as string) as MCEntityType
BracketHandlers.getEntityType("minecraft:pig");
```

| 参数     | 类型     | 描述                                 |
| ------ | ------ | ---------------------------------- |
| tokens | string | The entityType's resource location |


### getFluidStack

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

BracketHandlers.getFluidStack(tokens as string) as IFluidStack
BracketHandlers.getFluidStack("minecraft:water");
```

| 参数     | 类型     | 描述                            |
| ------ | ------ | ----------------------------- |
| tokens | string | The Fluid's resource location |


### getItem

Gets the item based on registry name. Throws an error if it can't find the item.

Returns: The found item Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

BracketHandlers.getItem(tokens as string) as IItemStack
BracketHandlers.getItem("minecraft:dirt");
```

| 参数     | 类型     | 描述                           |
| ------ | ------ | ---------------------------- |
| tokens | string | The item's resource location |


### getPotion

Return Type: [MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
BracketHandlers.getPotion(tokens as string) as MCPotion
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| tokens | string | No Description Provided |


### getProfession

Gets the villager profession based on registry name. Logs an error and return `null` if it can't find the profession.

Returns: The found profession Return Type: [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession)

```zenscript
<profession:minecraft:armorer>

BracketHandlers.getProfession(tokens as string) as MCVillagerProfession
BracketHandlers.getProfession("minecraft:armorer");
```

| 参数     | 类型     | 描述                                 |
| ------ | ------ | ---------------------------------- |
| tokens | string | The profession's resource location |


### getRecipeManager

Gets the recipeManager based on registry name. Throws an error if it can't find the recipeManager. Throws an expcetion if the given recipeType is not found. <p> This will always return IRecipeManager.<br> There is also a BEP for that but that works differently so it can't be automatically added to the docs here. But the BEP looks the same as the other ones: `<recipetype:minecraft:crafting>`

Returns: The found recipeManager Return Type: [IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
BracketHandlers.getRecipeManager(tokens as string) as IRecipeManager
BracketHandlers.getRecipeManager("minecraft:crafting");
```

| 参数     | 类型     | 描述                                    |
| ------ | ------ | ------------------------------------- |
| tokens | string | The recipeManager's resource location |


### getResourceLocation

Creates a Resource location based on the tokens. Throws an error if the tokens are not a valid location.

Returns: The location Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

BracketHandlers.getResourceLocation(tokens as string) as MCResourceLocation
BracketHandlers.getResourceLocation("minecraft:dirt");
```

| 参数     | 类型     | 描述                    |
| ------ | ------ | --------------------- |
| tokens | string | The resource location |


### getTextFormatting

Return Type: [TextFormatting](/vanilla/api/util/text/TextFormatting)

```zenscript
BracketHandlers.getTextFormatting(tokens as string) as TextFormatting
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| tokens | string | No Description Provided |


