# LivingEntityUseItem

L'evento LivingEntityUseItem viene sparato ogni volta che un'entità inizia a usare un oggetto, smette di farlo, dopo che il giocatore finisce con un oggetto e ogni tick usano l'oggetto.  
Poiché questo sarebbe chiamato troppo spesso, ci sono 4 subEvents che sono chiamati solo nel loro caso specifico.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.

```zenscript
//Base Event
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Specific Events
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## Estensioni dell'interfaccia evento

LivingEntityUseItem Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setters pure:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter   | Tipo Di Reso                             |
| ----------- | ---------------------------------------- |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer`  | bool                                     |
| `elemento`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `durata`    | int                                      |

| ZenSetter | Tipo Parametro |
| --------- | -------------- |
| `durata`  | int            |