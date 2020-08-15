# Entitäts-Schadens-Sperrung

## Entity-Schadens-Sperre

Diese Funktion erlaubt es dir, bestimmte Objekte anzugreifen/zu beschädigen.

### Syntax:

[Link zur IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Leeres Beispiel:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition Definition, String... defaultRequirements);
    
    # Arbeitsbeispiel:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");