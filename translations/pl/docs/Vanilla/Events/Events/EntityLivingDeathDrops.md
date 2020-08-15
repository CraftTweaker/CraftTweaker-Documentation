# EnityLivingDeathDrops

Wydarzenie EnityLivingDeathDrops jest uruchamiane, gdy śmierć obiektu powoduje pojawienie się upuszczonych przedmiotów.  
Można anulować, aby powstrzymać proces przed czymś wyrzucaniem.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityLivingDeathDropsEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter         | Typ zwrotu                                                   |
| ----------------- | ------------------------------------------------------------ |
| `krople`          | [`Lista<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Źródło obrażeń`  | [Źródło ID](/Vanilla/Damage/IDamageSource/)                  |
| `isRecentlyTraf`  | bool                                                         |
| `Poziom lootinga` | odcień                                                       |

## Modyfikowanie kropel przedmiotu

Możesz albo dodać do droplista, albo całkowicie zastąpić go nowymi:

```zenscript
event.drops = //odniesienie do listy IEntityItem

//event.addItem(element IItemStack);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.World, event.player.position));
```