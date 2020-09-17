# Evento MCBonemeal

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCBonemealEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCBonemealEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCBonemealEvent>);
```
| Parámetro | Tipo                                                                                                                        | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCBonemealEvent](/vanilla/api/event/entity/player/MCBonemealEvent)> | No se proporcionó descripción |



## Métodos
### getBlock

Devuelve [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
miMCBonemealEvent.getBlock();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
Event.getEntityPlayer();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getPlayer();
```

### getPos

Devuelve [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCBonemealEvent.getPos();
```

### getStack

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCBonemealEvent.getStack();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
miMCBonemealEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCBonemealEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
miMCBonemealEvent.isCanceled();
```

### setCancelado

```zenscript
myMCBonemealEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



