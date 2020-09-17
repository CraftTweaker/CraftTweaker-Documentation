# Zbiornik

## rejestratorZbiornik

| Typ                   | Typ danych                                   |
| --------------------- | -------------------------------------------- |
| Identyfikator nazwy   | Ciąg znaków                                  |
| Płyn                  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Minimalny rozmiar     | Liczba całkowita                             |
| Maksymalny rozmiar    | Liczba całkowita                             |
| Szybkość uzupełnienia | Liczba całkowita                             |
| Waga                  | Liczba całkowita                             |

### Waga

Masa to ważona szansa na pocisk zawierający ten konkretny zbiornik płynu. Masa jest liczona jak w X w sumie

Więc jeśli masz 5 wartości zbiornika na: 5, 5, 6, 8, 10

Wtedy każdy odpowiedni wpis będzie miał ważoną szansę:

    5 w 34
    5 w 34
    6 w 34
    8 w 34
    10 w 34
    

### Przykład kodu:

```zenscript
mods.immersivePetum.Reservoir.registerReservoir(nazwa ciągu, płyn ILiquidStack minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum um.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```