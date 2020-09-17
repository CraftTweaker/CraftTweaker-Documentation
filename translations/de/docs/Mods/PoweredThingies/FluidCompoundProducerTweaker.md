# Powered Thingies :: Flüssiger Compound Produzent

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.fluidCompoundTweaker als fct;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // <logKeys> Ausgabe auf gültige Schlüssel
fct().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Beispiel

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.