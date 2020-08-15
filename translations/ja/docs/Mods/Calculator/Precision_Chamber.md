# Precision Chamber

## パッケージ
```zenscript
import mods.calculator.precisionChamber;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 加算
```zenscript
precisionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## 削除
```zenscript
precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```