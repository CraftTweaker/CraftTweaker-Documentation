# LootTableTweaker

The [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) mod aims to add very simple functions for working with loot tables.

## Removing things

Removes a specific loot table and all it's entries.

```java
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Removes a specific pool from a specific table.

```java
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Removes a speciifc entry from a specific pool from a specific table.

```java
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Removes all instances of an item from a specific pool from a specific table.

```java
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Removes all entries added by the mod on a global level.

```java
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Removes all entries containing items added by the mod.

```java
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Remove all tables added by a mod.

```java
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

Removes an item from every loot table.

```java
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```