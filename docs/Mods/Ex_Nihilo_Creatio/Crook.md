# Crook

## Package

`mods.exnihilocreatio.Crook`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IItemStack](/Vanilla/Items/IItemStack/) reward** the item that has a chance to drop.
- **Float chance** chance between 0-1.
- **Float fortune chance** chance between 0-1.

## Addition

```zenscript
Crook.addRecipe(IIngredient, IItemStack, Float, Float);

Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Removal 

```zenscript
Crook.removeAll();
```