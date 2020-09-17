# Mount-Sperre

## Einhängesperren

Diese Funktion erlaubt es dir, bestimmte Einheiten mit einer Anforderungssperre zu montieren!

### Syntax

[Link zur IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Leeres Beispiel:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition Definition, String... defaultRequirements)
    
    # Arbeitsbeispiel:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")