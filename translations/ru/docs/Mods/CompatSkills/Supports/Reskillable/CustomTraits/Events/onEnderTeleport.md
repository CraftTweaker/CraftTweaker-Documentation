### ЭндерТелепорт

| Сетчат/Геттер/Метод | Имена методов                        | Имена                            | Input/Output         |
|:------------------- |:------------------------------------ |:-------------------------------- | -------------------- |
| Геттер              | getTargetX();                        | targetX();                       | Возвращает двойной   |
| Setter              | setTargetX(double targetX);          | targetX(double targetX);         | Занимает двойной     |
| Геттер              | getTargetY();                        | targetY();                       | Возвращает двойной   |
| Setter              | setTargetY(двойная цель);            | targetY(double targetY);         | Занимает двойной     |
| Геттер              | getTargetZ();                        | targetZ();                       | Возвращает двойной   |
| Setter              | setTargetZ(double targetZ));         | целевой Z(двойная цель);         | Занимает двойной     |
| Геттер              | getAttackDamage();                   | наступительный урон();           | Возвращает плавающий |
| Setter              | setAttackDamage(float attackDamage); | Урон при атаке (плавающий урон); | Занимает Float       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };