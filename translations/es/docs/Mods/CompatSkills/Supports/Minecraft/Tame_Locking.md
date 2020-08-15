# Domesticando bloqueo

## Bloqueo de animales

Esta función te permite añadir bloqueos requeridos a entidades específicas de domesticación.

### Síntesis

[Enlace a la definición de la entidad](/Vanilla/Entities/IEntityDefinition/)

    # Ejemplo en blanco:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Ejemplo de trabajo:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");