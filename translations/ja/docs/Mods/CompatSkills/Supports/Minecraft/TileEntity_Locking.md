# タイルエンティティロック

## タイルエンティティロック

この機能により、プレイヤーが特定のタイルエンティティと対話できるようにロックすることができます。

### 構文

    // Blank Example
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... locked);
    
    // 作業例
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");