# Poziom Lootinga

To wydarzenie jest uruchamiane za każdym razem, gdy zabija się istotę jednostki żywej w celu obliczenia poziomu plonu. Wartość ta może być zwiększona lub zmniejszona lub pozostawiona w stosunku do siebie. Wartość mogła być już zmodyfikowana przez inne wydarzenia, ale wartość oryginalna nie jest uwzględniona.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ootingLevelEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia LootingLevel zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter         | ZenSetter         | Typ                                         |
| ----------------- | ----------------- | ------------------------------------------- |
| `Poziom lootinga` | `Poziom lootinga` | odcień                                      |
| `Źródło obrażeń`  |                   | [Źródło ID](/Vanilla/Damage/IDamageSource/) |
