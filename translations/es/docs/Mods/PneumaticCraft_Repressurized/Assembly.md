# Sistema de ensamblado robótico

El Sistema de Colmena Robótica es un bloque múltiple compuesto por el Controlador de Colmena, Unidades de E/S de Colmena, Plataforma de Colmena, Láser de Colmena y Taller de Colmena. Convierte elementos de entrada en elementos de salida usando el láser y/o el taladro.

Existen varias funciones para añadir y eliminar recetas, dependiendo de si la receta requiere el uso del láser, el taladro o ambas.

## Llamando

Puedes llamar al paquete de Colmena usando `mods.pneumaticcraft.assembly`.

## Eliminando

Estas funciones eliminan la primera receta que encuentran con la salida [ItemStack](/Vanilla/Items/IItemStack/) `dada`:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Estas funciones eliminan *todas las recetas* actualmente definidas para el Sistema de Colmena:

```zenscript
mods.pneumaticcraft.ensambly.removeAllLaserRecipes();
mods.pneumaticcraft.assemblbly.removeAllDrillRecipes();
mods.pneumaticcraft.assemblbly.removeAllDrillLaserRecipes();
```

## Agregando

Estas funciones se utilizan para añadir nuevas recetas para el sistema de ensamblado:

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```