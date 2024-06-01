# BracketHandlers

This class contains the "simple" Bracket handlers from CraftTweaker.
 However, some Bracket handlers, like for recipeTypes, tags, tagManagers, won't be shown here as
 they use a different internal structure.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.bracket.BracketHandlers;
```


## Static Methods

:::group{name=getAttribute}

Return Type: [Attribute](/vanilla/api/entity/attribute/Attribute)

```zenscript
BracketHandlers.getAttribute(tokens as string) as Attribute
```

| Parameter |  Type  |
|-----------|--------|
| tokens    | string |


:::

:::group{name=getBannerPattern}

Gets a banner pattern based on registry name. Throws an exception if it can't find the banner pattern.

Returns: The found banner pattern  
Return Type: [BannerPattern](/vanilla/api/block/entity/BannerPattern)

```zenscript
<bannerpattern:minecraft:square_bottom_left>

// BracketHandlers.getBannerPattern(tokens as string) as BannerPattern

BracketHandlers.getBannerPattern("minecraft:square_bottom_left");
```

| Parameter |  Type  |              Description               |
|-----------|--------|----------------------------------------|
| tokens    | string | The banner pattern's resource location |


:::

:::group{name=getBlock}

Gets the give [Block](/vanilla/api/block/Block). Throws an Exception if not found

Returns: The found [Block](/vanilla/api/block/Block)  
Return Type: [Block](/vanilla/api/block/Block)

```zenscript
<block:minecraft:dirt>

// BracketHandlers.getBlock(tokens as string) as Block

BracketHandlers.getBlock("minecraft:dirt");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | What you would write in the BEP call. |


:::

:::group{name=getBlockState}

Creates a Blockstate based on the given inputs. <br />  Returns `null` if it cannot find the block, ignored invalid variants

Returns: The found BlockState  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

// BracketHandlers.getBlockState(tokens as string) as BlockState

BracketHandlers.getBlockState("minecraft:acacia_planks");
BracketHandlers.getBlockState("minecraft:furnace:facing=north,lit=false");
```

| Parameter |  Type  |                Description                 |
|-----------|--------|--------------------------------------------|
| tokens    | string | The block's resource location and variants |


:::

:::group{name=getComponentType}

Gets a data component type based on registry name. Throws an exception if it can't find the data component type.

Returns: The found data component type  
Return Type: [DataComponentType](/vanilla/api/component/DataComponentType)

```zenscript
<componenttype:minecraft:max_stack_size>

// BracketHandlers.getComponentType(tokens as string) as DataComponentType

BracketHandlers.getComponentType("minecraft:max_stack_size");
```

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| tokens    | string | The data component type's resource location |


:::

:::group{name=getEnchantment}

Gets the enchantment based on registry name. Throws an error if it can't find the enchantment.

Returns: The found enchantment  
Return Type: [Enchantment](/vanilla/api/item/enchantment/Enchantment)

```zenscript
<enchantment:minecraft:riptide>

// BracketHandlers.getEnchantment(tokens as string) as Enchantment

BracketHandlers.getEnchantment("minecraft:riptide");
```

| Parameter |  Type  |           Description           |
|-----------|--------|---------------------------------|
| tokens    | string | The enchantment's registry name |


:::

:::group{name=getEntityType}

Gets the entityType based on registry name. Throws an exception if it can't find the entityType.

Returns: The found entityType  
Return Type: [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
<entitytype:minecraft:pig>

// BracketHandlers.getEntityType(tokens as string) as EntityType<Entity>

BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tokens    | string | The entityType's resource location |


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

| Parameter |  Type  |          Description          |
|-----------|--------|-------------------------------|
| tokens    | string | The Fluid's resource location |


:::

:::group{name=getInstrument}

Gets an instrument based on registry name. Throws an exception if it can't find the instrument.

Returns: The found instrument  
Return Type: [Instrument](/vanilla/api/item/component/Instrument)

```zenscript
<instrument:minecraft:ponder_goat_horn>

// BracketHandlers.getInstrument(tokens as string) as Instrument

BracketHandlers.getInstrument("minecraft:ponder_goat_horn");
```

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tokens    | string | The instrument's resource location |


:::

:::group{name=getItem}

Gets the item based on registry name. Throws an error if it can't find the item.

Returns: The found item  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
<item:minecraft:dirt>

// BracketHandlers.getItem(tokens as string) as IItemStack

BracketHandlers.getItem("minecraft:dirt");
```

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| tokens    | string | The item's resource location |


