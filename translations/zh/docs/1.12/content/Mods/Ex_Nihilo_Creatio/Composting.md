# Composting

## 所属包
```zenscript
mods.exnihilocreatio.Compost
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **Float chance** The chance should be between 0-1.
- **String color** The color is hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.

## 添加配方

Does not take arrays in for IIngredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Removal

```zenscript
Compost.removeAll();
```