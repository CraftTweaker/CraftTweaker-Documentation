# Kühler

Der Coolant Manager gehört nicht zu einer bestimmten Maschine, sondern verwaltet Kühlmittelwerte für alle anderen Maschinen.  
Zum Beispiel verwendet der Enervation Dynamo die Kühlmittelwerte, ebenso wie der Magmatische Dynamo mit der Ientropischen Reservoir-Erweiterung.

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.Coolant;
```

## Kühlmittel hinzufügen

Verwende dies, um ein neues Kühlmittel für den Manager zu registrieren.  
CoolantRF muss nicht negativ sein, und der Kühlmittelfaktor muss zwischen 1 und 100 liegen (inklusiv).  
Wenn diese Bereiche nicht erfüllt sind, wird das Kühlmittel nicht registriert!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Dies sind zwei der Werte, die TE standardmäßig verwendet:
//mods. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```

## Kühlmittel entfernen

Benutzen Sie dies, um ein bestehendes Kühlmittel des Managers zu deregulieren.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack Fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```