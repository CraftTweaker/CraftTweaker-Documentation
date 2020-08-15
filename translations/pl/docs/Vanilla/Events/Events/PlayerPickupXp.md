# Odbiór gracza

Wydarzenie PickupXp Gracza jest uruchamiane za każdym razem, gdy gracz podnosi orby doświadczenia.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerPickupXpEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerPickupXp zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter    | Typ zwrotu                                |
| ------------ | ----------------------------------------- |
| `anulowane`  | boolean                                   |
| `gracz`      | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `podmiot Xp` | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`         | zmiennoprzecinkowe                        |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.