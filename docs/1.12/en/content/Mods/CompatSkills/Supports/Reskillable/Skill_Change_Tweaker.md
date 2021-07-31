# Skill_Change Tweaker

## Feature:
This feature will allow you as the player to set a group of commands you want to run upon a player unlocking/locking a trait or reaching a specific Skill Level.

## Syntax:
```
Blank Examples:
mods.compatskills.SkillChange.addLevelUpCommands(CTSkill skill, int level, String... commands);
mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... commands);
mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... commands);

mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
mods.compatskills.SkillChange.addUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
mods.compatskills.SkillChange.addUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");
```