# Teleport Kresu

Wydarzenie EnderTeleport jest strzelane za każdym razem, gdy kłopot lub teleport kuriera.  
Jest on również uruchamiany za każdym razem, gdy gracz teleportuje się za pomocą perły kresowej (możliwe jest, że inne mody również wystrzeliwują to wydarzenie).

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. nderTeleportEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Wydarzenia LivingEntityUseItem implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter         | ZenSetter         | Typ                |
| ----------------- | ----------------- | ------------------ |
| `targetX`         | `targetX`         | podwójne           |
| `targetY`         | `targetY`         | podwójne           |
| `docelowy`        | `docelowy`        | podwójne           |
| `Obrażenia ataku` | `Obrażenia ataku` | zmiennoprzecinkowe |