# 精密チャンバー

## パッケージ
```zenscript
import mods.calculator.precisionChamber;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** outputs.

## 加算
```zenscript
precisionChamber.addRecipe(IIngredient入力, IIngredient出力1, IIngredient出力2);
```

## 削除
```zenscript
precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```