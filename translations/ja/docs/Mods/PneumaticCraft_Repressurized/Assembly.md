# ロボット組立システム

ロボット組立システムは、組立コントローラ、組立I/Oユニット、組立プラットフォーム、組立レーザー、組立ドリルで構成されるマルチブロックです。 入力項目をレーザーおよび/またはドリルを使用して出力項目に変換します。

レシピの追加と削除のためのいくつかの機能があります, レシピは、レーザーの使用を必要とするかどうかに応じて、, ドリル, またはその両方.

## 発信中

`mods.emeraticcraft.assembly` を使ってアセンブリパッケージに電話をかけることができます。

## 削除中

これらの関数は、与えられた [IItemStack](/Vanilla/Items/IItemStack/) `出力` で見つけた最初のレシピを削除します:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

これらの関数は、アセンブリシステムに現在定義されている ** すべてのレシピを削除します。

```zenscript
mods.emeraticcraft.assembly.removeAllLaserRecipes();
mods.emeraticcraft.assembly.removeAllDrillRecipes();
mods.emeraticcraft.assembly.removeAllDrillLaserRecipes();
```

## 追加中

これらの機能は、アセンブリシステムの新しいレシピを追加するために使用されます。

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```