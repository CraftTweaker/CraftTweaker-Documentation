# Блокировка еды

## Свойство:

Блокировка еды - новый тип блокировки, и позволяет упаковывать авторов блокировать способность еды с определенными ценностями голода и насыщенности за комплекс требований. Это имеет некоторые потенциально интересные приложения вместе с RecipeStages, GameStages и наша недавно добавленная [функция изменения навыка](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) Это в теории позволяет набору авторов создать систему, где в игроках могут есть только пищу, которую они могут создавать, а затем разрешите закрепить необходимые этапы создания за уровнями навыков.

## Синтаксис голода:

    My name is Yahoo! My name is Yahoo... requirements);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## Синтаксис насыщенности:

    My name is Yahoo! My name is Yahoo... requirements;
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");