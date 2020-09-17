# 大釜（大釜）

大釜のレシピを追加/削除するために大釜パッケージを使用します。 設定で `シンプル` に設定されている場合に注意してください。 水を使ったレシピのみが作れますが、JEIではすべてのレシピが表示されます。

## 発信中

`mods.influction.Cauldron` を使って大釜パッケージを呼び出すことができます。

## Fluids

インスピレーションは、流体を使用して3種類のレシピを備えています:流体を使用してアイテムを変換するもの。 アイテムを使って流体を変形させたり、アイテムを使って流体でいっぱいにしたりします。 すべてのハンドラーが流体スタックを取る間、流体タイプのみがレシピに影響を与えます。 インスピレーションの大釜は大釜で3本のバニラシステムを使用するので、量は別のパラメータで処理されます。

### 流体の追加

流体を使用して、入力項目を出力項目に変換するレシピを追加します。

* 入力項目はスタックサイズに対応しており、保持されたスタックを一定サイズにする必要があります。
* レベルはレシピによって消費されるレベルの数を決定します。 0-3に対応しており、1に既定で設定しています
* 沸騰は、レシピのために大釜を火の上に置く必要があるかどうかを決定します。 必要に応じて false を指定することができます。火のない場合は false を、無視する場合は null (デフォルト) を指定します。

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(IItemStack output, IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### 流体除去

大釜から既存の流体レシピを削除します。

```zenscript
//mods.infludron.removeFluidRecipe(IIngredient出力, @Optional ILiquidStack流体)
mods.infludron.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### 流体変換の追加

アイテムを使用して流体を出力流体に変換するレシピを追加します。

* 入力項目はスタックサイズに対応しており、保持されたスタックを一定サイズにする必要があります。
* 最大レベルは、この変換を行うために許容される最大流体量を決定します。 大釜が少ない流体を含んでいる場合、より安いバージョンを持つために使用されます。
* 沸騰は、レシピのために大釜を火の上に置く必要があるかどうかを決定します。 必要に応じて false を指定することができます。火のない場合は false を、無視する場合は null (デフォルト) を指定します。

```zenscript
//mods.infludron.addFluidTransform(ILiquidStack出力, IIngredient入力, ILiquidStack流体, @Optional int maxLevels, @Optional boolean boiling);
mods.auldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### 流体変換除去

大釜から既存の流体変換レシピを削除します。 出力は `IIngredient` ですが、流体スタックまたはワイルドカードのみをサポートします。

```zenscript
//mods.infludron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### レシピの追加情報を入力

用意された液体でコルドロンを充填するレシピを追加します。

* 入力項目はスタックサイズに対応しており、保持されたスタックを一定サイズにする必要があります。
* レベルは、レシピがコルドロンを満たす量を決定します。 指定されていない場合、デフォルトは 1 です。
* コンテナは、このレシピを実行した後に返されるアイテムを決定します。 何も指定されていない場合は、何も返さないようにします。

```zenscript
//mods.infludron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional IItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.auldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### レシピを削除する

大釜から既存の充填レシピを削除します。

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient input, @Optional ILiquidStack fluid);
mods.spiels.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.speibe.Cauldron.removeFillRemipe(<*>, <liquid:mushroom_stew>);
```

## 醸造とポーション

インスピレーションはポーションを使用してポーションのレシピの2種類を備えています: あるタイプから別のタイプにポーションを変更する醸造レシピ。 ポーションを使ってアイテムを変えるポーションのレシピです

レシピは `ポーション`の代わりに `ポーションタイプ`の代わりにformat@@4をとるので、ポーションパラメータは文字列です。 すべてのポーションの種類のリストは、コマンド `/ct インスピレーションのポーション` を使用して取得できます。

### 醸造所の追加

試薬を使用して、入力ポーションを出力ポーションに変換するレシピを追加します。

```zenscript
//mods.spights.Cauldron.addBrewingRecipe(String出力, 文字列入力, IIngredient試薬);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thickert", <minecraft:diamond>);
mods.auldron.addBrewingRecipe("minecraft:healing", "minecraft:th厚", <ore:gemEmerald>);
```

### 醸造所の除去

大釜から既存の醸造レシピを削除します。 入力と出力の両方が null に設定でき、ワイルドカードとして動作します。

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(出力, @Optional IIngredient 試薬),
mods.spipation.Cauldron.removeBrewingRecipe("spimations:haste");
mods.indexs.Cauldron.removeBrewingRecipe("minecraft:awd", "minecraft:water", <minecraft:nether_wart>);
```

### ポーションレシピの追加

ポーションを使用して、入力アイテムを出力アイテムに変換するレシピを追加します。

* レベルはレシピによって消費されるレベルの数を決定します。 0-3に対応しており、1に既定で設定しています
* 沸騰は、レシピのために大釜を火の上に置く必要があるかどうかを決定します。 必要に応じて false を指定することができます。火のない場合は false を、無視する場合は null (デフォルト) を指定します。

```zenscript
//mods.influstrations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String point, @Optional int level, @Optional boolean boiling);
mods.influstrations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### ポーションレシピの除去

大釜から既存のポーションのレシピを削除します。 デフォルトでは、ポーションのレシピは存在しませんが、アドオンはレシピを追加する可能性があります。

```zenscript
//mods.auldron.removePotionRecipe(IIngredient出力, @Optional IIngredient入力, @Optional String potion);
```

## 染料

インスピレーションは、染料を使ってアイテムを変えるための1種類の染料レシピのみを備えています。 染料レシピは、 `EnumDyeColor` の値を表すストリング染料の色を取ります。 すべての値のリストを取得するには、 `/ct インスピレーションが` に表示されます。

### 追加中

染められた水の単一レベルを消費する染料を使用して、インプットを出力に変換するレシピを追加します。

```zenscript
//mods.auldron.addDyeRecipe(IItemStack 出力, IIngredient input, String dye);
mods.auldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.auldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### 削除

コルドロンから既存の染料のレシピを削除します。

```zenscript
//mods.auldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.auldron.removeDyeRecipe(<*>, <*>, "blue");
mods.auldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```