# Flawless Calculator

## Package

`mods.calculator.flawless`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The first input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The second input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input3** The third input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input4** The forth input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Addition

```zenscript
flawless.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient input4, IIngredient output);

flawless.addRecipe(<minecraft:dirt>, <minecraft:stone>, <minecraft:netherrack>, <minecraft:end_stone>, <minecraft:diamond>);
```

## Removal 

```zenscript
flawless.removeRecipe(IIngredient output);
```
