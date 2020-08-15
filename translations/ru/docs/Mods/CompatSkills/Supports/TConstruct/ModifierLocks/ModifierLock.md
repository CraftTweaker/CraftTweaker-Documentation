# Замок материала

## Блокировка материала

С реализацией поддержки TConstruct в CompatSkills 1.5.0. Теперь у вас есть возможность блокировать:

    - Добавление модификатора
    

Для модификаторов Конструкции

### Синтаксис:

    // Пример пусто:
    mods.compatskills.ModifierLock.addModifierLock(String identifier, String... requirements);
    
    // Пример:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");