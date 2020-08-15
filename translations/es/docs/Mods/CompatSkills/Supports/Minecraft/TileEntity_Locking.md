# Bloqueo de Tiles-Entidad

## Bloqueos de Tile-Entity

Esta característica te permite bloquear la habilidad de los jugadores de interactuar con determinadas entidades de azulejos.

### Sintaxis:

    // Ejemplo en blanco
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... bloqueada);
    
    // Ejemplo de trabajo
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");