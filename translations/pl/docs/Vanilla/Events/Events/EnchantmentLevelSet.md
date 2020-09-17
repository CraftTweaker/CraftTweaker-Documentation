# Zdarzenie ZaklęciaPoziomów

Wydarzenie EnchantmentLevelSet jest uruchamiane, gdy poziomy trzech potencjalnych zaklęć są generowane w tabeli zaklęć.

## Uwagi

`event.enchantRrow` zawiera listę wiersza (1-3) tabeli zaklęć, podczas gdy `event.original` reprezentuje oryginalny poziom wiersza. `event.power` jest skumulowaną wartością półek książek otaczających tabelę zaklęć, podczas gdy `zdarzenie.element` jest przedmiotem, który jest zaklęty.

`event.level` może być arbitralnie modyfikowany do wartości pomiędzy 0 & 30.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. nchantmentLevelSetEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia EnchantmentLevelSet zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter           | ZenSetter | Typ zwrotu                               |
| ------------------- | --------- | ---------------------------------------- |
| `świat`             |           | [IWorld](/Vanilla/World/IWorld/)         |
| `zaklęty wiersz`    |           | odcień                                   |
| `moc`               |           | odcień                                   |
| `element`           |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `oryginalny poziom` |           | odcień                                   |
| `poziom`            | `poziom`  | odcień                                   |
