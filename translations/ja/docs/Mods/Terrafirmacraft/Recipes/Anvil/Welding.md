# Anvil Welding

## パッケージ
```zenscript
import mods.terrafirmacraft.Welding;Welding;
```

## 追加

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack output, int minTier);
```

## 削除

```zenscript
Welding.removeRecipe(IItemStack output);
Welding.removeRecipe(String registryName);
```
- As with anvil recipes, the same rules for input applies here. The input must be forgeable(see [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) for registering forging capability to an item) and can't be stacked.