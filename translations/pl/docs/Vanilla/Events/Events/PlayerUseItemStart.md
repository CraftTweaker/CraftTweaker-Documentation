# PlayerUseItemStart

Wydarzenie PlayerUseItemStart jest uruchamiane za każdym razem, gdy gracz zacznie używać przedmiotu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerUseItemStartEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerUseItemStart zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter   | Typ zwrotu                               |
| ----------- | ---------------------------------------- |
| `anulowane` | boolean                                  |
| `gracz`     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `element`   | [IItemStack](/Vanilla/Items/IItemStack/) |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane