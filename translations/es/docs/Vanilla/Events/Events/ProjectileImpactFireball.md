# ProyectileImpactFireball

Este evento se dispara cuando una bola de fuego afecta a una entidad pero antes de daño, etc, se calcula. Es **cancelable**y, si se cancela, el impacto no será procesado.

Los valores de aceleración de la entidad de bola de fuego están disponibles a través de zengetters.

## Importar la clase
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactFireballEvent;`

## Extendiendo IEntityEvent
ProjectileImpactFireball Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Iproyectil](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters y ZenSetters

La siguiente información puede ser recuperada del evento:

| ZenGetter       | Ajuste          | Tipo                                                      |
| --------------- | --------------- | --------------------------------------------------------- |
| `bola de fuego` |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `tirador`       |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `aceleraciónX`  | `aceleraciónX`  | doble                                                     |
| `aceleración`   | `aceleración`   | doble                                                     |
| `accelerationZ` | `accelerationZ` | doble                                                     |
