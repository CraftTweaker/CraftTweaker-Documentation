# Extraction Chamber

## 所属包名
```zenscript
import mods.calculator.extractionChamber;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 添加配方
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## 移除
```zenscript
extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```