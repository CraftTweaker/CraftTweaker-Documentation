# LootTableTweaker

Der [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) mod zielt darauf ab, sehr einfache Funktionen für das Arbeiten mit Beutetischen hinzuzufügen.

## Entfernen

Entfernt einen bestimmten Beutetisch und all seine Einträge.

```zenscript
// mods.ltt.LootTable.removeTable(Streichtabel);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Entfernt einen bestimmten Pool aus einer bestimmten Tabelle.

```zenscript
// mods.ltt.LootTable.removePool(Streichtisch, Streich-Pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Entfernt einen spezifizierten Eintrag aus einem bestimmten Pool aus einer bestimmten Tabelle.

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Entfernt alle Instanzen eines Elements aus einem bestimmten Pool aus einer bestimmten Tabelle.

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Entfernt alle von der Mod hinzugefügten Einträge auf globaler Ebene.

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Entfernt alle Einträge, die vom Mod hinzugefügt wurden.

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Entferne alle Tabellen, die von einem Mod hinzugefügt wurden.

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

Entfernt einen Gegenstand von jedem Beute Tisch.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```