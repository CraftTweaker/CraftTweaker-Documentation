# Powered Thingies :: Powered Ofen

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.poweredKilnTweaker als pkt;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // überprüfen <logKeys> die Ausgabe auf gültige Schlüssel
pkt().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Beispiel

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.