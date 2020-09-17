# Soutien au rituel

## Rituels :

Ceci annulera l'activation d'un rituel si les conditions spécifiques ne sont pas remplies pour l'activation des rituels.

### Commande:

Il y a actuellement une commande en jeu pour le dumping de toutes les chaînes de rituels à utiliser par le gestionnaire de rituel. La commande est : /ct ritualDump et il affichera toutes les chaînes rituelles dans le "CraftTweaker.log".

### Pré-1.4.0:

#### Syntaxe :

    Exemple:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Exemple:
    mods.compatskills.RitualHandler.addRitualLock("Lorsque le rituel est activé, vous n'obtenez pas le résultat attendu", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### Post-1.4.0:

Depuis CompatSkills 1.4.0, quelques nouvelles méthodes ZenMethods ont été ajoutées ainsi que quelques modifications ont été apportées à la syntaxe existante. Nous avons également corrigé un problème qui a fait que le support Rituel et le support de liaison ne fonctionnaient pas correctement !

#### Syntaxe :

    Exemple:
    mods.compatskills.RitualHandler.addRitualLock(String ritual, String... exigences);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... exigences);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);
    
    Exemple:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### Message d'erreur

Comme pour le support de la liaison, le message d'erreur a été déplacé vers une chaîne localisable au lieu d'une chaîne de caractères dans la méthode CrT. Cela permettra aux auteurs des packs de ressources de localiser et de modifier les chaînes comme ils le souhaiteraient beaucoup plus facilement.

    compatskills.bloodmagic.ritualError=Lorsque le rituel est activé, vous n'obtenez pas le résultat escompté
    

D'autres modifications sont par exemple que le message d'erreur par défaut s'affiche maintenant dans le cadre d'un message de discussion de statut pour le joueur. Cela signifie que le message n'est affiché qu'au joueur et n'est pas imprimé dans le chat pour que tout le monde puisse le voir. Cela signifie également qu'il s'affichera maintenant en même temps que les exigences dans le chat. Ce qui permet au joueur d'identifier plus facilement ce qui lui manque dans le cadenas.