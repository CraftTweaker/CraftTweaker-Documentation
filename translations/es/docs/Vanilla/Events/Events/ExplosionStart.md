# Inicio Explosión

El Evento ExplosionStart se dispara poco antes de que comience una explosión. Si se cancela, la explosión no sucederá.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. xplosionStartEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
ExplosionStart Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de Explosión](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
