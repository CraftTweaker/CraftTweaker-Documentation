# Interakcja gracza

Wydarzenie PlayerInteract jest uruchamiane za każdym razem, gdy gracz wchodzi w interakcję z blokiem.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerInteractEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

PlayerInteract Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter                | Typ zwrotu                           |
| ------------------------ | ------------------------------------ |
| `anulowane`              | boolean                              |
| `przy użyciu Przedmiotu` | boolean                              |
| `używając Bloku`         | boolean                              |
| `x`                      | odcień                               |
| `y`                      | odcień                               |
| `z`                      | odcień                               |
| `gracz`                  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `świat`                  | [IWorld](/Vanilla/World/IWorld/)     |
| `blok`                   | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `wymiary`                | odcień                               |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane
- `event.useBlock()` ustawia blok na true
- `event.useItem()` ustaw element na true