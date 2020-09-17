# La entidad está dañando

El evento EntityLivingHurt se dispara cada vez que una Entidad está a punto de resultar dañada.  
Se puede cancelar para evitar que la entidad sufra daños.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityLivingHurtEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter      | Tipo                                            |
| -------------- | ----------------------------------------------- |
| fuente de daño | [Fuente del ID](/Vanilla/Damage/IDamageSource/) |
| monto          | flotante                                        |