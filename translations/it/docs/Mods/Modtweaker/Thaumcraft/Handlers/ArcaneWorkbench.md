# Banco Da Lavoro Arcano

Questo pacchetto consente di aggiungere e rimuovere ricette da/per il banco di lavoro Arcana.

## Importazione del pacchetto

È possibile [importare](/AdvancedFunctions/Import/) il pacchetto e i suoi metodi per facilitare il retrival dei metodi.

```zenscript
import mods.thaumcraft.ArcaneWorkbench;
```

## Aggiungere ricette

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(Nome string, String Research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods. haumcraft.ArcaneWorkbench. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String Research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[] input);
mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Rimozione ricette

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```