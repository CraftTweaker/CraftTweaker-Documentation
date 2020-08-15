# Heat Frame Cooling

ヒートフレーム冷却を使用すると、ヒートフレームが付いているアイテムをチェストや他のインベントリに配置することで、アイテムを別のアイテムに変換できます。 そして0°C以下に冷却します(通常はVortex Tubeを使用)。

## 発信中

`mods.emeraticcraft.heatframecooling` を使用してヒートフレーム冷却パッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) `出力` で見つけた最初のレシピを削除します。

```zenscript
mods.emeraticcraft.heatframecooling.removeRecipe(IIngredient output);
// Example
mods.emeraticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

この機能は、 ** すべてのヒートフレーム冷却レシピを削除します。

```zenscript
mods.emeraticcraft.heatframecooling.removeAllRecipes();
```

## 追加中

これらの機能は、ヒートフレーム冷却システムの新しいレシピを追加するために使用されます。

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```