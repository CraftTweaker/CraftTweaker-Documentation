# Établi des arcanes

Ce paquet vous permet d'ajouter et de supprimer des recettes vers/depuis l'Atelier des arcanes.

## Importation du paquet

Vous pouvez [importer](/AdvancedFunctions/Import/) le paquet et ses méthodes pour faciliter la récupération des méthodes.

```zenscript
Importer mods.thaumcraft.ArcaneWorkbench;
```

## Ajout de recettes

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods. Atelier des arcanes. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[] input);
mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Suppression des recettes

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```