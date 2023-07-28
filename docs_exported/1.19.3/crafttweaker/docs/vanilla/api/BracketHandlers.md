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

:::group{name=getDamageSource}

Gets a damage source based on type. <br />  If the damage source is not pre-registered, it will create a new one with the given name

Returns: The found pre-registered damage source or a new one  
Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
<damagesource:magic>

// BracketHandlers.getDamageSource(tokens as string) as DamageSource

BracketHandlers.getDamageSource("magic");
```

| Parameter |  Type  |       Description        |
|-----------|--------|--------------------------|
| tokens    | string | the damage sources' type |


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

:::group{name=getMaterial}

Gets the given [Material](/vanilla/api/block/material/Material). Throws an Exception if not found.

Returns: The found [Material](/vanilla/api/block/material/Material)  
Return Type: [Material](/vanilla/api/block/material/Material)

```zenscript
<material:earth>

// BracketHandlers.getMaterial(tokens as string) as Material

BracketHandlers.getMaterial("earth");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | What you would write in the BEP call. |


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

:::group{name=getResourceLocation}

::deprecated[Use [ResourceLocationBracketHandler](/vanilla/api/ResourceLocationBracketHandler)#getResourceLocation(String) instead.]

Creates a Resource location based on the tokens. <br />  Throws an error if the tokens are not a valid location.

Returns: The location  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// BracketHandlers.getResourceLocation(tokens as string) as ResourceLocation

BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter |  Type  |      Description      |
|-----------|--------|-----------------------|
| tokens    | string | The resource location |


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

