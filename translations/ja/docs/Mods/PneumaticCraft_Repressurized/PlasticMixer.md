# プラスチックミキサー

プラスチックミキサーは、以下の2つの機能を持つマシンです。

* 液体プラスチック流体を固体プラスチックシートに固体化させるには、赤、緑、青の染料を使用してシートを色付けします。
* 固体プラスチックシートを液体プラスチックに溶融する。 これには最低150°C(423K)の温度が必要です。

CraftTweakerのサポートにより、溶融および/または固化目的のために任意のアイテムと液体の組み合わせを指定することができます。 アイテムを溶かすのみ、流体を固めるか、双方向プロセスを可能にするかを指定することができます。

固化ターゲットアイテムはどのアイテムでもかまいませんが、ここでは色とりどりのアイテムを使用するのが最も理にかなっています。 染料は常に使われているので出力品目が色付きかどうかに関わらず。

## 発信中

`mods.empaticcraft.plasticmixer` を使ってPlastic Mixerパッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `入力` で見つけた最初のレシピを削除します。

```zenscript
mods.emeraticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// Example
mods.emeraticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

この機能は *全ての* プラスチックミキサーのレシピを削除します。

```zenscript
mods.emeraticcraft.plasticmixer.removeAllRecipes();
```

## 追加中

TPPにレシピを追加するには、以下の機能を使用できます。

```zenscript
// Add a two-way recipe (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack stack, int temperature);

// Add a recipe allowing solidification only
mods.pneumaticcraft.plasticmixer.addSolidifyOnlyRecipe(ILiquidStack liquidInput, IItemStack itemOutput);

// Add a recipe allowing melting only (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Example: convert 100mB Lava to/from Concrete (melt at 573K)
mods.pneumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Example: convert 2000mB Oil to Plastic (but don't allow melting back)
mods.pneumaticcraft.plasticmixer.addSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Example: convert Plastic to 100mB Oil at 473K (but don't allow solidifying)
mods.pneumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```