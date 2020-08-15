# Bloqueo de daño a la entidad

## Bloqueo de daño a la entidad

Esta función te permite bloquear la capacidad de atacar/dañar entidades específicas.

### Sintaxis:

[Enlace a la definición de la entidad](/Vanilla/Entities/IEntityDefinition/)

    # Ejemplo en blanco:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Ejemplo de trabajo:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");