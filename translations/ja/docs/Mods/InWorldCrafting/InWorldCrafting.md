# 使用例

すべてのlogWoodの4倍をクライオテウムに落として溶岩を作ります。  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Creosoteにシラカバの木を落として、治療された木材を作成します。 `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Creates a Water Bottle by dropping a Glass Bottle in Water, consumes the Water sourceblock.  
`mods.inworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Create Steel 15% of the time when ingotIron dropped in the world is hit by an Explosion.  
`mods.inworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

世界に置かれたアカシアの木材が爆発で打たれた時間の75%を作りましょう。 `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

木炭のブロックを4つ作成します。木材が60ティックで焼かれたとき。 `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# ドキュメント

## 流体作製に関する注意

**同じ成分を複数回追加しないで、 `<ingredient> * count` を使用してください。 それは理由があるからです。**  
ゲームは近くのアイテムをスタックにマージするので、1つのBlockSpaceで同じタイプの複数の成分を見つけることは、最初のEntityItemがアイテムの完全なスタックを取得するときにのみ起こります。 あなたが期待するようなことは起こらないのです

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Goooood

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## 流体からアイテム変換へ

import should be `mods.inworldcrafting.FluidToItem`

**Usage**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

The default consume value for this method is `true`, so if you don't want the `inputItem` to be consumed when transforming the liquid you have to pass `false` as the 4th paramater to the method.

## 流体変換への流体変換

import should be `mods.inworldcrafting.FluidToFluid`

**Usage**  
`FluidToFluid.transform(ILiquidStack出力, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

The default consume value for this method is `true`, so if you don't want the `inputItem` to be consumed when transforming the liquid you have to pass `false` as the 4th paramater to the method.

## 燃焼アイテム

import should be `mods.inworldcrafting.FireCrafting.`

**Usage**  
`FireCrafting.addRecipe(IItemStack output, IIngredient inputItem, @Optional int ticks);`

出力を作成するデフォルトのティック数は `40` (2 秒)

## アイテム/ブロックの爆発

import should be `mods.inworldcrafting.ExplosionCrafting.`

### アイテムを分解中

**Usage**  
`ExplosionCrafting.explodeItemRecipe(IItemStack output, IIngredient inputItem, @Optional int survicechance);`

Survivechanceはレシピが成功する可能性が高いというチャンスを設定します。 デフォルト値は `100`%

### 分解ブロック

**Usage**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack output, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` は、スタック形式で `Block` でなければなりません。 それはメタデータと比較します。 `itemSpawnChance` は、ブロックが爆発で破壊されたときに、ブロックが出力される確率を設定します。 デフォルト値は `100`%