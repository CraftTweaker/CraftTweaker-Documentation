# Interactuar con la entidad

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteract
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteract(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteract>);
```
| Parámetro | Tipo                                                                                                                                                                  | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteract](/vanilla/api/event/entity/player/PlayerInteractEvent/MCEntityInteract)> | No se proporcionó descripción |



## Métodos
### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteract.getEntityPlayer();
```

### getFace

Devuelve: `La cara involucrada en esta interacción. Para todas las interacciones que no sean bloqueadas, esto devolverá nulas.`

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
miMCEntityInteract.getFace();
```

### getItemStack

Devuelve: `La pila de elementos involucrada en esta interacción, {` @code ItemStack.EMPTY} si la mano estaba vacía.

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCEntityInteract.getItemStack();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteract.getPlayer();
```

### getPos

Si la interacción estaba en una entidad, será un BlockPos centrado en la entidad. Si la interacción estaba en un bloque, será la posición de ese bloque. De lo contrario, será un BlockPos centrado en el jugador. Nunca será nulo. Devuelve: `La posición involucrada en esta interacción.`

Devuelve [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
miMCEntityInteract.getPos();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
miMCEntityInteract.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
myMCEntityInteract.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
myMCEntityInteract.isCanceled();
```

### setCancelado

```zenscript
myMCEntityInteract.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |



