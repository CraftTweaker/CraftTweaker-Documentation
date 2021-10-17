# BracketHandlers

This class contains the "simple" Bracket handlers from CraftTweaker. However, some Bracket handlers, like for recipeTypes, tags, tagManagers, won't be shown here as they use a different internal structure.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.BracketHandlers;
```


## Static Methods

:::group{name=getAttribute}

Return Type: [Attribute](/vanilla/api/entity/Attribute)

```zenscript
BracketHandlers.getAttribute(tokens as string) as Attribute
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | string | No Description Provided |


:::

:::group{name=getBiome}

Gets a Biome based on the tokens. <br />  Throws an error if it can't get the biome

Returns: The found biome  
Return Type: [MCBiome](/vanilla/api/world/MCBiome)

```zenscript
<biome:minecraft:plain>

// BracketHandlers.getBiome(tokens as string) as MCBiome

BracketHandlers.getBiome("minecraft:plain");
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| tokens    | string | The biome's resource location |


:::

:::group{name=getBlock}

Gets the give [MCBlock](/vanilla/api/block/MCBlock). Throws an Exception if not found

Returns: The found [MCBlock](/vanilla/api/block/MCBlock)  
Return Type: [MCBlock](/vanilla/api/block/MCBlock)

```zenscript
<block:minecraft:dirt>

// BracketHandlers.getBlock(tokens as string) as MCBlock

BracketHandlers.getBlock("minecraft:dirt");
```

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| tokens    | string | Co napisaliby państwo w wezwaniu do BEP. |


:::

:::group{name=getBlockMaterial}

Gets the given [MCMaterial](/vanilla/api/block/material/MCMaterial). Throws an Exception if not found.

Returns: The found [MCMaterial](/vanilla/api/block/material/MCMaterial)  
Return Type: [MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

// BracketHandlers.getBlockMaterial(tokens as string) as MCMaterial

BracketHandlers.getBlockMaterial("earth");
```

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| tokens    | string | Co napisaliby państwo w wezwaniu do BEP. |


:::

:::group{name=getBlockState}

Creates a Blockstate based on the given inputs. <br />  Returns `null` if it cannot find the block, ignored invalid variants

Returns: The found BlockState  
Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

// BracketHandlers.getBlockState(tokens as string) as MCBlockState

BracketHandlers.getBlockState("minecraft:acacia_planks");
BracketHandlers.getBlockState("minecraft:furnace:facing=north,lit=false");
```

| Parameter | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| tokens    | string | The block's resource location and variants |


:::

:::group{name=getDamageSource}

Gets a damage source based on type. <br />  If the damage source is not pre-registered, it will create a new one with the given name

Returns: The found pre-registered damage source or a new one  
Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
<damagesource:magic>

// BracketHandlers.getDamageSource(tokens as string) as DamageSource

BracketHandlers.getDamageSource("magic");
```

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| tokens    | string | the damage sources' type |


:::

:::group{name=getDirectionAxis}

Gets the direction Axis based on name. Throws an error if it can't find the direction Axis.

