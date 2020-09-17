# Powered Thingies :: Flüssiger Brenner :: Brennstoff

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker als Brennstoff;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
fuel().logKeys()
fuel().removeRecipe('liquid:fluid_lava') // überprüfen <logKeys> die Ausgabe auf gültige Schlüssel
fuel().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addFuel(Flüssigkeit: ILiquidStack, Ticks: Int)
```

`Ticks` repräsentiert die Anzahl der Ticks, für die der angegebene Brennstoff brennt.

##### Beispiel

```zenscript
kraftstoff().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.