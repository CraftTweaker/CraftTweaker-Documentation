# Échangeur de chaleur

## Paquet

`Importer mods.ic2.HeatExchanger;`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le liquide après avoir été chauffé/refroidi
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** Le liquide avant qu'il ne soit chauffé/refroidi
- **int de chaleur** La chaleur requise pour chauffer le fluide ou gagné en le refroidissant vers le bas

Vous pouvez également utiliser les objets [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) au lieu des objets [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

## Ajouter un refroidissement fluide vers le bas

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Ajouter une chaleur fluide vers le haut

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```