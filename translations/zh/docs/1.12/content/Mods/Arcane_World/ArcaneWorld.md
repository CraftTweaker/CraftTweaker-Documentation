# Arcane World

Arcane World is a mod that allows for the addition of rituals using ingredients to trigger various game mechanics.

## Import
```zenscript
import mods.ArcaneWorld;
```

## 方法
```zenscript
// Creates a summoning ritual
ArcaneWorld.createRitualSummon(string name, string displayName, string entityID, IIngredient... inputs);

// Creates a ritual that spawns dragon's breath
ArcaneWorld.createRitualDragonBreath(String name, String displayName, IIngredient... inputs);

// Creates a ritual that teleports players to the Arcane World dungeon dimension and then summons an entity
ArcaneWorld.createArenaRitual(String name, String displayName, String entityID, IIngredient... inputs);

// Creates a ritual that changes the weather - can be "clear", "rain", or "thunder"
ArcaneWorld.createRitualWeather(String name, String displayName, String weatherType, IIngredient... inputs);

// Creates a ritual that changes the time - can be negative to rewind time
ArcaneWorld.createRitualTime(String name, String displayName, int timeChange, IIngredient... inputs);

// Creates a ritual that outputs an item, similar to a crafting recipe
ArcaneWorld.createRitualCreateItem(String name, String displayName, IItemStack result, IIngredient... inputs);

// Creates a ritual that teleports players to the Arcane World dungeon dimension
ArcaneWorld.createRitualDungeon(String name, String displayName, IIngredient... inputs);

// Creates a ritual that runs commands
ArcaneWorld.createRitualCommand(String name, String displayName, String[] commands, IIngredient... inputs);

// Removes a ritual by its registry name
// Rituals added by crafttweaker have a registry name of "crafttweaker:<name>"
ArcaneWorld.remove(String registryName);

// Removes all rituals
ArcaneWorld.removeAll();
```
