# Calculator Machines

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-4]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Basic Calculator

```zenscript
mods.calculator.basic.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);
mods.calculator.basic.removeRecipe(IIngredient output);
```
or 
```zenscript
import mods.calculator.basic;

basic.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);
basic.removeRecipe(IIngredient output);
```

## Scientific Calculator

```zenscript
mods.calculator.scientific.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);
mods.calculator.scientific.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.scientific;

scientific.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);
scientific.removeRecipe(IIngredient output);
```

## Atomic Calculator

```zenscript
mods.calculator.atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
mods.calculator.atomic.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.atomic;

atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
atomic.removeRecipe(IIngredient output);
```

## Flawless Calculator

```zenscript
mods.calculator.flawless.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient input4, IIngredient output);
mods.calculator.flawless.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.flawless;

flawless.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient input4, IIngredient output);
flawless.removeRecipe(IIngredient output);
```