# Блокировка приручения

## Блокировка животных

Эта функция позволяет вам добавлять требования в привязку определенных объектов.

### Синтаксис

[Ссылка на IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Пустой Пример:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, строка... defaultТребования);
    
    # Пример:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");