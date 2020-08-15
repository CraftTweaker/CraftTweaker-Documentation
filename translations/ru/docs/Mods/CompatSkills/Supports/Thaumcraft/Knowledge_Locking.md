# Блокировка знаний

## Свойство:

Эта функция позволяет заблокировать процесс приобретения знаний из Наблюдения или Теоретического Набора в Thaumcraft.

## Типы знаний:

Существующие типы знаний - O для наблюдения и T для теории.

## Синтаксис:

    Compatskills.Thaumcraft.addKnowledgeLock(String categoryName, StringType, String... requirement);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "T", "dim|1");