# Evento de HitHit Crítico

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCriticalHitEvent
```

## Constructores
```zenscript
nuevo crafttweaker.api.event.entity.player.MCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parámetro | Tipo                                                                                                                             | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | No se proporcionó descripción |



## Métodos
### getDamageModifier

El modificador de daño del golpe.<br> Esto es por defecto 1.5F para golpes cirílitos y 1F para golpes normales.

Devuelve flotante

```zenscript
miMCriticalHitEvent.getDamageModifier();
```

### %s Jugador

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
MyMCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

El modificador de daño inicial para el golpe generará cualquier cambio.<br> Esto es 1.5F para golpes circulares y 1F para golpes normales.

Devuelve flotante

```zenscript
miMCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Devuelve: `Jugador`

Devuelve [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCriticalHitEvent.getPlayer();
```

### hastaResultado

Determina si este evento espera un valor de resultado significativo. Nota: Los eventos con la anotación HasResult tendrán este método automáticamente añadido para devolver verdadero.

Devuelve booleano

```zenscript
miMCriticalHitEvent.hasResult();
```

### es cancelable

Determine si esta función es cancelable. Devuelve: `Si el acceso a setCanceled debe ser permitido
 Nota:
 Los eventos con la anotación Cancelable tendrán este método automáticamente añadido para devolver verdadero.`

Devuelve booleano

```zenscript
miMCriticalHitEvent.isCancelable();
```

### es cancelado

Determine si este evento es cancelado y debe dejar de ejecutarse. Devuelve: `El estado actual cancelado`

Devuelve booleano

```zenscript
miMCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Devuelve verdadero si este golpe fue crítico por vainilla

Devuelve booleano

```zenscript
miMCriticalHitEvent.isVanillaCritical();
```

### setCancelado

```zenscript
myMCriticalHitEvent.setCanceled(cancelar como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| cancelar  | boolean | No se proporcionó descripción |


### setDamageModifier

Esto establece el multiplicador de daños por el golpe. Si lo ajusta a 0, las partículas todavía se generan pero no se hace daño.

```zenscript
miMCriticalHitEvent.setDamageModifier(mod como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| mod       | flotante | No se proporcionó descripción |



