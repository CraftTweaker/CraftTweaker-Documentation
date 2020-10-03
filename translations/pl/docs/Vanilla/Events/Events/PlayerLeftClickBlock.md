# PlayerLeftClickBlock

Wydarzenie PlayerLeftClickBlock jest uruchamiane za każdym razem, gdy gracz opuścił blok.  
Można go anulować, aby zapobiec wszelkim innym wydarzeniom. Jeśli gracz trzyma lewe kliknięcie, wydarzenie zostanie uruchomione ponownie, nawet jeśli zostanie anulowane. Anulowanie tego wydarzenia uniemożliwi rejestrację lewego kliknięcia, zapobiegając łamaniu bloków (choć nie w trybie kreatywnym). Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik sukcesu, niepowodzenia lub przejścia. Domyślnie wynik jest pozytywny.

## Event Class
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerLeftClickBlockEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i użyć tej nazwy.

## Event interface extensions
Zdarzenia PlayerLeftClickBlock zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter          | ZenSetter          | type                                           |
| ------------------ | ------------------ | ---------------------------------------------- |
| `hitvector`        |                    | [IVector3d](/Vanilla/World/IVector3d/)         |
| `użyj bloku`       | `użyj bloku`       | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `useitem`          | `useitem`          | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
