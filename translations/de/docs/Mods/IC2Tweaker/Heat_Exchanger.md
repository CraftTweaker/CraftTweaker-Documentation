# Wärmetauscher

## Paket

`importieren mods.ic2.HeatExchanger;`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Die Flüssigkeit nachdem sie aufgeheizt/gekühlt wurde
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Input** Die Flüssigkeit bevor sie aufgeheizt/abgekühlt wurde
- **Int Wärme** Die Wärme, die benötigt wird, um das Flüssigkeit zu erhitzen oder durch Abkühlen gewonnen

Alternativ können Sie [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) Objekte anstelle der [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Objekte verwenden.

## Fluid Cool Down hinzufügen

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Füge Flüssigwärme hinzu

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```