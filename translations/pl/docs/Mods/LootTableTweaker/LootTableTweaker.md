# LootTableTweaker

Modyfikacja [LootTableTweaker](https://minecraft.curseforge.com/projects/loottabletweaker) ma na celu dodanie bardzo prostych funkcji do pracy z tabelami łupek.

## Usuwanie rzeczy

Usuwa konkretny tabelę łupów i wszystkie jego wpisy.

```zenscript
// mods.ltt.LootTable.removeTable(String table);
mods.ltt.LootTable.removeTable("minecraft:chests/simple_dungeon");
```

Usuwa określoną pulę z konkretnej tabeli.

```zenscript
// mods.ltt.LootTable.removePool(String table String pool);
mods.ltt.LootTable.removePool("minecraft:chests/simple_dungeon", "main");
```

Usuwa konkretny wpis z konkretnej puli z konkretnej tabeli.

```zenscript
// mods.ltt.LootTable.removeEntry(tabela string, string pool, wpis String);
mods.ltt.LootTable.removeEntry("minecraft:chests/simple_dungeon", "main", "minecraft:iron_horse_armor");
```

Usuwa wszystkie przypadki elementu z określonej puli z konkretnej tabeli.

```zenscript
//mods.ltt.LootTable.removeItem(tabela ciągu, pula ciągów, wpis ciągów);
mods.ltt.LootTable.removeItem("minecraft:chests/simple_dungeon", "main", "minecraft:golden_apple");
```

Usuwa wszystkie wpisy dodane przez modyfikację na poziomie globalnym.

```zenscript
// mods.ltt.LootTable.removeModEntry(Modid string);
mods.ltt.LootTable.removeModEntry("modid");
```

Usuwa wszystkie wpisy zawierające elementy dodane przez moda.

```zenscript
// mods.ltt.LootTable.removeModItem(Modid string);
mods.ltt.LootTable.removeModItem("modid");
```

Usuń wszystkie tabele dodane przez mod.

```zenscript
// mods.ltt.LootTable.removeModTable(Modid string);
mods.ltt.LootTable.removeModTable("modid");
```

Usuwa przedmiot z każdej tablicy łupu.

```zenscript
// mods.ltt.LootTable.removeGlobalItem(String itemId);
mods.ltt.LootTable.removeGlobalItem("minecraft:iron_ingot");
```