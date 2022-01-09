# Anvil Welding

## 所属包
```zenscript
import mods.terrafirmacraft.Welding;
```

## 添加配方

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack output, int minTier);
```

## Removal

```zenscript
Welding.removeRecipe(IItemStack output);
Welding.removeRecipe(String registryName);
```
- As with anvil recipes, the same rules for input applies here. The input must be forgeable(see [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) for registering forging capability to an item) and can't be stacked.