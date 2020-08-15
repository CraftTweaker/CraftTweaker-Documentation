# Crisol

Este paquete te permite añadir y quitar recetas para/de la Crucible.

## Importando el paquete

Puede [importar](/AdvancedFunctions/Import/) el paquete y sus métodos para facilitar la recuperación de los métodos.

```zenscript
importar mods.thaumcraft.Crucible;
```

## Añadiendo recetas

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, ItemStack output, IIngredient input, CTAspectStack[] aspectos);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Eliminando recetas

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(ItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```