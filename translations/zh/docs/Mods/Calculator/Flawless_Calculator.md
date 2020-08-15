# Flawless Calculator

## 所属包名
```zenscript
import mods.calculator.flawless;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-4]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
## 添加配方
```zenscript
flawless.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient input4, IIngredient output);
```

## 移除
```zenscript
flawless.removeRecipe(IIngredient output);
```