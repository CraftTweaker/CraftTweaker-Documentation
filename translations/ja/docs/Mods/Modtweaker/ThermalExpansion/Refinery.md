# 製鋼所

## パッケージ

`mods.thermalexpansion.Refinery`

## レシピを追加

`Refinery.addRecipe(output, outputItem, input, energy);`

- `出力` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

// Adds a recipe that outputs 1mB of lava and a diamond (at a 100% chance) per 1mB of water
Refinery.addRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Adds a recipe that outputs 5mB of lava and a diamond (at a 1% chance) per 100mB of water
Refinery.addRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### ポーションレシピを追加する

錬金術リポート拡張に使用するレシピを追加します。

`Refinery.addRecipePotion(output, input, energy);`

- `出力` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## レシピを削除する

`Refinery.removeRecipe(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### ポーションレシピを削除する

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:hearing3"}));
```