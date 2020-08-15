# Algorithm Separator

## パッケージ
```zenscript
import mods.calculator.algorithmSeparator;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** outputs.

## 加算
```zenscript
algorithmSeparator.addRecipe(IIngredient入力, IIngredient出力1, IIngredient出力2);
```

## 削除
```zenscript
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```