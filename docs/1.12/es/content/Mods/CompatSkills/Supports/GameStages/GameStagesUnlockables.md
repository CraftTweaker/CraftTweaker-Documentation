# Stage-Unlockables

## Unlockables

This part of the GameStages support will focus on the later form. Aka "Dummy Traits" for unlocking GameStages.

## Resource Information:

When creating a new dummy trait you'll notice a few things are missing:

- Unlocalized Name
- Unlocalized Description
- No Icon is present

This is due to these things requiring Resources. At the current stage CompatSkills does not provide the ability to provide these natively. There are a few ways around this:

- Use BASE which comes with its own resource loader (Only works if ContentTweaker is present due to how BASE works).
- Use ResourceLoader by Lumien.

Localization is pretty straight forward.

    assets/compatskills/lang/en_us.lang
    
    en_us.lang = English Translation
    

However the texture path for the trait icon is as follows:

    assets/compatskills/textures/unlockables/name.png
    
    So if the name is "banana", The Path would be as follows:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Syntax:

    Blank Example:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int y, String skillName, int cost, @Optional String... defaultRequirements);
    
    Working Example(s):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("b", "b", 0, 1, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:gathering", 3, "trait|compatskills:b");