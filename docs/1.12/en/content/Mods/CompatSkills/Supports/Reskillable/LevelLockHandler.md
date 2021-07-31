# Level-Lock Support

## PSA:
This feature works off cancelling the Level-Up event in Reskillable.
Some mods that call the levelUp(); method directly will bypass the locks!
This includes mods like Scavenge: Reskillable and TogetherForever!


## Level-Lock Support
Level-Lock Support is a weird feature that came from a joke that Skysom made in a DM one day.
This feature is entirely for those sadistic enough to implement it!
This gates the progression to the set level not the "going from" that level!


CTSkill = [Skill-Bracket Handler](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/) 

### Syntax:
```
// Blank Example:
mods.compatskills.SkillLocks.addLevelLock(CTSkill skill, int level, String... defaultRequirements);

// Test Example:
mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
```
