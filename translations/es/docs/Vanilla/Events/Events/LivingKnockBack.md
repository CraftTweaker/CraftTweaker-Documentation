# Retroceder

Este evento se dispara cuando una entidad es devuelta. El evento es **cancelable** y hacerlo evitará que la entidad sea rechazada. También se puede ajustar la fuerza del retorno, además de la relación X y Z.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ivingKnockBackEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
LivingKnockBack Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter             | Ajuste     | Tipo                                  |
| --------------------- | ---------- | ------------------------------------- |
| `atacante`            | `atacante` | [IEntity](/Vanilla/Entities/IEntity/) |
| `atacante original`   |            | [IEntity](/Vanilla/Entities/IEntity/) |
| `fuerza`              | `fuerza`   | flotante                              |
| `fuerza original`     |            | flotante                              |
| `ratioX`              | `ratioX`   | doble                                 |
| `ratioZ`              | `ratioZ`   | doble                                 |
| `ratio original %s`   |            | doble                                 |
| `relación original Z` |            | doble                                 |

## Notas

Cuando llegue el evento, es posible que el atacante ``, `fuerza`, o la variable `ratio`ya han sido modificadas. Puedes encontrar estos valores en las variables `original*`.
