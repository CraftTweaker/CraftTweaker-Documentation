# EntityLivingFall

El evento EntityLivingFall se dispara cada vez que una entidad está programada para caer.  
Se puede cancelar para evitar que la entidad caiga.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityLivingFallEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter              | Ajuste                 | Tipo     |
| ---------------------- | ---------------------- | -------- |
| rechazo                | rechazo                | flotante |
| multiplicador de daños | multiplicador de daños | flotante |