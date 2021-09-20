# Stage-Locks

## Stage-Lock

This part of the GameStages-support allows you to lock a specific stage behind a set of requirements. This means that if a player does not match the set requirements for the stage upon unlocking the stage, it'll cancel the unlock and post an error message to chat. This chat message isn't server-wide but player-specific.

### Syntax:

    // Blank Example:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Test Example:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");