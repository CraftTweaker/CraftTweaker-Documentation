# Tile-Entity 锁定

## Tile-Entity 锁定

这个功能允许你锁定玩家和特定 Tile-Entity 交互的能力。

### 语法：

    // 原型
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... locked);
    
    // 示例
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");