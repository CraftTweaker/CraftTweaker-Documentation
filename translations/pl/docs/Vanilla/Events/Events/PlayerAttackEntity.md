# PlayerAttackEntity

Wydarzenie PlayerAttackEntity jest uruchamiane za każdym razem, gdy gracz atakuje obiekt.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerAttackEntityEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerAttackEntity implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getter/settery:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter   | Typ zwrotu                            |
| ----------- | ------------------------------------- |
| `anulowane` | boolean                               |
| `gracz`     | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `podmiot`   | [IEntity](/Vanilla/Entities/IEntity/) |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.