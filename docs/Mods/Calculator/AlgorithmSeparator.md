# Algorithm Separator

## Package

`mods.calculator.algorithmSeparator`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output1** The first output.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output2** The second output.

## Addition

```zenscript
algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);

algorithmSeparator.addRecipe(<minecraft:stone>, <minecraft:diamond>, <minecraft:cobblestone>);
```

## Removal 

```zenscript
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```
