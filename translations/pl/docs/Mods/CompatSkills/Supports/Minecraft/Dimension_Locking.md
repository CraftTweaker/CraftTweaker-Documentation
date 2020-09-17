# Blokowanie Wymiaru

## Blokowanie Wymiaru

Ta funkcja pozwala na zablokowanie możliwości przemieszczania się do określonych wymiarów, chyba że spełnione są wymagania!

### Składnia

    Pusty przykład:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... domyślne wymagania);
    
    Przykład:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7");