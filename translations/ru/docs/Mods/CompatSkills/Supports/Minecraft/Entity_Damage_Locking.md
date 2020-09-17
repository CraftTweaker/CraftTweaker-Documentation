# Заблокировать урон сущности

## Блокировка сущностей

Эта функция позволяет блокировать возможность атаки/повреждения определенных объектов.

### Синтаксис:

[Ссылка на IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Blank Пример:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Пример работы:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");