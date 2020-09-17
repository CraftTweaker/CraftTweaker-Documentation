# Blok życia

To wydarzenie jest uruchamiane za każdym razem, gdy Wither lub Smok Kresu próbuje zniszczyć bloki lub gdy zombie próbują złamać drzwi. To wydarzenie jest **anulowalne**, a jeśli zostanie anulowane, blok nie zostanie uszkodzony.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ivingDestroyBlockEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia LivingDestroyBlock zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter     | ZenSetter | Typ                                          |
| ------------- | --------- | -------------------------------------------- |
| `województwo` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |

