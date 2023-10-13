# Vanilla Support
## Contents

* SUPPORT WAS REMOVED IN 0.6
* Additional Vanilla Support is available in v0.5
* Handlers Supported
* Commands Supported

## SUPPORT WAS REMOVED IN 0.6
### Additional Vanilla Support is available in v0.5

#### Handlers Supported
The following handlers are supported:

* Dungeon Loot
* Tall Grass Drops
* Localisation
Each of these handlers can have recipes added or removed:
```zenscript
//Grass Seeds
//ItemStack, Weight
mods.modtweaker.addGrassSeed(<minecraft:carrot>, 10);
//ItemStack
mods.modtweaker.removeGrassSeed(<minecraft:wheat_seeds>);

//Dungeon Loot
//ChestName, ItemStack, MinChance, MaxChance, Weight
mods.modtweaker.addChestLoot("dungeonChest", <minecraft:dirt>, 2, 5, 15);
//ChestName, ItemStack
mods.modtweaker.removeChestLoot("dungeonChest", <minecraft:apple>);

//Localisation - You can use setLocalisation or setLocalization for you amuricans :P
//LanguageCode, KEY, TEXT (The override will ONLY apply in the specified language
mods.modtweaker.setLocalisation("en_US", "nei.inventory.prev", "Past");
//KEY, TEXT - You will want to use this one most of the time, it overrides no matter the language
mods.modtweaker.setLocalisation("nei.inventory.next", "Future");
```

#### Commands Supported
ModTweaker introduces two commands with the vanilla support these are

```
/minetweaker seeds
```
This prints a list of all the seeds that are currently registered in tall grass to the minetweaker log

```
/minetweaker loot
/minetweaker loot names
/minetweaker loot CHESTNAME
```
The first will print a list of every single loot registered to every chest type. The second prints a list of all the registered chest names The third prints just the loot for that specific chest e.g.

```
/minetweaker loot dungeonChest
```
will print all the loot in Dungeon Chests.

