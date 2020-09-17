# EntityLivingFall

Wydarzenie EntityLivingFall jest uruchamiane za każdym razem, gdy obiekt jest ustawiony na upadek.  
Można go anulować w celu spowodowania upadku obiektu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityLivingFallEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter       | ZenSetter       | Typ                |
| --------------- | --------------- | ------------------ |
| renta           | renta           | zmiennoprzecinkowe |
| Mnożnik obrażeń | Mnożnik obrażeń | zmiennoprzecinkowe |