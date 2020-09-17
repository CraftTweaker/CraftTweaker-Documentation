# EntityLivingDeath

Wydarzenie EntityLivingDeath jest uruchamiane za każdym razem, gdy jednostka ma zamiar umrzeć.  
Można je anulować, aby umożliwić jednostce życie.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityLivingDeathEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter      | Typ                                         |
| -------------- | ------------------------------------------- |
| Źródło obrażeń | [Źródło ID](/Vanilla/Damage/IDamageSource/) |