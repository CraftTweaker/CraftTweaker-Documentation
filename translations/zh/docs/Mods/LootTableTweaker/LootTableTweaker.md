# LootTableTweaker

[LootTableTinventer](https://minecraft.curseforge.com/projects/loottabletweaker) mod，旨在添加非常简单的功能来处理掠夺表。

## 移除内容

删除一个特定的战利品表及其所有条目。

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

从特定表中删除一个特定池。

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

从特定数据库中从特定数据库中删除一个物种条目。

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String poor, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

从特定表中移除特定资源库中的所有项目实例。

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem(“minecraft:chests/simpl_dungeon”, "main", "minecraft:golden_apple");
```

移除由模组在全局一级添加的所有条目。

```zenscript
// mods.ltt.LootTable.removeModEntry(String moded);
mods.ltt.LootTable.removeModEntry("modd");
```

移除所有包含由Mod添加的项目的条目。

```zenscript
// mods.ltt.LootTable.removeModItem(修改)；
mods.ltt.LootTable.removeModItem("修改")；
```

移除所有由 mod 添加的表。

```zenscript
// mods.ltt.LootTable.removeModTable(String moded);
mods.ltt.LootTable.removeModTable("modd");
```

从每个战利品表中删除一个项目。

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem(“minecraft:iron_ingot”);
```