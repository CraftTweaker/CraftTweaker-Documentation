# Atomic Calculator

## 所属包名
```zenscript
import mods.calculator.atomic;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## 添加配方
```zenscript
atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
```

## 移除
```zenscript
atomic.removeRecipe(IIngredient output);
```