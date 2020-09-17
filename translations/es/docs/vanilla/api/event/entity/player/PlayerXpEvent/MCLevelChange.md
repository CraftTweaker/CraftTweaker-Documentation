# MCLevelChange

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange>);
```
| Parámetro | Tipo                                                                                                                                                | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCLevelChange)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getEntityPlayer();
```

### getLevels

Devuelve la pista

```zenscript
myMCLevelChange.getLevels();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCLevelChange.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCLevelChange.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCLevelChange.isCanceled();
```

### setCancelado

```zenscript
myMCLevelChange.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |


### setLevels

```zenscript
myMCLevelChange.setLevels(levels as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| niveles   | int  | No se proporcionó descripción |



