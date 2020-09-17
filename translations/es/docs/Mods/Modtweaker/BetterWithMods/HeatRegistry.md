# Registro de calor

El Registro de Calor permite asignar un valor entero a un bloque que interactúa con el Caldero, el Crisol y el Horno.

* Default Values: Vanilla fire | 1 Stoked Fire | 2

# Añadir una fuente de calor

```zenscript
//stack debe tener un estado de bloque asociado.
mods.betterwithmods.HeatRegistry.addHeatSource(ItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```