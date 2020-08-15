# Powered Thingies :: Flüssiger Brenner :: Kühlend

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker als coolant;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // die <logKeys> Ausgabe auf gültige Schlüssel
coolant().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addCoolant(Flüssigkeit: ILiquidStack, ZeitMultiplier: Float)
```

`TimeMultiplikator` ist der Wert, der verwendet wird, um die Anzahl der Ticks, für die ein Brennstoff brennt, zu erhöhen (oder zu senken).

##### Beispiel

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.