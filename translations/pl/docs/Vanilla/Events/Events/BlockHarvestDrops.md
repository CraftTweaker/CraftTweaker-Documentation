# BlockHarvestDropsEvent

Wydarzenie BlockHarvestDrops jest uruchamiane za każdym razem, gdy blok ma zamiar upuścić jego przedmioty.  
Możesz zmodyfikować listę bloków, a także ogólną szansę na upuszczenie. Ustaw tę ostatnią na 1, jeśli wcześniej wykonujesz wszystkie szanse.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. lockHarvestDropsEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia BlockHarvestDrops implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter       | ZenSetter       | Typ                                               |
| --------------- | --------------- | ------------------------------------------------- |
| `gracz`         |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `isPlayer`      |                 | bool                                              |
| `sylkTouch`     |                 | bool                                              |
| `fortuneLevel`  |                 | odcień                                            |
| `krople`        | `krople`        | Lista<[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `Spadek szansy` | `Spadek szansy` | zmiennoprzecinkowe                                |

## Dodawanie elementu do listy

Możesz dodać listę lub użyć metody, aby dodać element do listy:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```