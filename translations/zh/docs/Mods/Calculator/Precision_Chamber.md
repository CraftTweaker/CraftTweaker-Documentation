# Precision Chamber

## 所属包名
```zenscript
import mods.calculator.precisionChamber;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 添加配方
```zenscript
precisionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## 移除
```zenscript
precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```