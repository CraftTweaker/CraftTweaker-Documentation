### onKillMob

| Сетчат/Геттер/Метод | Имена методов      | Имена           | Input/Output                                               |
|:------------------- |:------------------ |:--------------- | ---------------------------------------------------------- |
| Геттер              | getDamageSource(); | damageSource(); | Возвращает [IDamageSource](/Vanilla/Damage/IDamageSource/) |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onKillMob = function(event as crafttweaker.event.EntityLivingDeathEvent) {
    ...
    };