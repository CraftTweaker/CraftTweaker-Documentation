### onMobDrops

| Сетчат/Геттер/Метод | Имена методов                    | Имена                            | Input/Output                                                           |
|:------------------- |:-------------------------------- |:-------------------------------- | ---------------------------------------------------------------------- |
| Геттер              | getDamageSource();               | источник повреждения             | Возвращает [IDamageSource](/Vanilla/Damage/IDamageSource/)             |
| Метод               | addItem(IItemStack item);        | addItem(IItemStack item);        | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                      |
| Метод               | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem); | Захват [предмета предмета](/Vanilla/Entities/IEntityItem/)             |
| Геттер              | getLootingLevel();               | уровень добычи                   | Возвращает целое число                                                 |
| Геттер              | getIsRecentlyHit();              | Недавно                          | Возвращает логическое значение                                         |
| Геттер              | getDrops();                      | drops();                         | Возвращает список [элементов элемента](/Vanilla/Entities/IEntityItem/) |
| Setter              | setDrops();                      | drops(Список<ientityitem> дам);  | Занят [предмета](/Vanilla/Entities/IEntityItem/)                       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };