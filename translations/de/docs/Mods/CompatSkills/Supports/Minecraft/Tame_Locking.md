# Zähmendes Sperren

## Tier-Sperre

Mit dieser Funktion können Sie bestimmte Entitäten um Anforderungssperren ergänzen.

### Syntax

[Link zur IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Leeres Beispiel:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition Definition, String... defaultRequirements);
    
    # Arbeitsbeispiel:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");