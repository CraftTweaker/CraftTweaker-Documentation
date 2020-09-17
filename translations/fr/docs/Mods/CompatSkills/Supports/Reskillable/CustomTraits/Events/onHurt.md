### format@@0 onHurt

| Réglage/Getter/Méthode | Noms des méthodes  | Noms       | Input/Output                                                |
|:---------------------- |:------------------ |:---------- | ----------------------------------------------------------- |
| Récupération           | getDamageSource(); | Source();  | Retourne un [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| Récupération           | getAmount();       | montant(); | Renvoie un Float                                            |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onHurt = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };