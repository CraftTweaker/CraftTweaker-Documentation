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

焚烧四块原木60秒，烧成木炭块 `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# 文档

## 关于液体的修改

**不要重复加相同的物品, 应该用 `<物品> * 数量`. 原因如下.**  
游戏会把附近相同的东西堆叠到一起仅发生于第一个entityitem获取一个整组, 所以不会像你期望那样合成出来.

### 错误的示范!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### 正确的示范！

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## 液体转换为物体

输入物品格式为 `mods.inworldcrafting.FluidToItem`

**用法**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

默认消耗的值是 `true`, 所以如果你不想 `inputItem` 被消耗, 当转化液体时你不得不设值为 `false` 作为第四个参数.

## 液体转换为其它液体

输入物品格式为 `mods.inworldcrafting.FluidToFluid`

**用法**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

默认消耗的值是 `true`, 所以如果你不想 `inputItem` 被消耗, 当转化液体时你不得不设值为 `false` 作为第四个参数.

## 燃烧物品

输入物品格式为 `mods.inworldcrafting.FireCrafting`

**用法**  
`FireCrafting.addRecipe(IItemStack output, IIngredient inputItem, @Optional int ticks);`

默认燃烧秒数为 `40` (2 秒)

## 炸毁 物品/方块

输入物品格式为 `mods.inworldcrafting.ExplosionCrafting`

### 炸毁物品合成

**用法**  
`ExplosionCrafting.explodeItemRecipe(IItemStack output, IIngredient inputItem, @Optional int survicechance);`

爆炸合成成功的概率. 默认几率为 `100`%

### 炸毁方块合成

**用法**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack output, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` 应该是 `方块` (放置状态). 他将会和元数据比较 `itemSpawnChance` 是每个方块被炸毁掉落物品的概率. 默认概率是 `100`%