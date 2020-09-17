# LootTableTweaker

La mod [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) mira ad aggiungere funzioni molto semplici per lavorare con le tabelle dei bottini.

## Rimozione delle cose

Rimuove una tabella di bottino specifica e tutte le sue voci.

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Rimuove un pool specifico da una tabella specifica.

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Rimuove una voce speciale da un pool specifico da una tabella specifica.

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Rimuove tutte le istanze di un elemento da un pool specifico da una tabella specifica.

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Rimuove tutte le voci aggiunte dalla mod a livello globale.

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Rimuove tutte le voci contenenti elementi aggiunti dalla mod.

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Rimuovi tutte le tabelle aggiunte da una mod.

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

Rimuove un oggetto da ogni tabella bottino.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```