# MobGriefing

To wydarzenie jest uruchamiane za każdym razem, gdy pojawi się potencjalne griefowanie potworów. Ma **wynik** , który określa, czy występuje zachowanie domyślne, czy nie:

- **zezwól**: griefing jest dozwolony
- **blokuj**: griefing jest zablokowany
- **domyślnie**: griefing występuje zgodnie z logiką Vanilli.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. obGriefingEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
MobGriefing Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
