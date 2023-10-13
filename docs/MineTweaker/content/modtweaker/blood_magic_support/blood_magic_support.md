# Blood Magic Support

## Handlers Supported

The following handlers are supported:

* Blood Altar
* Orb Shaped/Shapeless Recipes
* Alchemical Chemistry Set
* [Rituals](/modtweaker/blood_magic_support/rituals)

**NOTE: If a recipe calls for a TierRequired the blood orb tier that you give and the ones above it will be used.**

Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Blood Altar
//InputStack, OutputStack, TierRequired, LPRequired, @Optional UsageRate, @Optional DrainRate
mods.bloodmagic.Altar.addRecipe(<minecraft:glowstone_dust>, <minecraft:redstone>, 3, 5000, 20, 20);
//OutputStack
mods.bloodmagic.Altar.removeRecipe(<AWWayofTime:blankSlate>);

//Blood Orb Shaped and Shapeless Recipes
//OutputStack, InputArray
mods.bloodmagic.BloodOrb.addShaped(<minecraft:ender_pearl>, [[<AWWayofTime:weakBloodShard>, <AWWayofTime:crystallos>,<AWWayofTime:weakBloodShard>], [<AWWayofTime:magicales>, <AWWayofTime:magicianBloodOrb>, <AWWayofTime:magicales>], [<AWWayofTime:weakBloodShard>, <AWWayofTime:crystallos>, <AWWayofTime:weakBloodShard>]]);
//OutputStack, InputArray
mods.bloodmagic.BloodOrb.addShapeless(<AWWayofTime:demonBloodShard> * 5, [<AWWayofTime:archmageBloodOrb>, <AWWayofTime:demonBloodShard>, <AWWayofTime:bloodMagicBaseItems:27>]);

//Alchemical Chemistry Set
//OutputStack, InputArray, TierRequired, LPRequired
mods.bloodmagic.Alchemy.addRecipe(<minecraft:clay> * 2, [<minecraft:hardened_clay>, <minecraft:hardened_clay>, <minecraft:water_bucket>], 1, 100);
//OutputStack
mods.bloodmagic.Alchemy.removeRecipe(<minecraft:ice>);
```