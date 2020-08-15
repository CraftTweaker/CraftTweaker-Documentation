# SleepingLocationCheck

To wydarzenie jest uruchamiane podczas sprawdzania, czy uśpiący gracz może nadal uśpić w bieżącej lokalizacji. Jeśli ma **wynik** , który określa akcję.

Wynik:
- **Domyślnie**, zwraca domyślną odpowiedź Vanilla znalezioną w kafelku
- **Zezwól**, pozwala graczowi na kontynuowanie snu niezależnie od
- **Odmowa** jest w tej instancji ***zignorowano*** i nic nie robi.

Tak więc to wydarzenie pozwala ci zachować spanie gracza, ale nie pozwala na obejście domyślnej logiki łóżka.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. leepingLocationCheck`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia SleepingLocationCheck implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawienia:

- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
