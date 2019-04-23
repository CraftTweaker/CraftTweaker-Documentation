# Mob Stages

This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Mob Stages allows for mob spawning to be configured into a custom progression system. For more info on how the mod works, check out the mod page [here](https://minecraft.curseforge.com/projects/mob-stages)

## Global Options

Creates a new gloabl entry for the mob. Only one global entry can exist per mob.

```java
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Adds a replacement for the mob. If the mob fails to spawn because there are no valid players nearby, the replacement mob will be spawned in it's place.

```java
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Sets the range to search for valid players. The default range is 512 blocks, so this is optional.

```java
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Allows for spawners to override the stage check. The default is false. If set to true, spawners will work for this mob, even if there are no valid players.

```java
// mods.MobStages.toggleSpawners(String entityId, boolean allow);
mods.MobStages.toggleSpawners("minecraft:zombie", true);
```

## Dimension Specific Options

Dimension specific options are nearly the same as the global options, however they have another argument added to the end, which is the Integer dimension id. Dimension specific entries will override the global entry in that dimension. You can only have one entry per mob, per dimension.

## Example Script

```java
// Creepers require stage one to spawn
mods.MobStages.addStage("one", "minecraft:creeper");

// Skeletons require stage two, or any spawner.
mods.MobStages.addStage("two", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Spiders require stage three in the nether.
mods.MobStages.addStage("three", "minecraft:spider", -1);

// Zombies require stage 4 in the nether, and are replaced by bats if they can't.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```