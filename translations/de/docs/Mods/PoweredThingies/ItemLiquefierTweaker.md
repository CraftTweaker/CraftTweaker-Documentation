# Powered Thingies :: Item Liker

### Importieren

```zenscript
importiere mods.poweredthingies.Tweaker.itemLiquefierTweaker als ilt;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // überprüfen <logKeys> die Ausgabe auf gültige Schlüssel
ilt().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Beispiel

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.