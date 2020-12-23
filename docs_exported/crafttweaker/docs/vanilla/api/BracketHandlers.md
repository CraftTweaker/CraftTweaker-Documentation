# BracketHandlers

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.BracketHandlers;
```


## Methods

### getBlock

Gets the give [MCBlock](/vanilla/api/blocks/MCBlock). Throws an Exception if not found

Returns: The found [MCBlock](/vanilla/api/blocks/MCBlock)
Return Type: [MCBlock](/vanilla/api/blocks/MCBlock)

```zenscript
<block:minecraft:dirt>

BracketHandlers.getBlock(tokens as String) as MCBlock
BracketHandlers("minecraft:dirt")
```
### getBlockMaterial

Gets the given [MCMaterial](/vanilla/api/block/material/MCMaterial). Throws an Exception if not found.

Returns: The found [MCMaterial](/vanilla/api/block/material/MCMaterial)
Return Type: [MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

BracketHandlers.getBlockMaterial(tokens as String) as MCMaterial
BracketHandlers("earth")
```
### getBlockState

Creates a Blockstate based on the given inputs.
 Returns `null` if it cannot find the block, ignored invalid variants

Returns: The found BlockState
Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

BracketHandlers.getBlockState(tokens as String) as MCBlockState
BracketHandlers("minecraft:acacia_planks")
BracketHandlers("minecraft:furnace:facing=north,lit=false")
```
### getDirectionAxis

Gets the direction Axis based on name. Throws an error if it can't find the direction Axis.

Returns: The found direction Axis
Return Type: [DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

BracketHandlers.getDirectionAxis(tokens as String) as DirectionAxis
BracketHandlers("x")
```
### getEffect

Gets the effect based on registry name. Throws an error if it can't find the effect.

Returns: The found effect
Return Type: [MCPotionEffect](/vanilla/api/potion/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

BracketHandlers.getEffect(tokens as String) as MCPotionEffect
BracketHandlers("minecraft:haste")
```
### getEntityClassification

Gets the entityClassification based on registry name. Logs an error and returns `null` if it can't find the entityClassification.

Returns: The found entityClassification
Return Type: [MCEntityClassification](/vanilla/api/entity/MCEntityClassification)

```zenscript
<entityclassification:monster>

BracketHandlers.getEntityClassification(tokens as String) as MCEntityClassification
BracketHandlers("monster")
```
### getEntityType

Gets the entityType based on registry name. Logs an error and return `null` if it can't find the entityType.

Returns: The found entityType
Return Type: [MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

BracketHandlers.getEntityType(tokens as String) as MCEntityType
BracketHandlers("minecraft:pig")
```
### getFluidStack

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

BracketHandlers.getFluidStack(tokens as String) as IFluidStack
BracketHandlers("minecraft:water")
```
### getItem

Gets the item based on registry name. Throws an error if it can't find the item.

Returns: The found item
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

BracketHandlers.getItem(tokens as String) as IItemStack
BracketHandlers("minecraft:dirt")
```
### getPotion

Return Type: [MCPotion](/vanilla/api/potion/MCPotion)

```zenscript
BracketHandlers.getPotion(tokens as String) as MCPotion
```
### getRecipeManager

Gets the recipeManager based on registry name. Throws an error if it can't find the recipeManager.
 Throws an expcetion if the given recipeType is not found.
 <p>
 This will always return IRecipeManager.<br>
 There is also a BEP for that but that works differently so it can't be automatically added to the docs here.
 But the BEP looks the same as the other ones: `<recipetype:minecraft:crafting>`

Returns: The found recipeManager
Return Type: [IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
BracketHandlers.getRecipeManager(tokens as String) as IRecipeManager
BracketHandlers("minecraft:crafting")
```
### getResourceLocation

Creates a Resource location based on the tokens.
 Throws an error if the tokens are not a valid location.

Returns: The location
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

BracketHandlers.getResourceLocation(tokens as String) as MCResourceLocation
BracketHandlers("minecraft:dirt")
```
### getTextFormatting

Return Type: [TextFormatting](/vanilla/api/util/text/TextFormatting)

```zenscript
BracketHandlers.getTextFormatting(tokens as String) as TextFormatting
```
