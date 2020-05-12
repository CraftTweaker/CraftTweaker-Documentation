# Blood Magic

**This Support is WIP** **If Something Breaks, please open an issue on the issue tracker!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Binding:

This will cancel the Item Binding in Blood Magic for said specific item if the player doesn't meet the requirements.

### Syntax:

    Blank Example:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);
    
    Test Example:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Rituals:

This will cancel the activation of a ritual if the player doesn't meet the requirements.

### Syntax:

    Blank Example:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")