# EntityLivingDeath

El evento EntityLivingDeath se dispara cada vez que una entidad está a punto de morir.  
Se puede cancelar para que la entidad viva.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityLivingDeathEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter      | Tipo                                            |
| -------------- | ----------------------------------------------- |
| fuente de daño | [Fuente del ID](/Vanilla/Damage/IDamageSource/) |