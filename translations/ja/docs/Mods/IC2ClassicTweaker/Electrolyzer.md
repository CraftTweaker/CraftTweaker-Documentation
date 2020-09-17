# エレクトロライザー

## パッケージ

```zenscript
import mods.ic2.ClassicElectrolyzer;
```

## メソッド

### 両方のレシピを追加

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** は、ItemStackでなければならず、鉱石やその他のものではありません。
- **int energy** 排出部とレシピの充電部に使用される総エネルギーから得られる総eu。

### 課税レシピを追加

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** は、ItemStackでなければならず、鉱石やその他のものではありません。
- **int energy** レシピに使用されるEu合計。

### 排出レシピを追加

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** は、ItemStackでなければならず、鉱石やその他のものではありません。
- **int energy** レシピから受け取った総eu.

### 削除

`config/ic2/ic2machineRecipes.json` で対応するレシピを無効にするだけです。

