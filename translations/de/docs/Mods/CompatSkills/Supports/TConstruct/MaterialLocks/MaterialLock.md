# Materialsperren

## Materialsperre

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Werkzeugherstellung
    - Teileherstellung
    - Ersatzteilersatz
    

Für bestimmte Materialien des Tinker Construct's Materials.

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.MaterialLock.addMaterialLock(String Identifier, String... requirements);
    
    // Beispiel:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");