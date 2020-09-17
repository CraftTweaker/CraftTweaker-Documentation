# NBT-Lock Tweaker

## Bloqueo NBT

Los NBT-Locks son específicos de CompatSkills 1.4.0+ y actualmente es la característica más potente. Puedes bloquear determinados NBT-Tags restringidos a un mod-id determinado o a cada elemento del juego.

Esto significa que cualquier elemento que contenga esa etiqueta NBT tendrá el bloqueo aplicado a ella.

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.NBTLock.addGenericNBTLock(IData tag, String... bloqueado
    mods.compatskills.NBTLock.addModNBTLock(String modId, IData tag, String... bloqueado)
    
    //// Ejemplo de trabajo:
    // Bloquea Silk-Touch
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // Bloquea Unbreaking (Sin Nivel-Specified)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:collecting|6");
    

Esto tiene importantes implicaciones. Esto significa, por ejemplo, que como empaquetador puede bloquear:

- Materiales de Tinker
- Modificadores de Tinker
- Encantamientos
- Valores de energía

Y mucho más, ¡mientras conozcas la etiqueta NBT que usa!