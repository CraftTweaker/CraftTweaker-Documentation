# MCPlayerLoggedInevento

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedInEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedInEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedInEvent>);
```
| Parámetro | Tipo                                                                                                                                                            | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedInEvent](/vanilla/api/event/entity/player/PlayerEvent/MCPlayerLoggedInEvent)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerLoggedInEvent.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerLoggedInEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
miMCPlayerLoggedInEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCPlayerLoggedInEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCPlayerLoggedInEvent.isCanceled();
```

### setCancelado

```zenscript
myMCPlayerLoggedInEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



