# LootTableTweaker

El mod [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) pretende añadir funciones muy simples para trabajar con las tablas de botín.

## Eliminando cosas

Elimina una tabla de lot específica y todas sus entradas.

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Elimina una piscina específica de una mesa específica.

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Elimina una entrada específica de una piscina específica de una mesa específica.

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Elimina todas las instancias de un elemento de una piscina específica de una mesa específica.

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Elimina todas las entradas añadidas por el mod a nivel global.

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Elimina todas las entradas que contengan elementos añadidos por el mod.

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Elimina todas las tablas añadidas por un mod.

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

Elimina un elemento de cada tabla de arranque.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```