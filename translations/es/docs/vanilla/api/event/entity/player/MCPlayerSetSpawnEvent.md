# MCPlayerSetSpawnEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent>);
```
| Parámetro | Tipo                                                                                                                                    | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent](/vanilla/api/event/entity/player/MCPlayerSetSpawnEvent)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getEntityPlayer();
```

### Recibir nuevo Spawn

Devuelve [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerSetSpawnEvent.getNewSpawn();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCPlayerSetSpawnEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCPlayerSetSpawnEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCPlayerSetSpawnEvent.isCanceled();
```

### es forzado

Este evento es llamado antes de que se cambie el punto de aparición de un jugador. El evento puede ser cancelado y no se procesará más.

Devuelve booleano

```zenscript
myMCPlayerSetSpawnEvent.isForced();
```

### setCancelado

```zenscript
myMCPlayerSetSpawnEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



