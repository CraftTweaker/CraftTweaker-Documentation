# Powered Thingies :: Compound Maker

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.compoundTweaker als ct;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // die <logKeys> Ausgabe auf gültige Schlüssel
ct().clear() überprüfen
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(Ausgabe: IItemStack, links: ILiquidStack?, oben: Array<IItemStack>?, rechts: ILiquidStack?, unten: Array<IItemStack>?)
```

##### Beispiel

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.