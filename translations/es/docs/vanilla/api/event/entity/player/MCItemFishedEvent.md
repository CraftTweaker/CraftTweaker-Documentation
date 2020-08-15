# Evento MCItemFishedEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCItemFishedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Parámetro | Tipo                                                                                                                            | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | No se proporcionó descripción |



## Métodos
### dañado por

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| arg0      | int  | No se proporcionó descripción |


### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getRodDaño

Obtén el daño que la vara sufrirá. Devuelve: `El daño que la varilla recibirá`

Devuelve la pista

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCItemFishedEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCItemFishedEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCItemFishedEvent.isCanceled();
```

### setCancelado

```zenscript
myMCItemFishedEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



