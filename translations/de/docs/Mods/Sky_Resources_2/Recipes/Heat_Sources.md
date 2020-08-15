# Wärmequellen

Das *Heizquellen* Paket wird zum Hinzufügen oder Entfernen von Wärmequellen für bestimmte Maschinen/Prozesse verwendet.

**Hinweis: Diese Funktionen funktionieren nur für Artikel, die eine Blockform haben!**

## Anruf

Sie können das *Hitzelquellen* Paket mit `mods.skyresources.heatsources` aufrufen

## Hitzequelle Zusatz

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Wärmequelle entfernen

```zenscript
//mods.skyresources.heatsources.remove(IItemStack output);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```