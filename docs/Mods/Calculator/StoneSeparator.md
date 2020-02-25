# Stone Separator

## Package

`mods.calculator.stoneSeparator`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output1** The first output.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output2** The second output.

## Addition

```zenscript
stoneSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);

stoneSeparator.addRecipe(<minecraft:stone>, <minecraft:diamond>, <minecraft:cobblestone>);
```

## Removal 

```zenscript
stoneSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```
