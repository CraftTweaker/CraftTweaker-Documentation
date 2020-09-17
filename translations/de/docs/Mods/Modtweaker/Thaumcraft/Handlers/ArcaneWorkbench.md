# Arkane Werkbank

Dieses Paket erlaubt es Ihnen, Rezepte zu oder von der Arkane Workbench hinzuzufügen und zu entfernen.

## Dieses Paket importieren

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
importieren mods.thaumcraft.ArcaneWorkbench;
```

## Rezepte hinzufügen

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String Research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods. haumcraft.ArcaneWorkbench. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:ignis> , <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//Mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String Research, int vis, CTAspectStack[] aspectList, IItemStack Output, IIngredient[] Eingabe);
Mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Entfernen von Rezepten

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```