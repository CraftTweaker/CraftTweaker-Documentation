# PlayerInteractBlock

Wydarzenie PlayerInteractBlock jest uruchamiane za każdym razem, gdy gracz kliknie blok.  
Można go anulować, aby zapobiec wszelkim innym wydarzeniom. Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik sukcesu, niepowodzenia lub przejścia. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerInteractBlockEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerInteractBlock zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| zengetter          | zengetter          | typ                                            |
| ------------------ | ------------------ | ---------------------------------------------- |
| `hitvector`        |                    | [iwektor3d](/vanilla/world/ivector3d/)         |
| `użyj bloku`       | `użyj bloku`       | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `useitem`          | `useitem`          | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("success" / "pass" / "fail")      |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.