# Algorithm Separator

## パッケージ
```zenscript
import mods.calculator.algorithmSeparator;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 加算
```zenscript
algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## 削除
```zenscript
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```