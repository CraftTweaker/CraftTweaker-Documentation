# Extraction Chamber

## Package

`mods.calculator.extractionChamber`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output2** The second output.

## Addition

```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);

extractionChamber.addRecipe(minecraft:stone>, <minecraft:diamond>, <minecraft:cobblestone>);
```

## Removal 

```zenscript
extractionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```
