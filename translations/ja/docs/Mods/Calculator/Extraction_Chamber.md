# Extraction Chamber

## パッケージ
```zenscript
import mods.calculator.extractionChamber;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## 加算
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## 削除
```zenscript
extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```