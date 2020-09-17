# Thermionic Fabricator

ModTweakerを使用すると、林業サーミオニックファブリケーターレシピを追加または削除できます。

## 発信中

`mods.forestry.ThermionicFabricator` を使用してパッケージを呼び出すことができます。

## レシピ/キャスト削除

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## レシピ/キャスト追加

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[][] ingredients, ILiquidStack liquidStack, @Optional IItemStack plan);
mods.forestry.ThermionicFabricator.addCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry.ThermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## 精錬除去

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## 精錬添加量

精錬の結果として、ゲーム内のすべての液体を追加することができます。 しかし、他の液体で発生するバグのため、現在 `<liquid:glass>` のみが推奨されます。

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```