# Material Locks

## Material-Lock

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Modifier Addition
    

For specific Tinker Construct's Modifiers.

### Syntax:

    // Blank Example:
    mods.compatskills.ModifierLock.addModifierLock(String identifier, String... requirements);
    
    // Example:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");