# LootTableTweaker

[LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) モジュールは、Loot テーブルを操作するための非常にシンプルな機能を追加することを目指しています。

## 削除しています

特定の戦利品テーブルとそのすべてのアイテムを削除します。

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

特定のテーブルから特定のプールを削除します。

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

特定のテーブルから特定のプールからspecialifc エントリを削除します。

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_hor_armor");
```

特定のテーブルから特定のプールから項目のすべてのインスタンスを削除します。

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

グローバルレベルで mod によって追加されたすべてのエントリを削除します。

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Mod によって追加された項目を含むすべての項目を削除します。

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Modによって追加されたすべてのテーブルを削除します。

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

すべての戦利品テーブルからアイテムを削除します。

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```