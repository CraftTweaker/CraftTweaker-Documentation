# 製材所

## パッケージ

```java
import mods.ic2.Sawmill;
```

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**

### 加算

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack 出力, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### 削除

既存のレシピを削除するには、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。