# LootTableTweaker

Мод [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) намерен добавить очень простые функции для работы с таблицами добычи.

## Удаление вещей

Удаляет определённую таблицу добычи и все ее записи.

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Удаляет определенный пул из конкретной таблицы.

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Удаляет конкретную запись из определенного пула из конкретной таблицы.

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Удаляет все экземпляры элемента из определенного пула из конкретной таблицы.

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Удаляет все записи, добавленные модом на глобальном уровне.

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Удаляет все записи, содержащие элементы, добавленные модом.

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("изменять");
```

Удалить все таблицы, добавленные модом.

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("изменять");
```

Удаляет предмет из каждой таблицы.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```