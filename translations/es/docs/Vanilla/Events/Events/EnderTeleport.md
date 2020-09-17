# EnderTeleport

El evento EnderTeleport se activa cada vez que un enderman o un shulker teletransportan.  
También se dispara cada vez que un jugador teletransporta usando una perla enderpearl (es posible que otros mods disparen este evento también.)

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. nderTeleportEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos LivingEntityUseItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter        | Ajuste           | Tipo     |
| ---------------- | ---------------- | -------- |
| `targetX`        | `targetX`        | doble    |
| `targetY`        | `targetY`        | doble    |
| `blanco Z`       | `blanco Z`       | doble    |
| `daño de ataque` | `daño de ataque` | flotante |