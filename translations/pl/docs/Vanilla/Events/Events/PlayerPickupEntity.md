# Odbiór gracza

Wydarzenie PlayerPickupEntity jest uruchamiane zawsze, gdy gracz wchodzi w interakcję z obiektem.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. playerPickupEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter      | Typ zwrotu                            |
| -------------- | ------------------------------------- |
| `anulowane`    | boolean                               |
| `przetworzone` | boolean                               |
| `gracz`        | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `podmiot`      | [IEntity](/Vanilla/Entities/IEntity/) |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.
- `event.process()` ustawia wydarzenie jako przetworzone.