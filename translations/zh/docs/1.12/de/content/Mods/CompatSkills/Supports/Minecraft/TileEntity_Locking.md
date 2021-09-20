# Tile-Entity 锁定

## Tile-Entity 锁定

这个功能允许你锁定玩家和特定 Tile-Entity 交互的能力。

### Syntax:

    // Blank Example
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... locked);
    
    // Working Example
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");