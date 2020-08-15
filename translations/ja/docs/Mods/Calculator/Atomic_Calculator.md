# アトミック計算

## パッケージ
```zenscript
import mods.calculator.atomic;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** 入力.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** 出力。

## 加算
```zenscript
atomic.addRecipe(IInput1, IIngredient input2, IIngredient input3, IIngredient output);
```

## 削除
```zenscript
atomic.removeRecipe(IIngredient出力);
```