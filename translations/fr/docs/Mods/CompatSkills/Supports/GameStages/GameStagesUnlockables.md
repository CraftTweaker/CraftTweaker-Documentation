# Stage-Déverrouillables

## Déverrouillables

Cette partie du support de GameStages se concentrera sur la forme suivante. Aka "Dummy Traits" pour débloquer GameStages.

## Informations sur les ressources:

Lors de la création d'une nouvelle caractéristique factice, vous remarquerez qu'il manque quelques choses:

- Nom non localisé
- Description non localisée
- Aucune icône n'est présente

Cela est dû à ces choses qui nécessitent des ressources. À l'étape actuelle, CompatSkills ne fournit pas la capacité de fournir ces compétences nativement. Il y a quelques moyens de contourner ce problème:

- Utilisez BASE qui est livré avec son propre chargeur de ressources (ne fonctionne que si ContentTweaker est présent en raison de la façon dont BASE fonctionne).
- Utiliser ResourceLoader par Lumien.

La localisation est assez directe.

    assets/compatskills/lang/fr_us.lang
    
    fr_us.lang = Traduction anglaise
    

Cependant le chemin de texture de l'icône de trait est le suivant :

    assets/compatskills/textures/unlockables/name.png
    
    Donc si le nom est "banane", le chemin serait comme suit:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Syntaxe :

    Exemple vierge :
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int x, int y, String skillName, int cost, @Optional String... defaultRequirements);
    
    Exemple(s):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:gathering", 3, "trait|compatskills:b");