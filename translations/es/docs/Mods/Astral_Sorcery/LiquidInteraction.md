# Interacción líquida

El paquete de líquido Interacción se utiliza para agregar interacciones líquidas (como lava y luces estrelladas líquidas) a AS chalices.

## Importando el paquete

Si quieres importar el paquete, aquí vas:

```zenscript
importar mods.astralsorcery.LiquidInteraction;
```

## Eliminar interacción

Esta función elimina la primera receta que encuentra que utiliza los [líquidos](/Vanilla/Liquids/ILiquidStack/) dados y devuelve la [pila](/Vanilla/Items/IItemStack/)de salida dada.  
Si omite la salida, removerá la primera receta que utilice los dos líquidos dados independientemente de su salida.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional ItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Añadir receta

Añade una interacción líquida a las interacciones de chalice

[FluidStack](/Vanilla/Liquids/ILiquidStack/) cuenta como la cantidad de líquido que se consumirá si se produce una interacción.  
oportunidad 1 y oportunidad 2 definen las posibilidades de que los fluidos de entrada 1 e input2 se consuman respectivamente.  
el peso determina las probabilidades de que esto se seleccione en comparación con las otras interacciones de líquido registradas en un par determinado de fluidos

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, ItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>
```