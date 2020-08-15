# Creusable

Ce paquet vous permet d'ajouter et de supprimer des recettes vers/depuis le Crucible.

## Importation du paquet

Vous pouvez [importer](/AdvancedFunctions/Import/) le paquet et ses méthodes pour faciliter la récupération des méthodes.

```zenscript
Importer mods.thaumcraft.Crucible;
```

## Ajout de recettes

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, IItemStack output, IIngredient input, CTAspectStack[] aspects);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Suppression des recettes

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(IItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```