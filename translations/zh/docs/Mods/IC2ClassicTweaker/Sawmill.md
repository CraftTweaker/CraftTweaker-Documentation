# 锯木厂

## 所属包名

```java
导入 mods.ic2.Sawmill;
```

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**

### 添加配方

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### 删除配方

要删除已经存在的配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。