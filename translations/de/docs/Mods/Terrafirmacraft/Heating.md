# Heizung

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Heizung;
```

## Addition

```zenscript
Heating.addRecipe(String RegistryName, IItemStack Eingabe, IItemStack Ausgabe, float transformTemp, float maxTemp);
```
- transformTemp ist die Temperatur, bei der das Rezept den Eingang vollständig in den Ausgangsstapel.
- maxTemp ist die Temperatur bei der der Eingang zerstört wird. Überprüfen Sie [Heiztemperaturen](/Mods/Terrafirmacraft/HeatingTemperatures) für eine vollständige Referenz

## Entfernen

```zenscript
Heating.removeRecipe(IItemStack Ausgabe);
Heating.removeRecipe(String RegistryName);
```