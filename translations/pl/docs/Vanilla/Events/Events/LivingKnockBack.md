# LivingKnockback

To wydarzenie jest uruchamiane za każdym razem, gdy dany podmiot jest zrzucony. Wydarzenie jest **anulowalne** i to uniemożliwi odrzucenie obiektu. Alternatywnie można skorygować siłę odrzutu poza współczynnikami X i Z.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ivingKnockBackEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia LivingKnockBack zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter           | ZenSetter   | Typ                                   |
| ------------------- | ----------- | ------------------------------------- |
| `napastnik`         | `napastnik` | [IEntity](/Vanilla/Entities/IEntity/) |
| `oryginalny Ataker` |             | [IEntity](/Vanilla/Entities/IEntity/) |
| `siła`              | `siła`      | zmiennoprzecinkowe                    |
| `oryginalna Siła`   |             | zmiennoprzecinkowe                    |
| `stosunek`          | `stosunek`  | podwójne                              |
| `stosunek`          | `stosunek`  | podwójne                              |
| `oryginalRatioX`    |             | podwójne                              |
| `oryginalRatioZ`    |             | podwójne                              |

## Uwagi

Kiedy wydarzenie się pojawi, możliwe jest, że `atakujący`, `siła`, lub różny współczynnik ``s już został zmodyfikowany. Te wartości można znaleźć w `oryginalnych*` zmiennych.
