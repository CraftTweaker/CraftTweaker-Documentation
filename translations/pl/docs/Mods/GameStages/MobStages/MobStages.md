# Etapy mobów

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy mobów umożliwiają tworzenie potworów w niestandardowym systemie progresji. Aby uzyskać więcej informacji o tym, jak działa mod, sprawdź stronę modów [tutaj](https://minecraft.curseforge.com/projects/mob-stages)

## Opcje globalne

Tworzy nowy wpis gloabla dla moba. Tylko jeden globalny wpis może istnieć na jednego moba.

```zenscript
// mods.MobStages.addStage(String, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Dodaje zamiennik dla moba. Jeśli potwory się nie pojawią, ponieważ nie ma w pobliżu ważnych graczy w pobliżu, zastępcze potwory pojawią się w jego miejscu.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Ustawia zakres do wyszukiwania poprawnych graczy. Domyślny zakres to 512 bloków, więc jest to opcjonalne.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Pozwala spawnerom na nadpisanie sprawdzenia etapu. Domyślnie jest fałszywe. Jeśli ustawione na true, spawnery będą działać dla tego moba, nawet jeśli nie ma poprawnych graczy.

```zenscript
// mods.MobStages.toggleSpawner(String entityId, boolean allow);
mods.MobStages.toggleSpawner("minecraft:zombie", true);

// mods.MobStages.toggleSpawner(String entityId, boolean allow, int dimension);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
```

## Opcje specyficzne dla wymiaru

Warianty specyficzne dla wymiaru są prawie takie same jak warianty globalne, mają jednak jeszcze jeden argument dodany do końca, czyli identyfikator wymiaru Integer. Wpisy dotyczące wymiaru zastąpią globalny wpis w tym wymiarze. Możesz mieć tylko jeden wpis na jednego moba, na jeden wymiar.

## Przykładowy skrypt

```zenscript
// Creepers wymaga etapu pierwszego, aby spawn
mods.MobStages.addStage("one", "minecraft:creeper");

// Szkielet wymaga etapu drugiego, lub dowolnego spawnera.
mods.MobStages.addStage("dwa", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Pająki wymagają trzeciego etapu na nim.
mods.MobStages.addStage("trzy", "minecraft:spider", -1);

// Zombie wymagają etapu 4 w żadnym miejscu i jeśli nie są w stanie zastąpić nietoperzy.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:zombie", "minecraft:bat", -1);
```