# Zablokowanie Tile-Entity

## Blokady Tile-Entity

Ta funkcja pozwala zablokować możliwość interakcji graczy z konkretnymi obiektami kafelkowymi.

### Składnia:

    // Pusty przykład
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... zablokowane);
    
    // Praca
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");