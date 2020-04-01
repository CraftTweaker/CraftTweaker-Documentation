# Animator

## Package
`moretweaker.betweenlands.Animator`

## Addition

```zenscript
//moretweaker.betweenlands.Animator.addRecipe(IItemStack input, int fuel, int life, IItemStack output);
moretweaker.betweenlands.Animator.addRecipe(<minecraft:coal>, 5, 6, <minecraft:diamond>);

//moretweaker.betweenlands.Animator.addRecipe(IItemStack input, int fuel, int life, String entity);
moretweaker.betweenlands.Animator.addRecipe(<minecraft:emerald>, 3, 10, "minecraft:villager");
```

## Removal

```zenscript
//moretweaker.betweenlands.Animator.removeRecipe(IIngredient output);
moretweaker.betweenlands.Animator.removeRecipe(<minecraft:diamond>);

//moretweaker.betweenlands.Animator.removeRecipe(String entityOutput);
moretweaker.betweenlands.Animator.removeRecipe("minecraft:villager");

moretweaker.betweenlands.Animator.removeAll();
```