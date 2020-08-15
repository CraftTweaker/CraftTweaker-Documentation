# Tygiel

Ten pakiet pozwala na dodawanie i usuwanie przepisów do/z tygielu.

## Importowanie pakietu

Możesz [zaimportować](/AdvancedFunctions/Import/) paczkę i jej metody, aby ułatwić ponowne triwalowanie metod.

```zenscript
importuj mods.thaumcraft.Crucible;
```

## Dodawanie przepisów

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(Nazwa ciągu, Klucz Badań Stringu, wyjście IItemStack, Wejście IIngredient, CTAspectStack[] aspekty);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Usuwanie przepisów

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(nazwa ciągu);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(wyjście IItemStack);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```