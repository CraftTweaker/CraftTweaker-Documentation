# Redstone Furnace

## Package

`mods.thermalexpansion.RedstoneFurnace`

## 加算

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(IItemStack output, IItemStack input, int energy);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Removal

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Pyrolitic Augment Addition

**_エネルギーが`1.5`倍されていることに注意してください。 エネルギーが`1.5`倍されていることに注意してください。 `2000`のエネルギーを指定すると、実際のレシピにおけるコストは、`3000` RFになります。 同様に、`1500`を指定すると、`2250` RFのコストが必要になります。 同様に、`1500`を指定すると、`2250` RFのコストが必要になります。_**

木炭をcoal cokeに変え、250mbのcreosote oilを製造するレシピの例です。

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(IItemStack output, IItemStack input, int energy, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Pyrolitic Augment Removal

石炭をcoal cokeに変化させるレシピを削除します。

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```
