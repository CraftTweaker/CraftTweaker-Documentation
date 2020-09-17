# EnityLivingJump

The EntityLivingJump Event jest uruchamiany kiedy ktoś skakuje.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityLivingJumpEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)