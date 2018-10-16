# Chemical Injection Chamber

## Addition

```java
mods.mekanism.chemical.injection.addRecipe(IItemStack inputStack, IGasStack inputGas, IItemStack outputStack)

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

NOTE: valid inputGas might be restricted to just sulfuric acid, water, or hydrogen chloride

## Removal

```java
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas)

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreBlock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.