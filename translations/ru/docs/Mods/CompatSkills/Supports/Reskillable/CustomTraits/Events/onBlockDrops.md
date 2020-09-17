### onBlockDrops

| Сетчат/Геттер/Метод | Имена методов                     | Имена                          | Input/Output                                               |
|:------------------- |:--------------------------------- |:------------------------------ | ---------------------------------------------------------- |
| Геттер              | getDropChance();                  | dropChance();                  | Возвращает плавающий                                       |
| Setter              | setDropChance(плавающий капли);   | dropChance(float dropChance);  | Занимает Float                                             |
| Геттер              | getFortuneLevel();                | fortuneLevel();                | Возвращает целое число                                     |
| Геттер              | getDrops();                       | drops();                       | Возвращает список [IItemStack](/Vanilla/Items/IItemStack/) |
| Setter              | setDrops(Список<iitemstack> дам); | drops(Список<iitemstack> дам); | Взял в список [IItemStack](/Vanilla/Items/IItemStack/)     |
| Метод               | addItem(IItemStack itemStack);    | addItem(IItemStack itemStack); | Takes an [IItemStack](/Vanilla/Items/IItemStack/)          |
| Геттер              | isSilkTouch();                    | шелковое Touch();              | Возвращает логическое значение                             |
| Геттер              | isPlayer();                       | isPlayer();                    | Возвращает логическое значение                             |
| Геттер              | getPlayer();                      | игрок();                       | Возвращает [IPlayer](/Vanilla/Players/IPlayer/)            |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };