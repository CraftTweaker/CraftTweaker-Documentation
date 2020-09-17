# Infusión

Este paquete te permite añadir y eliminar recetas para/de la infusión.

## Importando el paquete

Puede [importar](/AdvancedFunctions/Import/) el paquete y sus métodos para facilitar la recuperación de los métodos.

```zenscript
importar mods.thaumcraft.Infusion;
```

## Añadiendo recetas

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String research, ItemStack output, int inestability, CTAspectStack[] aspectos, IIngredient centralItem, IIngredient[] receta);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Eliminando recetas

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(salida IItemStack);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```