### format@@0 onEnderTeleport

| Réglage/Getter/Méthode | Noms des méthodes                              | Noms                                             | Input/Output      |
|:---------------------- |:---------------------------------------------- |:------------------------------------------------ | ----------------- |
| Récupération           | getTargetX();                                  | targetX();                                       | Renvoie un double |
| Setter                 | setTargetX(double targetX);                    | targetX(double targetX);                         | Prend un double   |
| Récupération           | getTargetY();                                  | targetY();                                       | Renvoie un double |
| Setter                 | setTargetY(double cible);                      | targetY(double cible) ;                          | Prend un double   |
| Récupération           | getTargetZ();                                  | targetZ();                                       | Renvoie un double |
| Setter                 | setTargetZ(double targetZ));                   | targetZ(double targetZ);                         | Prend un double   |
| Récupération           | getAttackDamage();                             | Dégâts d'attaque();                              | Renvoie un Float  |
| Setter                 | setAttackDamage(dégâts d'attaques flottants) ; | Dégâts d'attaque (dégâts d'attaques flottants) ; | Prend un flottant |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };