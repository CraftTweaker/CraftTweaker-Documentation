# Algorithm Separator

## 所属包名
```zenscript
import mods.calculator.algorithmSeparator;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 添加配方
```zenscript
algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Removal
```zenscript
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```