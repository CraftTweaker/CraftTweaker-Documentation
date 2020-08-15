# Widoczność gracza

To wydarzenie jest wystrzelone, aby określić widoczność gracza, tj. czy są one wystarczająco bliskie, aby być zauważonym przez atakującego. Wynik tego wydarzenia jest używany do obliczania (z modyfikatorami z Vanilla Minecraft do skradania, itp) zasięg, jaki gracz może dotrzeć do stworzenia, zanim to stworzenie je zobaczy.

Podczas gdy może to być użyte do zwiększenia zasięgu widoczności (jeśli został zmniejszony o Minecraft lub inny mod), nie można go zwiększyć powyżej jej maksymalnej wartości (standardowa odległość docelowa).

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerVisibilityEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia PlayerVisibilityEvent zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter    | ZenSetter              | Typ         |
| ------------ | ---------------------- | ----------- |
| `widoczność` |                        | podwójne    |
|              | `ModyfikacjWidoczność` | Zob. uwaga. |

## Uwaga

Ta wartość nie może być bezpośrednio ustawiona. Wywołanie `modifyVisibility` wartością podwójną zastąpi modyfikator wynikiem `modyfikacji * podwójnej wartości`.
