# 示例
Creates lava by dropping 4x of any logWood into cryotheum.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`
***
扔一些白桦木板进杂酚油，让白桦木板变成被处理过的木头 `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`
***
Creates a Water Bottle by dropping a Glass Bottle in Water, consumes the Water sourceblock.  
`mods.inworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`
***
Create Steel 15% of the time when ingotIron dropped in the world is hit by an Explosion.  
`mods.inworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`
***
75%几率把金合欢木板(放置状态) 炸成8根木棍 `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`
***
焚烧四块原木60秒，烧成木炭块 `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`
# 文档
## 关于液体的修改
**Don't add the same ingredient multiple times, use `<ingredient> * count`. It's there for a reason.**  
The game merges nearby items into stacks so finding multiple ingredients of the same type in one BlockSpace only happens when the first EntityItem gets a full stack of items, so the craft won't happen like you would expect.
### 错误的示范!
`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`
### 正确的示范！
`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## 液体转换为物体
输入物品格式为 `mods.inworldcrafting.FluidToItem`

**Usage**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

默认消耗的值是 `true`, 所以如果你不想 `inputItem` 被消耗, 当转化液体时你不得不设值为 `false` 作为第四个参数.

## 液体转换为其它液体
输入物品格式为 `mods.inworldcrafting.FluidToFluid`

**Usage**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

默认消耗的值是 `true`, 所以如果你不想 `inputItem` 被消耗, 当转化液体时你不得不设值为 `false` 作为第四个参数.

## 燃烧物品
输入物品格式为 `mods.inworldcrafting.FireCrafting`

**Usage**  
`FireCrafting.addRecipe(IItemStack output, IIngredient inputItem, @Optional int ticks);`

默认燃烧秒数为 `40` (2 秒)

## 炸毁 物品/方块
输入物品格式为 `mods.inworldcrafting.ExplosionCrafting`

### 炸毁物品合成
**Usage**  
`ExplosionCrafting.explodeItemRecipe(IItemStack output, IIngredient inputItem, @Optional int survicechance);`

爆炸合成成功的概率. Default value is `100`%

### 炸毁方块合成
**Usage**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack output, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` 应该是 `方块` (放置状态).  他将会和元数据比较 `itemSpawnChance` 是每个方块被炸毁掉落物品的概率. Default value is `100`%  
