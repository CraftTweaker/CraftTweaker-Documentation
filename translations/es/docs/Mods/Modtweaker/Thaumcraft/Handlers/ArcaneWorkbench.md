# Banco de trabajo arcano

Este paquete le permite añadir y quitar recetas en/del Banco de Trabajo Arcano.

## Importando el paquete

Puede [importar](/AdvancedFunctions/Import/) el paquete y sus métodos para facilitar la recuperación de los métodos.

```zenscript
importar mods.thaumcraft.ArcaneWorkbench;
```

## Añadiendo recetas

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String research, int vis, CTAspectStack[] aspectList, ItemStack output, IIngredient[][] input);
mods. haumcraft.ArcaneWorkbench. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String research, int vis, CTAspectStack[] aspectList, ItemStack output, IIngredient[] input);
mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Eliminando recetas

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IIItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>
```