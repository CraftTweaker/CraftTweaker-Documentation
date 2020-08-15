# Atomic Calculator

## パッケージ
```zenscript
import mods.calculator.atomic;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## 加算
```zenscript
atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
```

## 削除
```zenscript
atomic.removeRecipe(IIngredient output);
```