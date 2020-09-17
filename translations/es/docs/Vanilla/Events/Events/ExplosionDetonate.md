# Detonar Explosión

El evento ExplosionDetonate se dispara poco antes de que comience una explosión. No se puede cancelar.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. xplosionDetonateEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
ExplosionDetonate Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento de Explosión](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter             | Ajuste | Tipo                                           |
| --------------------- | ------ | ---------------------------------------------- |
| `entidades afectadas` |        | [Itidad](/Vanilla/Entities/IEntity/)[]         |
| `affectedPositions`   |        | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
