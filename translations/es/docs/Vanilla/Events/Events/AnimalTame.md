# AnimalTame

Este evento se dispara para determinar si un animal va a ser domesticado. Si se cancela, **la doma no tendrá éxito**. De lo contrario, simplemente sirve como una notificación de la doma que se está llevando a cabo.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. nimalTameEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
AnimalTame Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter | Ajuste | Tipo                                              |
| --------- | ------ | ------------------------------------------------- |
| `animal`  |        | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `animal`  |        | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `jugador` |        | [IPlayer](/Vanilla/Players/IPlayer/)              |
