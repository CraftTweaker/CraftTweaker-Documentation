# 例子

扔四个任意原木进凛冰液体，让凛冰液体转换成岩浆 `mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

扔一些白桦木板进杂酚油，让白桦木板变成被处理过的木头 `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

扔一个空水瓶进水中得到一个水瓶(消耗水源方块). `mods.inworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);<br />//true表示消耗液体方块，反之为false`

* * *

铁锭(掉落物状态)被炸有15%几率转化为钢锭.  
`mods.inworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

75%几率把金合欢木板(放置状态) 炸成8根木棍 `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Create a Block of Charcoal when 4 pieces of logWood has burned for 60 ticks. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Documentation

## Note on fluidcrafting

**Don't add the same ingredient multiple times, use `<ingredient> * count`. It's there for a reason.**  
The game merges nearby items into stacks so finding multiple ingredients of the same type in one BlockSpace only happens when the first EntityItem gets a full stack of items, so the craft won't happen like you would expect.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Goooood

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Fluid to Item Transformation

import should be `mods.inworldcrafting.FluidToItem`

**Usage**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

The default consume value for this method is `true`, so if you don't want the `inputItem` to be consumed when transforming the liquid you have to pass `false` as the 4th paramater to the method.

## Fluid to Fluid Transformation

import should be `mods.inworldcrafting.FluidToFluid`

**Usage**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

The default consume value for this method is `true`, so if you don't want the `inputItem` to be consumed when transforming the liquid you have to pass `false` as the 4th paramater to the method.

## Burning Items

import should be `mods.inworldcrafting.FireCrafting`

**Usage**  
`FireCrafting.addRecipe(IItemStack output, IIngredient inputItem, @Optional int ticks);`

The default number of ticks to create the output is `40` (2 seconds)

## Exploding Items/Blocks

import should be `mods.inworldcrafting.ExplosionCrafting`

### Exploding items

**Usage**  
`ExplosionCrafting.explodeItemRecipe(IItemStack output, IIngredient inputItem, @Optional int survicechance);`

Survivechance sets the chance for how likely the recipe is to be successful. Default value is `100`%

### Exploding Blocks

**Usage**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack output, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` should be a `Block` in its stackform. It will compare against metadata. `itemSpawnChance` sets the chance for how likely the block is to spawn the output when the block is destroyed by an explosion. Default value is `100`%