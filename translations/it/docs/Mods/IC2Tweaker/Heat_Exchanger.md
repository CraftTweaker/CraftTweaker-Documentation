# Scambiatore Di Calore

## Pacchetto

`import mods.ic2.HeatExchanger;`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il liquido dopo che è stato riscaldato su/raffreddato
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** Il liquido prima di essere riscaldato / raffreddato
- **int heat** The heat required to heat the fluid or gained by cooling it down

In alternativa puoi usare gli oggetti [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) invece degli oggetti [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

## Aggiungi Fluido Freddo Giù

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Aggiungi Riscaldamento Fluido Su

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```