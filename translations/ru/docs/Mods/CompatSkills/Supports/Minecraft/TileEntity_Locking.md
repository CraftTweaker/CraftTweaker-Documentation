# Точка блокировки сущности

## Толстые блоки сущностей

Эта функция позволяет вам блокировать возможность взаимодействия с определенными Tile-Entities.

### Синтаксис:

    // Пример пустых
    mods.compatskills.TileEntityLock.addTileEntityLock(Имя тайл... locked);
    
    // Пример работы
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");