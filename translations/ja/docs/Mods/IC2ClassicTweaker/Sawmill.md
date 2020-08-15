# 製材所

## パッケージ

```java
import mods.ic2.Sawmill;
```

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

### 加算

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### 削除

To remove an already existing recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.