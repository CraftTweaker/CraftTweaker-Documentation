# MobGriefing

Este evento se dispara cada vez que está a punto de ocurrir el agravio potencial de las criaturas. Tiene un **resultado** que determina si el comportamiento predeterminado ocurre o no:

- **permitir**: el griefing está permitido
- **denegar**: el griefing está prevenido
- **por defecto**: el griefing se produce de acuerdo con la lógica de Vanilla.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. obGriefingEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
MobGriefing Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
