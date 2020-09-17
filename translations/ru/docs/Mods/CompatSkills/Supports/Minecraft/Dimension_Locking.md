# Блокировка размеров

## Блокировка размеров

Эта функция позволяет заблокировать возможность путешествия в определенные размеры, если не выполнены требования!

### Синтаксис

    Пример пусто:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    Пример:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7");