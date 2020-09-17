# Compétences & Caractéristiques personnalisées

## Crédits :

Les crédits sont distribués à Kindlich pour la rédaction de la plupart de l'implémentation de Contenu Personnalisé !

## Caractéristiques personnalisées :

### Syntaxe d'implémentation :

    Exemples:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... exigences)
    
    
    "traitName" VS "traitLocation" est le même que dans les compétences.
    
    « CrTSkill parentSkill » est le maître de la fourche de compétences.
    
    
    Donc un exemple fonctionnel serait :
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test1 = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = mods. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### Propriétés Zen

| Référence | Nom de la propriété | Implémentation  |
|:--------- |:------------------- | --------------- |
| CrTTrait  | Nom                 | Voir ci-dessous |
| CrTTrait  | Libellé             | Voir ci-dessous |

    // Crée le trait en tant que variable
    var trait = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    // Hard-Définit le nom à "Test"
    // Sachez que cela rend la localisation via des fichiers .lang impossible !
    trait.name = "Test"
    
    // Hard-Sets la description à "Bonjour, je suis une Description"
    // Soyez conscient que cela rend la localisation à travers des fichiers .lang impossible !
    trait.description = "Bonjour, je suis une Description"
    

### ZenSetters/ZenGetters

| Type de méthode | Nom de la méthode      | Valeurs                                                      |
|:--------------- |:---------------------- | ------------------------------------------------------------ |
| Setter          | Activé                 | Prend un booléen                                             |
| Récupération    | Activé                 | Renvoie un booléen                                           |
| Récupération    | getName                | Retourne le nom de la chaîne localisée de la Caractéristique |
| Récupération    | Obtenir la description | Retourne la description de la Trait de la chaîne localisée   |
| Récupération    | Récupérer l'icône      | Renvoie un emplacement de ressource                          |
| Setter          | changer d'icône        | Prend une chaîne d'emplacement de ressource                  |

### Localisation & Références d'emplacement de ressource :

    Icônes de Caractéristiques :
    
    Soit :
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... exigences);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Les localisations sont placées dans:
    
    - compatskills:lang/localeCode.lang
    
    ou
    
    - customResourceLocation:lang/localeCode.lang
    

Allez à ce lien pour voir tous les codes locaux possibles! [Page de langue Minecraft de Gamepedia](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")