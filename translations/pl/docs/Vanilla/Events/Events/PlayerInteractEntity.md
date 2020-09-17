# PlayerInteractEntity

Wydarzenie PlayerInteractEntity jest uruchamiane za każdym razem, gdy gracz wchodzi w interakcję z obiektem. Można go anulować, aby zapobiec wystąpieniu interakcji. Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik sukcesu, niepowodzenia lub przejścia. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. zdarzenie layerInteractEntityEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerInteractEntity zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter          | ZenSettery         | Typ zwrotu                                |
| ------------------ | ------------------ | ----------------------------------------- |
| `gracz`            |                    | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `target`           |                    | [IEntity](/Vanilla/Entities/IEntity/)     |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("success" / "pass" / "fail") |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.