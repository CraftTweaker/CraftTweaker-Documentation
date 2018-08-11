# 空间 IO

### 导入

```
import mods.appliedenergistics2.Spatial;
```

### 添加

将一个方块实体添加到空间 IO 的白名单中。

警告：对于某些方块实体，特别是多方块结构在移至空间 IO 中可能出现意料之外的错误甚至崩溃。整合包作者应该全面的测试任何添加至空间 IO 白名单中的方块。

```
Spatial.whitelistEntity(String fullEntityClassName);
//fullEntityClassName 完整的方块实体名称

//将实用拓展的小型板条箱添加至空间 IO 的白名单
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```
