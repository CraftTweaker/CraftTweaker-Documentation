# Powered Thingies :: Pulvermacher

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.powderMakerTweaker als pmt;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // überprüfen <logKeys> die Ausgabe auf gültige Schlüssel
pmt().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Beispiel

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.