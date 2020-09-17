# Powered Thingies :: Verbrennungsanlage

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker.incineratorTweaker wie it;
```

### Schlüssel auflisten, Rezepte nach Schlüssel entfernen, Clearing

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // die <logKeys> Ausgabe auf gültige Schlüssel überprüfen
it().clear()
```

### Rezept hinzufügen

##### Signatur

```zenscript
addRecipe(Eingabe: IItemStack, Kraft: lang, Ausgabe: Array<WeightedItemStack>)
```

`Leistung` repräsentiert die Gesamtzahl der Leistungseinheiten (RF, T oder FE), die das Eingabeelement generieren wird.

##### Beispiel

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Notizen

Alle diese Aktionen werden zwischengespeichert und ausgeführt, nachdem die Standard-Registry für diese Maschine alle Rezepte (einschließlich der von den benutzerdefinierten Jsons) registriert hat.