# Conductor Mast

## パッケージ
```zenscript
import mods.calculator.conductorMast;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int powercost** The cost of power per process.

## Additon
```zenscript
conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
```

## 削除
```zenscript
conductorMast.removeRecipe(IIngredient output);
```