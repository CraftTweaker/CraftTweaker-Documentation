# Compétences personnalisées

## Crédits :

Les crédits sont distribués à Kindlich pour la rédaction de la plupart de l'implémentation de Contenu Personnalisé !

## Compétences personnalisées :

### Syntaxe d'implémentation :

    Exemples:
    mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)
    
    "createSkill" assigne automatiquement le ModID CompatSkills à l'emplacement de la ressource.
    Donc par exemple :
    mods.compatskills.SkillCreator.createSkill("banane", "textures/blocks/stonebrick.png");
    
    reviendrait en interne :
    "compatskills:banana" comme le nom de la ressource pour la compétence.
    
    Le second n'a pas de ModID assigné, ce qui signifie que vous pouvez insérer le vôtre.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### Propriétés Zen

| Référence | Nom de la propriété | Implémentation  |
|:--------- |:------------------- | --------------- |
| CrTSkill  | Nom                 | Voir ci-dessous |

    // Crée la compétence en tant que variable
    var banana = mods.compatskills.SkillCreator.createSkill("banane", "textures/blocks/stonebrick. ng");
    
    // Hard-Sets le nom à "Banana"
    // Soyez conscient que cela rend la localisation via des fichiers .lang impossible !
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Type de méthode | Nom de la méthode          | Valeurs                                         |
|:--------------- |:-------------------------- | ----------------------------------------------- |
| Setter          | setLevelCap                | Prend un nombre entier                          |
| Récupération    | getLevelCap                | Renvoie un entier                               |
| Setter          | Activé                     | Prend un booléen                                |
| Récupération    | Activé                     | Renvoie un booléen                              |
| Setter          | setSkillPointInterval      | Prend un nombre entier                          |
| Setter          | setBaseLevelCost           | Prend un nombre entier                          |
| Récupération    | getBaseLevelCost           | Renvoie un entier                               |
| Récupération    | getName                    | Retourne le nom de la chaîne localisée          |
| Setter          | setLevelStaggering         | Prend une chaîne[], Voir Config pour un exemple |
| Récupération    | format@@0 getLevelStagging | Renvoie une chaîne[]                            |
| Setter          | setHidden                  | Prend un booléen                                |
| Récupération    | isHidden                   | Renvoie un booléen                              |

### Localisation & Références d'emplacement de ressource :

    Icônes de compétences :
    
    Soit :
    
    - mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skillname.png
    
    
    Localizations sont placées dans:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

Allez à ce lien pour voir tous les codes locaux possibles! [Page de langue Minecraft de Gamepedia](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")