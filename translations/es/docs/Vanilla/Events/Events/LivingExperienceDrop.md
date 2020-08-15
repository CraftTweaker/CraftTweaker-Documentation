# Experiencia

Este evento se dispara cuando una entidad muere y deja caer la experiencia, permitiendo que se modifique la cantidad de experiencia. Alternativamente, el evento puede ser **cancelado** para evitar que la experiencia sea soltada.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ivingExperience enceDropEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
LivingExperience enceDrop Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter               | Ajuste                  | Tipo                                 |
| ----------------------- | ----------------------- | ------------------------------------ |
| `jugador`               |                         | [IPlayer](/Vanilla/Players/IPlayer/) |
| `experiencia eliminada` | `experiencia eliminada` | int                                  |
| `originalExperience`    |                         | int                                  |

## Notas

`originalExperience` contiene la experiencia original de Vanilla. Es posible que `droppedExperience` cuando este evento es disparado ya haya sido modificado.
