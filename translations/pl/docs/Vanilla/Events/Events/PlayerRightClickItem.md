# PlayerRightClickItem

Wydarzenie PlayerRightClickItem jest uruchamiane krótko przed uruchomieniem funkcjonalności przedmiotu. Nie jest strzelony jeśli gracz kieruje blokiem lub obiektem. Można je anulować, aby zapobiec wszelkim innym zdarzeniom. Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik zezwolenia, odmowy lub przejazdu. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerRightClickItemEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia PlayerRightClickItem implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
Następujące informacje mogą zostać skorygowane w tym przypadku.

| ZenGetter          | ZenSetter          | typ                                            |
| ------------------ | ------------------ | ---------------------------------------------- |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
