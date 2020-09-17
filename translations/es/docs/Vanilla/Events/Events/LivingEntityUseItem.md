# LivingEntityUseItem

El evento LivingEntityUseItem se activa cada vez que una entidad comienza a usar un elemento, deja de hacerlo, después de que el jugador termine de usar un objeto y cada tick que use el objeto.  
Puesto que eso se llamaría demasiado a menudo, hay 4 subeventos que solo se llaman en su caso específico.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.

```zenscript
//Evento Base
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Eventos Específicos
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## Extensiones de la interfaz de eventos

Los eventos LivingEntityUseItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter    | Tipo de devolución                       |
| ------------ | ---------------------------------------- |
| `jugador`    | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `es Jugador` | pluma                                    |
| `objeto`     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `duración`   | int                                      |

| Ajuste     | Tipo de parámetro |
| ---------- | ----------------- |
| `duración` | int               |