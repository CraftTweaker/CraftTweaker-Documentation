### onKillMob

| Réglage/Getter/Méthode | Noms des méthodes  | Noms      | Input/Output                                                |
|:---------------------- |:------------------ |:--------- | ----------------------------------------------------------- |
| Récupération           | getDamageSource(); | Source(); | Retourne un [IDamageSource](/Vanilla/Damage/IDamageSource/) |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onKillMob = function(event as crafttweaker.event.EntityLivingDeathEvent) {
    ...
    };