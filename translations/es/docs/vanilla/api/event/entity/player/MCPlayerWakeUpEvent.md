# MCPlayerWakeUpEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Parámetro | Tipo                                                                                                                                | Descripción                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
MCPlayerWakeUpEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCancelado

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |


### debería aparecer

Indica si el sueño del jugador fue considerado exitoso. En vainilla, esto se utiliza para determinar si el trozo de spawn se va a ajustar a la posición de la cama.

Devuelve booleano

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### actualizarMundo

Indica si el servidor debe ser notificado de cambios de suspensión. Esto sólo será falso si el servidor ya se considera "actualizado", porque, por ejemplo, inició la llamada.

Devuelve booleano

```zenscript
MCPlayerWakeUpEvent.updateWorld();
```

### activar inmediatamente

Utilizado para la 'animación despertar'. Esto es falso si el jugador se considera 'dormido' y la superposición debería desvanecerse lentamente.

Devuelve booleano

```zenscript
miMCPlayerWakeUpEvent.wakeInmediately();
```


