# 熱空圧加工工場

熱空圧加工工場(TPP)は、圧力と熱を使用して、1つの流体および/または1つの固体成分を別の流体に変換します。 Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*技術的には、273.16 K = 0°Cですが、このモジュールは整数オフセットに簡略化されています。*

## 発信中

`mods.empaticcraft.thermopenaticplant` を使用してTPPパッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) `出力` で見つけた最初のレシピを削除します。

```zenscript
mods.emeraticcraft.thermopenaticprocessingplant.removeRecipe(IIngredient output);
// Example
mods.emumaticcraft.thermopenaticprocessingplant.removeRecipe(<liquid:lpg>);
```

この関数は *すべての* TPPレシピを削除します。

```zenscript
mods.emeraticcraft.thermopenmaticprocessingplant.removeAllRecipes();
```

## 追加中

TPPにレシピを追加するには、以下の機能を使用できます。

```zenscript
// Add a recipe converting an input item into an output fluid
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(IItemStack itemInput, double pressure, double temperature, ILiquidStack output);

// Add a recipe converting an input fluid and item into an output fluid (item may be null)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, double pressure, double temperature, ILiquidStack output);

// Example: convert water and redstone to some redstone fluid at 3.0 bar and 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3.0, 473, <liquid:redstone> * 250);
// Example: convert 10mB oil into 5mB lava at 3.0 bar and 473K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Example: convert 1 netherrack into 50mB lava at 1.5 bar and 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```