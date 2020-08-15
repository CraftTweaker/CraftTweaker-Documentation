# Поддержка Level-Lock

## ЗУ:

Эта функция отключает отмену события Level-Up в Reskillable. Некоторые моды, вызывающие levelUp(); метод напрямую обходит блокировки! Это включает такие модификации, как Scavenge: Reskillable и TogetherForever!

## Поддержка Level-Lock

Поддержка Level-Lock - это странная функция, появившаяся от шутки, которую Skysom сделал в ТМ один день. Эта функция полностью для тех, кто достаточно грустична для ее реализации! Это вращает прогресс на заданный уровень, а не на этот уровень!

CTSkill = [Обработчик профессионального уровня](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Синтаксис:

    // Пример пусто:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill skill, int level, String... defaultRequirements);
    
    // Пример теста:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");