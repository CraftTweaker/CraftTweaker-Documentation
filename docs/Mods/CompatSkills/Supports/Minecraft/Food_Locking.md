# Food Locking

## Feature:
Food Locking is quite a new type of lock type, and allows for pack authors to lock the ability to eat food with certain Hunger and Saturation Values behind a set of requirements.
This has some potentially intressting applications together with RecipeStages, GameStages and our newly added [Skill Change Feature](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/)
This would in theory allow for a pack authors to set-up a system where in players can only eat food they can craft, and then allow for the required stages for crafting to be locked behind skill levels.

## Hunger Syntax:
```
mods.compatskills.FoodTweaker.addHungerLock(int level, String... requirements);

mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
```

## Saturation Syntax:
```
mods.compatskills.FoodTweaker.addSaturationLock(float level, String... requirements);

mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");
```