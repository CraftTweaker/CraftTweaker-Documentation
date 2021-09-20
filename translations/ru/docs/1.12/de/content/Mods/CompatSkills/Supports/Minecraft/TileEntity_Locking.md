# Tile-Entity Locking

## Tile-Entity Locks

This features allows you to lock the ability for players to interact with specific Tile-Entities.

### Syntax:

    // Blank Example
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... locked);
    
    // Working Example
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");