Returns: The found direction Axis  
Return Type: [DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

// BracketHandlers.getDirectionAxis(tokens as string) as DirectionAxis

BracketHandlers.getDirectionAxis("x");
```

| Parameter | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| tokens    | string | The direction Axis's resource location |


:::

:::group{name=getEffect}

Gets the effect based on registry name. Throws an error if it can't find the effect.

Returns: The found effect  
Return Type: [MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

// BracketHandlers.getEffect(tokens as string) as MCPotionEffect

BracketHandlers.getEffect("minecraft:haste");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| tokens    | string | The effect's resource location |


:::

:::group{name=getEnchantment}

Gets the enchantment based on registry name. Throws an error if it can't find the enchantment.

Returns: The found enchantment  
Return Type: [MCEnchantment](/vanilla/api/enchantment/MCEnchantment)

```zenscript
<enchantment:minecraft:riptide>

// BracketHandlers.getEnchantment(tokens as string) as MCEnchantment

BracketHandlers.getEnchantment("minecraft:riptide");
```

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| tokens    | string | The enchantment's registry name |


:::

:::group{name=getEntityClassification}

Gets the entityClassification based on registry name. Logs an error and returns `null` if it can't find the entityClassification.

Returns: The found entityClassification  
Return Type: [MCEntityClassification](/vanilla/api/entity/MCEntityClassification)

```zenscript
<entityclassification:monster>

// BracketHandlers.getEntityClassification(tokens as string) as MCEntityClassification

BracketHandlers.getEntityClassification("monster");
```

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| tokens    | string | The entityClassification's resource location |


:::

:::group{name=getEntityType}

Gets the entityType based on registry name. Throws an exception if it can't find the entityType.

Returns: The found entityType  
Return Type: [MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

// BracketHandlers.getEntityType(tokens as string) as MCEntityType

BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| tokens    | string | The entityType's resource location |


:::

:::group{name=getEquipmentSlotType}

Gets the equipment slot type based on name. Throws an error if it can't find the equipment slot type.

Returns: The found equipment slot type  
Return Type: [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)

```zenscript
<equipmentslottype:mainhand>

// BracketHandlers.getEquipmentSlotType(tokens as string) as MCEquipmentSlotType

BracketHandlers.getEquipmentSlotType("mainhand");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| tokens    | string | The equipment slot type's name |


:::

:::group{name=getFluidStack}

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

// BracketHandlers.getFluidStack(tokens as string) as IFluidStack

BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| tokens    | string | The Fluid's resource location |


:::

:::group{name=getItem}

Gets the item based on registry name. Throws an error if it can't find the item.

Returns: The found item  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

// BracketHandlers.getItem(tokens as string) as IItemStack

BracketHandlers.getItem("minecraft:dirt");
```

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| tokens    | string | The item's resource location |


:::

:::group{name=getItemGroup}

Gets an ItemGroup by name. <br />  Will throw an error if the group could not be found!

Returns: The found ItemGroup  
Return Type: [ItemGroup](/vanilla/api/item/ItemGroup)

```zenscript
<itemgroup:misc>

// BracketHandlers.getItemGroup(tokens as string) as ItemGroup

BracketHandlers.getItemGroup(misc);
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| tokens    | string | The ItemGroup's name. |


:::

:::group{name=getPotion}

Return Type: [MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
BracketHandlers.getPotion(tokens as string) as MCPotion
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | string | No Description Provided |


:::

:::group{name=getProfession}

Gets the villager profession based on registry name. Throws an exception if it can't find the profession.

Returns: The found profession  
Return Type: [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession)

```zenscript
<profession:minecraft:armorer>

// BracketHandlers.getProfession(tokens as string) as MCVillagerProfession

BracketHandlers.getProfession("minecraft:armorer");
```

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| tokens    | string | The profession's resource location |


:::

:::group{name=getRecipeManager}

Gets the recipeManager based on registry name. Throws an error if it can't find the recipeManager. <br />  Throws an exception if the given recipeType is not found. <br />   <br />  This will always return IRecipeManager.<br> <br />  There is also a BEP for that but that works differently so it can't be automatically added to the docs here. <br />  But the BEP looks the same as the other ones: `<recipetype:minecraft:crafting>`

Returns: The found recipeManager  
Return Type: [IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
// BracketHandlers.getRecipeManager(tokens as string) as IRecipeManager

BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| tokens    | string | The recipeManager's resource location |


:::

:::group{name=getResourceLocation}

Creates a Resource location based on the tokens. <br />  Throws an error if the tokens are not a valid location.

Returns: The location  
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

// BracketHandlers.getResourceLocation(tokens as string) as MCResourceLocation

BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| tokens    | string | The resource location |


:::

:::group{name=getTextFormatting}

Return Type: [TextFormatting](/vanilla/api/util/text/TextFormatting)

```zenscript
BracketHandlers.getTextFormatting(tokens as string) as TextFormatting
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | string | No Description Provided |


:::

:::group{name=getToolType}

Gets a tool type by name. <br />  If the tool type doesn't exist yet, this will create a new one with the given name

Returns: The found tool type or a new one  
Return Type: [ToolType](/vanilla/api/tool/ToolType)

```zenscript
<tooltype:shovel>

// BracketHandlers.getToolType(tokens as string) as ToolType

BracketHandlers.getToolType("shovel");
```

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| tokens    | string | the tool type's name |


:::

