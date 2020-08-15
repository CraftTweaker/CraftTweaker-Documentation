# PlayerLeftClickBlock

Wydarzenie PlayerLeftClickBlock jest uruchamiane za każdym razem, gdy gracz opuścił blok.  
Można go anulować, aby zapobiec wszelkim innym wydarzeniom. Jeśli gracz trzyma lewe kliknięcie, wydarzenie zostanie uruchomione ponownie, nawet jeśli zostanie anulowane. Anulowanie tego wydarzenia uniemożliwi rejestrację lewego kliknięcia, zapobiegając łamaniu bloków (choć nie w trybie kreatywnym). Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik sukcesu, niepowodzenia lub przejścia. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerLeftClickBlockEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia PlayerLeftClickBlock zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter          | ZenSetter          | typ                                            |
| ------------------ | ------------------ | ---------------------------------------------- |
| `hitvector`        |                    | [iwektor3d](/vanilla/world/ivector3d/)         |
| `użyj bloku`       | `użyj bloku`       | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `useitem`          | `useitem`          | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("success" / "pass" / "fail")      |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.