:::

:::group{name=getMobEffect}

Gets the mobeffect based on registry name. Throws an error if it can't find the mobeffect.

Returns: The found mobeffect  
Return Type: [MobEffect](/vanilla/api/entity/effect/MobEffect)

```zenscript
<mobeffect:minecraft:haste>

// BracketHandlers.getMobEffect(tokens as string) as MobEffect

BracketHandlers.getMobEffect("minecraft:haste");
```

| Parameter |  Type  |            Description            |
|-----------|--------|-----------------------------------|
| tokens    | string | The mobeffect's resource location |


:::

:::group{name=getPotion}

Return Type: [Potion](/vanilla/api/item/alchemy/Potion)

```zenscript
BracketHandlers.getPotion(tokens as string) as Potion
```

| Parameter |  Type  |
|-----------|--------|
| tokens    | string |


:::

:::group{name=getProfession}

Gets the villager profession based on registry name. Throws an exception if it can't find the profession.

Returns: The found profession  
Return Type: [VillagerProfession](/vanilla/api/villager/VillagerProfession)

```zenscript
<profession:minecraft:armorer>

// BracketHandlers.getProfession(tokens as string) as VillagerProfession

BracketHandlers.getProfession("minecraft:armorer");
```

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tokens    | string | The profession's resource location |


:::

:::group{name=getRecipeManager}

Gets the recipeManager based on registry name. Throws an error if it can't find the recipeManager. <br />  Throws an exception if the given recipeType is not found. <br />   <br />  This will always return IRecipeManager.<br> <br />  There is also a BEP for that but that works differently so it can't be automatically added to the docs here. <br />  But the BEP looks the same as the other ones: `<recipetype:minecraft:crafting>`

Returns: The found recipeManager  
Return Type: [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

```zenscript
// BracketHandlers.getRecipeManager(tokens as string) as IRecipeManager

BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | The recipeManager's resource location |


:::

:::group{name=getSoundEvent}

Gets a sound event based on registry name. Throws an exception if it can't find the sound event.

Returns: The found sound event  
Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
<soundevent:minecraft:ambient.cave>

// BracketHandlers.getSoundEvent(tokens as string) as SoundEvent

BracketHandlers.getSoundEvent("minecraft:ambient.cave");
```

| Parameter |  Type  |             Description             |
|-----------|--------|-------------------------------------|
| tokens    | string | The sound event's resource location |


:::

:::group{name=getTargetingStrategy since="10.0.0"}

Gets an [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) based on its name. <br />  <br />  Throws an exception if the strategy doesn't exist.

Returns: The found targeting strategy  
Return Type: [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy)

```zenscript
<targetingstrategy:crafttweaker:default>

// BracketHandlers.getTargetingStrategy(tokens as string) as ITargetingStrategy

BracketHandlers.getTargetingStrategy("crafttweaker:default");
```

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| tokens    | string | The strategy's resource location |


:::

:::group{name=getTrimMaterial}

Gets a trim material based on registry name. Throws an exception if it can't find the trim material.

Returns: The found trim material  
Return Type: [TrimMaterial](/vanilla/api/item/armortrim/TrimMaterial)

```zenscript
<trimmaterial:minecraft:quartz>

// BracketHandlers.getTrimMaterial(tokens as string) as TrimMaterial

BracketHandlers.getTrimMaterial("minecraft:quartz");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | The trim material's resource location |


:::

:::group{name=getTrimPattern}

Gets a trim pattern based on registry name. Throws an exception if it can't find the trim pattern.

Returns: The found trim pattern  
Return Type: [TrimPattern](/vanilla/api/item/armortrim/TrimPattern)

```zenscript
<trimpattern:minecraft:sentry>

// BracketHandlers.getTrimPattern(tokens as string) as TrimPattern

BracketHandlers.getTrimPattern("minecraft:sentry");
```

| Parameter |  Type  |             Description              |
|-----------|--------|--------------------------------------|
| tokens    | string | The trim pattern's resource location |


:::

:::group{name=getVillagerType}

Gets the villager profession based on registry name. Throws an exception if it can't find the profession.

Returns: The found profession  
Return Type: [VillagerType](/vanilla/api/villager/VillagerType)

```zenscript
<villagertype:minecraft:armorer>

// BracketHandlers.getVillagerType(tokens as string) as VillagerType

BracketHandlers.getVillagerType("minecraft:armorer");
```

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| tokens    | string | The profession's resource location |


:::

