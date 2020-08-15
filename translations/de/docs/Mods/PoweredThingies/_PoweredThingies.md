# Powered Thingies

Powered Thingies's nicht-landwirtschaftliche Maschinen CraftTweaker Unterstützung.

### Mod Info

Curseforge: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Webseite: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### CT-Integrationsmethoden

Alle in CT integrierten Maschinen unterstützen diese Methoden:

```zenscript
XYZ.clear() // löscht die gesamte Rezeptregistrierung
XYZ.logKeys() // liefert alle Schlüssel in dieser Registry an das Protokoll von CT
XYZ. emoveRecipe(key: String)) // wird das Rezept mit diesem Schlüssel aus der Registry
XYZ.addRecipe(...) // fügt ein neues Rezept hinzu
```

Um die `Tweaker` Klasse für jede Maschine zu erhalten, müssen Sie die statische `mods.poweredthingies.Tweaker` Klasse verwenden.