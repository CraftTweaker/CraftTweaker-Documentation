# Taming Locking

## Animal-Tame Locking

This feature allows for you to add requirement locks to taming specific entities.

### Syntax

[Link to IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Blank Example:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Working Example:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");