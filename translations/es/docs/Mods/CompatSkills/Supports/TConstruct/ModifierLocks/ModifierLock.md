# Bloqueos de material

## Bloqueo de material

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Adición del modificador
    

Para los modificadores específicos de Tinker Construct.

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.ModifierLock.addModifierLock(String identifier, String... requirements);
    
    // Ejemplo:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");