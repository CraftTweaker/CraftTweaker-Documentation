# Infuzja

Ten pakiet pozwala na dodawanie i usuwanie przepisów do/z Infuzji.

## Importowanie pakietu

Możesz [zaimportować](/AdvancedFunctions/Import/) paczkę i jej metody, aby ułatwić ponowne triwalowanie metod.

```zenscript
import mods.thaumcraft.Infusion,
```

## Dodawanie przepisów

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(Nazwa ciągu, badania stringu, wyjście IItemStack, niestabilność int, CTAspectStack[] aspects, IIngredient centralItem, IIngredient[] przepis);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Usuwanie przepisów

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(nazwa ciągu);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(wyjście IItemStack);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```