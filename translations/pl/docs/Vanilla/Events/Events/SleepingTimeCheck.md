# Czas uśpienia

To wydarzenie jest uruchamiane podczas sprawdzania, czy uśpiący gracz może kontynuować uśpienie w określonym czasie. Jeśli ma **wynik** , który określa akcję.

Wynik:
- **Domyślnie**, powoduje zapoznanie się z logiką Vanilla `World::isDaytime`.
- **Zezwól**, pozwala graczowi na kontynuowanie snu niezależnie od
- **Odmowa** jest w tej instancji ***zignorowano*** i nic nie robi.

W związku z tym to wydarzenie pozwala ci zachować spanie gracza, ale nie pozwala to konkretnie powstrzymać ich przed snem.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. leepingTimeCheck`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia SleepingTimeCheck zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
