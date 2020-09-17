# EntityMountEvent

El evento EntityMount es disparado cada vez que una entidad es montada o desmontada. Si se cancela, la entidad no podrá montar (o desmontar).

## Clase de evento
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensiones de la interfaz de eventos
EntityMountEvent Events implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter            | Tipo de devolución                    |
| -------------------- | ------------------------------------- |
| `mundo`              | [IWorld](/Vanilla/World/IWorld/)      |
| `entidad de montaje` | [IEntity](/Vanilla/Entities/IEntity/) |
| `entidad montada`    | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`         | boolean                               |
| `está desmontando`   | boolean                               |
