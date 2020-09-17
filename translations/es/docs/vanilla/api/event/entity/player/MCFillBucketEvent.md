# Evento MCFillBucket

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCFillBucketEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCFillBucketEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| Parámetro | Tipo                                                                                                                            | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | No se proporcionó descripción |



## Métodos
### obtener cubo vacío

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getEmptyBucket();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### cubo llenado

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
miMCFillBucketEvent.getFilledBucket();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
miMCFillBucketEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCFillBucketEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
miMCFillBucketEvent.isCanceled();
```

### setCancelado

```zenscript
myMCFillBucketEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |


### cubo lleno

```zenscript
myMCFillBucketEvent.setFilledBucket(arg0 como crafttweaker.api.item.ItemStack);
```

| Parámetro | Tipo                                                              | Descripción                   |
| --------- | ----------------------------------------------------------------- | ----------------------------- |
| arg0      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |



