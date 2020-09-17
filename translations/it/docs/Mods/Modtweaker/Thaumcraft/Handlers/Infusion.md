# Infusione

Questo pacchetto consente di aggiungere e rimuovere ricette da/per l'Infusione.

## Importazione del pacchetto

È possibile [importare](/AdvancedFunctions/Import/) il pacchetto e i suoi metodi per facilitare il retrival dei metodi.

```zenscript
import mods.thaumcraft.Infusion;
```

## Aggiungere ricette

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(nome string, ricerca string, output IItemStack, int instabilità, aspetti CTAspectStack[], Ricetta IIngrediente centralItem, IIngredient[]);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Rimozione ricette

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(IItemStack output);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```