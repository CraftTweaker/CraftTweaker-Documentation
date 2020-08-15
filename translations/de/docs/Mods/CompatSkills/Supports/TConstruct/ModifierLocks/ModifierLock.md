# Materialsperren

## Materialsperre

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Modifikator-Zusatz
    

Für bestimmte Modifikatoren des Tinker-Konstrukts.

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.ModifierLock.addModifierLock(String Identifier, String... requirements);
    
    // Beispiel:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");