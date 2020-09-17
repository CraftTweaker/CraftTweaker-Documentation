# Interacto de Minecarta

El MinecartInteractEvent se activa cada vez que un jugador comienza a interactuar con una minecarta. El evento es **cancelable**y hacer esto evitará que el contenedor se abra.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. inecartInteractEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos MinecartInteract implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IMinecart](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | Tipo                                     |
| --------- | ---------------------------------------- |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `objeto`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`    | Cadena                                   |
