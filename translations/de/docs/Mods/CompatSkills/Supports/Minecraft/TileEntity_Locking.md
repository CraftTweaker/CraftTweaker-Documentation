# Tile-Entity Sperren

## Tile-Entity Sperren

Mit diesen Funktionen kannst du die Fähigkeit von Spielern sperren, mit bestimmten Tile-Entities zu interagieren.

### Syntax:

    // Leeres Beispiel
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... gesperrt);
    
    // Arbeitsbeispiel
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");