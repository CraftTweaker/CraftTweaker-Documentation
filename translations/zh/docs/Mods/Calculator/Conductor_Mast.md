# Conductor Mast

## 所属包名
```zenscript
import mods.calculator.conductorMast;
```

## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int powercost** The cost of power per process.

## Additon
```zenscript
conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
```

## 移除
```zenscript
conductorMast.removeRecipe(IIngredient output);
```