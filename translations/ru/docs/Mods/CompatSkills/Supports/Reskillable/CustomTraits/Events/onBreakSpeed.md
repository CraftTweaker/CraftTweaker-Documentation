### onBreakSpeed

| Сетчат/Геттер/Метод | Имена методов                | Имена                     | Input/Output                                           |
|:------------------- |:---------------------------- |:------------------------- | ------------------------------------------------------ |
| Геттер              | getBlockState();             | blockState();             | Возвращает [IBlockState](/Vanilla/Blocks/IBlockState/) |
| Геттер              | getBlock();                  | блок();                   | Возвращает [IBlock](/Vanilla/Blocks/IBlock/)           |
| Геттер              | getOriginalSpeed();          | originalSpeed();          | Возвращает плавающий                                   |
| Геттер              | getNewSpeed();               | newSpeed();               | Возвращает плавающий                                   |
| Setter              | setNewSpeed(float newSpeed); | newSpeed(float newSpeed); | Занимает Float                                         |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };