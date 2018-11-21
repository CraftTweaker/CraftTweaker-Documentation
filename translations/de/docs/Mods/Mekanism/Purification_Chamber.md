# Purification Chamber

## Addition

```java
mods.mekanism.purification.addRecipe(IItemStack itemInput, @Optional IGasStack gasInput, IItemStack itemOutput)

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:charcoal>, <minecraft:coal>);
```

## Removal

```java
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput)

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.