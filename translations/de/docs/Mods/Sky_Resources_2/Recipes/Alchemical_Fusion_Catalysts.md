# Alchemistische Fusionskatalysatoren

Das *Katalysatorpaket* wird zum Hinzufügen oder Entfernen von Katalysatoren für die Alchemistische Fusion verwendet.

## Anruf

Sie können das *catalysts* Paket mit `mods.skyresources.catalysts aufrufen`

## Katalysator Hinzufügen

```zenscript
//mods.skyresources.catalysts.add(IItemStack stack, float value);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## Katalysatorentnahme

```zenscript
//mods.skyresources.catalysts.remove(IItemStack output);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```