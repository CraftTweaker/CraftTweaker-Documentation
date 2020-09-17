# PlayerUseItemTick

Wydarzenie PlayerUseItemTick jest strzelane po każdym zaznaczeniu, że gracz konsekwentnie używa przedmiotu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerUseItemTick`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerUseItemTick zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter      | Typ zwrotu                               |
| -------------- | ---------------------------------------- |
| `anulowane`    | boolean                                  |
| `gracz`        | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `element`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `czas trwania` | odcień                                   |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane