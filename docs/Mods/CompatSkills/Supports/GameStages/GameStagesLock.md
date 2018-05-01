# Stage-Locks


## Stage-Lock
This part of the GameStages-Support allows you to lock a specific Stage behind a set of Requirements.
This means that if a player does not match the set requirements for the Stage upon unlocking the Stage, it'll cancel the unlock and post a error message to chat. This chat message isn't server-wide but player-specific.


### Syntax:
```
// Blank Example:
mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);

// Test Example:
mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
mods.compatskills.GameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");
```