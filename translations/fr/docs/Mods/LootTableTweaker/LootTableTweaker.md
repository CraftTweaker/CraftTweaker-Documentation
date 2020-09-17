# LootTableTweaker

Le mod [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) vise à ajouter des fonctions très simples pour travailler avec des tables de butin.

## Suppression des choses

Supprime une table de butin spécifique et toutes ses entrées.

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Supprime un pool spécifique d'une table spécifique.

```zenscript
// mods.ltt.LootTable.removePool(String table, String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Supprime une entrée spécifique d'un pool spécifique d'une table spécifique.

```zenscript
// mods.ltt.LootTable.removeEntry(String table, String pool, String entry);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Supprime toutes les instances d'un élément d'un pool spécifique d'une table spécifique.

```zenscript
//mods.ltt.LootTable.removeItem(String table, String pool, String entry);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Supprime toutes les entrées ajoutées par le mod au niveau global.

```zenscript
// mods.ltt.LootTable.removeModEntry(String modid);
mods.ltt.LootTable.removeModEntry("modid");
```

Supprime toutes les entrées contenant des éléments ajoutés par le mod.

```zenscript
// mods.ltt.LootTable.removeModItem(String modid);
mods.ltt.LootTable.removeModItem("modid");
```

Supprime toutes les tables ajoutées par un mod.

```zenscript
// mods.ltt.LootTable.removeModTable(String modid);
mods.ltt.LootTable.removeModTable("modid");
```

Supprime un objet de chaque table de butin.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```