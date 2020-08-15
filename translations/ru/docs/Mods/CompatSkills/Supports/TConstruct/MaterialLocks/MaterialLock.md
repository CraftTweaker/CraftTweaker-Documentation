# Замок материала

## Блокировка материала

С реализацией поддержки TConstruct в CompatSkills 1.5.0. Теперь у вас есть возможность блокировать:

    - Создание инструмента
    - Часть создания
    - Замена части
    

Материалы для Конструкции Тинкера.

### Синтаксис:

    // Пример пусто:
    mods.compatskills.MaterialLock.addMaterialLock(String identifier, строка... requirements);
    
    // Пример:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");