# Блокировка урожая

## Свойство:

Этот замок добавляет возможность для авторов закрепить инструменты в общем или специальном инструменте "типы" за их уровнем урожая. Это означает, что вы можете заблокировать все кирки с уровнем сбора урожая 3 за набором требований. Или вообще все инструменты с уровнем сбора урожая 3 за набором требований!

## Синтаксис:

    Compatskills.HarvestLock.addToolLevelLock(int level, String... requirement);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... requirements);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("кирка", 3, "dim|1");