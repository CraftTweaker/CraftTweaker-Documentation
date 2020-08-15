# Blocco Tile-Entity

## Blocchi Tile-Entity

Questa funzionalità consente di bloccare la possibilità per i giocatori di interagire con specifiche Tile-Entities.

### Sintassi:

    // Esempio vuoto
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... bloccato);
    
    // Esempio di lavoro
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense<unk> 5");