# Thermionic Fabricator

ModTweaker allows you to add or remove forestry Thermionic Fabricator Recipes

## Calling
You can call the  package using `mods.forestry.ThermionicFabricator`

## Recipe/Cast Removal

```JAVA
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```


## Recipe/Cast Addition

```JAVA
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[][] ingredients, int fluidInput, @Optional IItemStack plan);
mods.forestry.ThermionicFabricator.addCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], 200);
mods.forestry.ThermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], 144, <forestry:wax_cast>);
```


## Smelting Removal
```JAVA
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Smelting Addition
```JAVA
//mods.forestry.ThermionicFabricator.addSmelting(int fluidOutput, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(120, <minecraft:stone>, 500);
```