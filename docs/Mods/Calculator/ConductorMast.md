# Conductor Mast

## Package

`mods.calculator.conductorMast`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **Int power cost** The cost per process.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Addition

```zenscript
conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);

conductorMast.addRecipe(<minecraft:stone>, 5000, <minecraft:diamond>);
```

## Removal 

```zenscript
conductorMast.removeRecipe(IIngredient output);
```
