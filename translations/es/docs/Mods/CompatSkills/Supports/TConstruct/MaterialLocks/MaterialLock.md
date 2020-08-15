# Bloqueos de material

## Bloqueo de material

With the implementation of TConstruct support in CompatSkills 1.5.0. You now have the ability to lock:

    - Creación de herramientas
    - Creación de partes
    - Reemplazamiento de partes
    

Para materiales específicos de Tinker Construct.

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.MaterialLock.addMaterialLock(String identifier, String... requirements);
    
    // Ejemplo:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");