# Horno Explosivo

## Paquete

`importar mods.ic2.BlastFurnace;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int totalFluidCost** Per-tick IC2 liquefied air cost, measured in mB/tick
- **int time** Total time cost, measured in ticks

## Adicional

```zenscript
mods.ic2.BlastFurnace.addRecipe(ItemStack[] salidas, entrada IIngrediente, int totalFluidCost, tiempo de intención);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Eliminar

Por ahora, simplemente elimine la línea correspondiente en `config/ic2/blast_furnace.ini`.