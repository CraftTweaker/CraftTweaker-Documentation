# Dorobek Żywotny

To wydarzenie jest uruchamiane, gdy jednostka umrze i umrze doświadczenie, co pozwala na zmianę ilości doświadczenia. Alternately, the event can be **canceled** to prevent experience from being dropped.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ivingExperienceDropEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia „LivingExperienceDrop” implementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/osoby pobierające/ustawiające:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter             | ZenSetter             | Typ                                  |
| --------------------- | --------------------- | ------------------------------------ |
| `gracz`               |                       | [IPlayer](/Vanilla/Players/IPlayer/) |
| `upuść Doświadczenie` | `upuść Doświadczenie` | odcień                               |
| `originalExperience`  |                       | odcień                               |

## Uwagi

`originalExperience` zawiera oryginalną ilość doświadczenia Vanilli. Możliwe, że `droppedExperience` kiedy to wydarzenie zostanie wystrzelone, został już zmodyfikowany.
