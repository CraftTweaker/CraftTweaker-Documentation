# Fabricateur Thermionique

ModTweaker vous permet d'ajouter ou de supprimer des recettes de Fabricateurs Thermioniques de foresterie

## Appel en cours

Vous pouvez appeler le paquet en utilisant `mods.forestry.ThermionicFabricator`

## Recette / Suppression du casting

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Complément de recettes/distribution

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[][] ingredients, ILiquidStack liquidStack, @Optional IItemStack plan);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.foresttry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Suppression de la fonte

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Ajout de fusion

Vous pouvez ajouter tous les liquides du jeu en raison de la fonderie, mais actuellement seulement `<liquid:glass>` est recommandé en raison de bugs survenant avec d'autres liquides.

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```