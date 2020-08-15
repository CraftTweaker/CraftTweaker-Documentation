# Werkzeug Harvest-Level Sperren

## Merkmal:

Diese Sperre fügt die Fähigkeit für Paketautoren hinzu, Werkzeuge im Allgemeinen oder bestimmte Werkzeuge "Typen" hinter ihrem Erntewert zu sperren. Das bedeutet, dass du alle Spitzhacken mit einem Erntewert von "3" hinter einer Reihe von Anforderungen sperren kannst. Oder im Allgemeinen alle Werkzeuge mit einem Erntegrad von 3 hinter einer Reihe von Anforderungen!

## Syntax:

    mods.compatskills.HarvestLock.addToolLock(int level, String... erforderlich);
    mods.compatskills.HarvestLock.addToolLevelLock(String Typ, Int, String... erforderlich);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLock("pickaxe", 3, "dim|1");