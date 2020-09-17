# Perfusion

Ce paquet vous permet d'ajouter et de supprimer des recettes vers/de l'Infusion.

## Importation du paquet

Vous pouvez [importer](/AdvancedFunctions/Import/) le paquet et ses méthodes pour faciliter la récupération des méthodes.

```zenscript
Importer mods.thaumcraft.Infusion ;
```

## Ajout de recettes

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String research, IItemStack output, int instability, CTAspectStack[] aspects, IIngredient centralItem, IIngredient[] recipe);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Suppression des recettes

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.removeRecipe("recipeName");


//mods.thaumcraft.removeRecipe(IItemStack output);
mods.thaumcraft.removeRecipe(<thaumcraft:mirror_essentia>);
```