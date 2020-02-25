# Basic

## Package

`mods.calculator.basic`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The second input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Addition

```zenscript
basic.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);

basic.addRecipe(<minecraft:dirt>, <minecraft:stone>, <minecraft:diamond>);
```

## Removal 

```zenscript
basic.removeRecipe(IIngredient output);
```
