# LoadedMods

Sie können das [globale Schlüsselwort](/Vanilla/Global_Functions/) `loadedMods` verwenden, um auf alle aktuell geladenen Mods zuzugreifen.  
Falls nötig, können Sie die Klasse mit `importieren Crafttweaker.mods.ILoadedMods;`

## Überprüfe, ob ein Mod geladen ist

Benutzen Sie die Funktion `in` um zu überprüfen, ob eine Mod geladen wurde;  
Sie können auch die `enthält` Methode:

```zenscript
//if MinecraftCoderPack is loaded
if(loadedMods in "mcp"){
    print("success!");
}

//if MinecraftCoderPack is loaded
if(loadedMods.contains("mcp")){
    print("success!!!");
}
```

## Einen bestimmten Mod abrufen

Du kannst eine bestimmte Mod als IMod abrufen, solange du die ID hast

```zenscript
//ruft die minecraftCoderPack Mod
val mod = loadedMods["mcp"];
```

## Iterieren durch die ModList

Du kannst durch die Liste der geladenen Mods wie folgt iterieren:

```zenscript
//Gibt alle registrierten Artikeldefinitionen aus, die nicht in größeren Paketen empfohlen werden!
//Die Mod-Variable wird ein IMod Typ
für Mod in loadedMods {
    print(mod. Name ~ ":");
    für Artikel in Mod. tems {
        print("\t\t" ~ item. isplayName);
    }
}
```

# IMod

Das IMod Interface bietet Ihnen einige allgemeine Informationen zu einem bestimmten Mod.  
Falls nötig, kann es mit `import craftweaker.mods.IMod;` importiert werden

| ZenGetter    | Was macht es                                              | Rückgabetyp                                | Auslastung        |
| ------------ | --------------------------------------------------------- | ------------------------------------------ | ----------------- |
| id           | Gibt die Mod-Id zurück                                    | string                                     | `mod.id`          |
| name         | Gibt den internen Namen des Mods zurück                   | string                                     | `mod.name`        |
| version      | Gibt die Version des Mods zurück                          | string                                     | `mod.version`     |
| beschreibung | Gibt die Mod-Beschreibung zurück                          | string                                     | `mod.description` |
| gegenstände  | Gibt alle Elemente zurück, die vom Mod hinzugefügt wurden | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |