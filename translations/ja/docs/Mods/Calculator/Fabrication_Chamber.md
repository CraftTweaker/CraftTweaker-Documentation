# Fabrication Chamber
## Not fully implimented, only takes one input.

## パッケージ
```zenscript
import mods.calculator.fabricationChamber;
```

## メソッド
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The outputs.


## 加算
```zenscript
fabricationChamber.addRecipe(IIngredient input, IIngredient output);
```

## 削除
```zenscript
fabricationChamber.removeRecipe(IIngredient input);
```