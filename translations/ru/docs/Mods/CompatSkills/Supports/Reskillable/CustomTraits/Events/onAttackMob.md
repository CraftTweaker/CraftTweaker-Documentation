### onAttackMob

| Сетчат/Геттер/Метод | Имена методов      | Имена           | Input/Output                                               |
|:------------------- |:------------------ |:--------------- | ---------------------------------------------------------- |
| Геттер              | getDamageSource(); | damageSource(); | Возвращает [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| Геттер              | getAmount();       | сумма();        | Возвращает плавающий                                       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onAttackMob = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };