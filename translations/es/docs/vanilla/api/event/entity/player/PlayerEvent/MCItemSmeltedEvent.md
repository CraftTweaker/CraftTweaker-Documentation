# MCItemSmeltedEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemPhone Evento
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.PlayerEvent.MCItemmirreltedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent>);
```
| Parámetro | Tipo                                                                                                                                                        | Descripción                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemmirreltedEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemSmeltedEvent)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemSmeltedEvent.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemworeltedEvent.getPlayer();
```

### getSmelting

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemSmeltedEvent.getSmelting();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCItemSmeltedEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCItemSmeltedEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCItemSmeltedEvent.isCanceled();
```

### setCancelado

```zenscript
myMCItemworeltedEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



