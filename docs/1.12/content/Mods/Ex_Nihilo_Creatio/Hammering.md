# Hammering

## Package
```zenscript
`mods.exnihilocreatio.Hammer`
```

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The block that needs to be broken.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The item the block drops when broken.
- **Int tool level** tool level for breaking the block.
- **Float chance** chance between 0-1.
- **Float fortune chance** chance between 0-1.

## Addition

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Removal 

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
