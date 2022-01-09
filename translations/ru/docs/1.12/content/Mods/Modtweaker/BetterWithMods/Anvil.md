# Anvil

The Anvil is a simple 4x4 Crafting Table with the same options.  
**NOTE: Due to an old bug with ModTweaker, Anvil recipes are flipped diagonally (e.g., the dirt in the recipe below would be at the bottom left corner).** **This can be fixed by using the ShapedFixed versions - addShapedFixed and removeShapedFixed.**

## Shaped

### Сложение
```zenscript
mods.betterwithmods.Anvil.addShaped(IItemStack output, IIngredient[][] inputs);

mods.betterwithmods.Anvil.addShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:dirt>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]); // dirt is actually at bottom left in-game
```

### Removal
```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:dirt>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]); // dirt would actually be at bottom left in-game
```

### Addition (Fixed)
```zenscript
mods.betterwithmods.Anvil.addShapedFixed(IItemStack output, IIngredient[][] inputs);

mods.betterwithmods.Anvil.addShapedFixed(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:dirt>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]); // dirt is like the recipe says, at top right in-game
```

### Removal (Fixed)
```zenscript
mods.betterwithmods.Anvil.removeShapedFixed(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShapedFixed(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShapedFixed(<minecraft:dirt>,[
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:dirt>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]); // dirt would be like the recipe says, at top right in-game
```

## Shapeless

### Сложение
```zenscript
mods.betterwithmods.Anvil.addShapeless(IItemStack output, IIngredient[] inputs);

mods.betterwithmods.Anvil.addShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Removal
```zenscript
mods.betterwithmods.Anvil.removeShapeless(IItemStack output, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

## Clearing
You can clear all the recipes from the Anvil by using the following:
```zenscript
mods.betterwithmods.Anvil.removeAll();
```

