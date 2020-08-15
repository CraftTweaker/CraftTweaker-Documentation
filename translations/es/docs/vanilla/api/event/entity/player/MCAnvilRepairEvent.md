# Evento de Reparación MCYC

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCAnvilRepairEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCAnvilRepairEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>);
```
| Parámetro | Tipo                                                                                                                              | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | No se proporcionó descripción |



## Métodos
### getBreakChance

Devuelve flotante

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### Obtener datos de entrada

Obtener la segunda entrada del elemento en el yunque Devuelve: `la segunda ranura de entrada`

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

Obtener la entrada del primer elemento en el yunque Devuelve: `la primera ranura de entrada`

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemResultado

Obtener el resultado de salida del yunque Devuelve: `la salida`

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
myMCAnvilRepairEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCAnvilRepairEvent.isCanceled();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(breakChance as float);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| rompeolas | flotante | No se proporcionó descripción |


### setCancelado

```zenscript
myMCAnvilRepairEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



