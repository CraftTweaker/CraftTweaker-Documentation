# Atomic Calculator

## Package

`mods.calculator.atomic`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The second input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The third input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Addition

```zenscript
atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);

atomic.addRecipe(<minecraft:dirt>, <minecraft:stone>, <minecraft:cobblestone>, <minecraft:diamond>);
```

## Removal 

```zenscript
atomic.removeRecipe(IIngredient output);
```
