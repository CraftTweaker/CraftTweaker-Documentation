# LivingEntityUseItem

Wydarzenie LivingEntityUseItem jest uruchamiane za każdym razem, gdy jednostka zaczyna używać przedmiotu, Zatrzymuje się to po zakończeniu przez gracza, używając przedmiotu i każdym oznaczeniu użyj przedmiotu.  
Ponieważ nazywa się to zbyt często, istnieją 4 subZdarzenia, które są wywoływane tylko w ich konkretnym przypadku.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.

```zenscript
//Base Event
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Specyficzne zdarzenia
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finsh;
```

## Rozszerzenia interfejsu zdarzenia

Wydarzenia LivingEntityUseItem implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter      | Typ zwrotu                               |
| -------------- | ---------------------------------------- |
| `gracz`        | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer`     | bool                                     |
| `element`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `czas trwania` | odcień                                   |

| ZenSetter      | Typ parametru |
| -------------- | ------------- |
| `czas trwania` | odcień        |