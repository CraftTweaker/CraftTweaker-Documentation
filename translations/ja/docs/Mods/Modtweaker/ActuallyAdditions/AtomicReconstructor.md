# 原子構造体の再構築

## パッケージ

`mods.actuallyadditions.AtomicReconstructor`

## 加算

```zenscript
//mods.actuallyadditions.AtomicReconstructor.addRecipe(IItemStack output, IItemStack input, int energyUsed);
mods.actuallyadditions.AtomicReconstructor.addRecipe(<minecraft:fire_charge>, <minecraft:coal:1>, 1000);
```

## 削除

```zenscript
//mods.actuallyadditions.AtomicReconstructor.removeRecipe(IItemStack output);
mods.actuallyadditions.AtomicReconstructor.removeRecipe(<minecraft:coal>);
```