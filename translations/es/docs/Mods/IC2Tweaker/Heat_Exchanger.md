# Intercambiador de calor

## Paquete

`importar mods.ic2.HeatExchanger;`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) salida** El líquido después de que haya sido calentado/enfriado
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** El líquido antes de que haya sido calentado/enfriado
- **calor intacto** El calor necesario para calentar el fluido o ganar enfriándolo

También puede usar objetos [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) en lugar de los objetos [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

## Añadir herramienta de fluido abajo

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(salida ILiquidStack, entrada ILiquidStack, calor interno);
mods.ic2.HeatExchanger.addFluidCoolDown(salida ILiquidDefinition ILiquidDefinition entrada, calor interno);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Añadir calor fluido arriba

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(salida ILiquidStack, entrada ILiquidStack, calor interno);
mods.ic2.HeatExchanger.addFluidHeatUp(salida ILiquidDefinition ILiquidDefinition entrada, calor interno);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```