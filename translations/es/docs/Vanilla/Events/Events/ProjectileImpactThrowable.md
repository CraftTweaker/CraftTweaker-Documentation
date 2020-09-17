# ProyectileImpactable

Este evento se dispara cada vez que un proyectil arrojable afecta a una entidad pero antes de daño, etc, se calcula. Es **cancelable**y, si se cancela, el impacto no será procesado.

## Importar la clase
Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.ProjectileImpactThrowableEvent;`

## Extendiendo IEntityEvent
ProjectileImpactThrowable Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Iproyectil](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters y ZenSetters

La siguiente información puede ser recuperada del evento:

| ZenGetter       | Ajuste | Tipo                                                      |
| --------------- | ------ | --------------------------------------------------------- |
| `bola de fuego` |        | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `tirador`       |        | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
