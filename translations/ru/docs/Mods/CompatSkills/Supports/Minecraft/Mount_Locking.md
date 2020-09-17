# Блокировка монтирования

## Блоки монтирования

Эта функция позволяет вам добавлять требования к определенным объектам!

### Синтаксис

[Ссылка на IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Пустой Пример:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, строка... defaultТребования)
    
    # Пример:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")