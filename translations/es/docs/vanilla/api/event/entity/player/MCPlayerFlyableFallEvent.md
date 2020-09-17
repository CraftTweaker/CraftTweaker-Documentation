# MCPlayerFlyableFallEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| Parámetro | Tipo                                                                                                                                          | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | No se proporcionó descripción |



## Métodos
### getDistance

Devuelve flotante

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

Devuelve flotante

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### setCancelado

```zenscript
myMCPlayerFlyableFallEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |


### setDistance

```zenscript
myMCPlayerFlyableFallEvent.setDistance(distancia como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| distancia | flotante | No se proporcionó descripción |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(multiplicador como flotante);
```

| Parámetro     | Tipo     | Descripción                   |
| ------------- | -------- | ----------------------------- |
| multiplicador | flotante | No se proporcionó descripción |



