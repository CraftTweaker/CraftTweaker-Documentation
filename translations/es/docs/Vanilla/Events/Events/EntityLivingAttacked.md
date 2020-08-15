# La entidad ha sido atacada

El evento EntityLivingAttacked se dispara cada vez que una entidad está siendo atacada.  
Se puede cancelar para evitar que la entidad reciba daño.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityLivingAttackedEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter      | Tipo                                            |
| -------------- | ----------------------------------------------- |
| fuente de daño | [Fuente del ID](/Vanilla/Damage/IDamageSource/) |
| monto          | flotante                                        |