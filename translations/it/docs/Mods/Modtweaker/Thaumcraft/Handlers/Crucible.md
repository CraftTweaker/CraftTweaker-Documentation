# Crogiolo

Questo pacchetto ti permette di aggiungere e rimuovere ricette da/per il Crogiolo.

## Importazione del pacchetto

È possibile [importare](/AdvancedFunctions/Import/) il pacchetto e i suoi metodi per facilitare il retrival dei metodi.

```zenscript
import mods.thaumcraft.Crucible;
```

## Aggiungere ricette

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(Nome string, String researchKey, IItemStack output, IIngredient input, CTAspectStack[] aspects);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Rimozione ricette

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(IItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```