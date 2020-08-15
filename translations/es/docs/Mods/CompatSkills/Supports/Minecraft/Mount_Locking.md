# Montar bloqueo

## Montar Cerraduras

¡Esta función le permite añadir un bloqueo requerido a las entidades específicas de montaje!

### Síntesis

[Enlace a la definición de la entidad](/Vanilla/Entities/IEntityDefinition/)

    # Ejemplo en blanco:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # Ejemplo de trabajo:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")