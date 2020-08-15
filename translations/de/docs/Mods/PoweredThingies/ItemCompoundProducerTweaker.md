# Powered Thingies :: Item Compound Erzeuger

### Importieren

```zenscript
importiere mods.poweredthingies.Tweaker.itemCompoundProducerTweaker als icp;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // <logKeys> Ausgabe auf gültige Schlüssel 
icp().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Beispiel

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.