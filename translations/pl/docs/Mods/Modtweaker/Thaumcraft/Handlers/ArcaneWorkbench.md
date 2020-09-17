# Tajemny Stół Warsztatowy

Ten pakiet pozwala na dodawanie i usuwanie przepisów do/z Tajemnego Stole Warsztatów.

## Importowanie pakietu

Możesz [zaimportować](/AdvancedFunctions/Import/) paczkę i jej metody, aby ułatwić ponowne triwalowanie metod.

```zenscript
importuj mods.thaumcraft.ArcaneWorkbench;
```

## Dodawanie przepisów

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(nazwa ciągu, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods. haumcraft.ArcaneWorkstoch. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mody. haumcraft.ArcaneWorkbench.registerShapelessRecipe(Nazwa ciągu, String research int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[]);
mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Usuwanie przepisów

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(nazwa ciągu);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(wyjście IItemStack);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```