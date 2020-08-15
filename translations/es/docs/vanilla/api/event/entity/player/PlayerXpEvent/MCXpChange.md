# MCXpChange

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpCambiar
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange>);
```
| Parámetro | Tipo                                                                                                                                           | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpCambiar](/vanilla/api/event/entity/player/PlayerXpEvent/MCXpChange)> | No se proporcionó descripción |



## Métodos
### Obtener cantidad

Devuelve la pista

```zenscript
myMCXpChange.getAmount();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCXpChange.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCXpChange.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCXpChange.isCanceled();
```

### setAamount

```zenscript
myMCXpChange.setAmount(cantidad como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| monto     | int  | No se proporcionó descripción |


### setCancelado

```zenscript
myMCXpChange.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



