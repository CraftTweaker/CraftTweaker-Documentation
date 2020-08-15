# 采掘分庭

## 所属包名
```zenscript
导入 mods.calculator.extractionChamber;
```

## 使用方式

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入** 输入.
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输出[1-2]** 输出.

## 添加配方
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2)；
```

## 移除
```zenscript
extractionChamber.removeRecipe(IIngredient output, IIngredient output2)；
```