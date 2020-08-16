# Éléments :

Les objets sont des types d'exigences introduits par CompatSkills et vous permettent de porter des objets derrière la mainmise d'un objet spécifique/NBT-Valeur/Mod-Item dans votre Main ou Off-Hand. La syntaxe de l'objet est la suivante:

    Exemple:
    // Ajoute l'exigence que vous déteniez N'IMPORTE QUEL élément du mod spécifié.
    stack|modid
    
    // Ajoute l'exigence que vous mainteniez l'élément spécifié avec la pile Meta 0
    stack|modid:item
    
    // Ajoute l'exigence que vous déteniez l'élément spécifié avec la Meta (* = Meta Metadata Wildcard)
    stack|modid:item:meta
    
    // Ajoute l'exigence que vous déteniez un élément avec la pile de données NBT-
    spécifiée||NBT en JSON
    
    // Ajoute l'exigence que vous déteniez n'importe quel élément du mod spécifié avec les données NBT spécifiées.
    stack|modid|NBT as JSON
    
    // Ajoute l'obligation de détenir l'élément spécifié avec meta 0 et les données NBT spécifiées
    stack|modid:item|NBT as JSON
    
    // Ajoute l'obligation de détenir l'élément spécifié avec meta 0 et les données NBT spécifiées
    stack|modid:item:meta|NBT as JSON
    
    
    
    // Exemples de réalisation:
    stack|minecraft
    stack|minecraft:iron_pickaxe
    stack|minecraft:iron_pickaxe:*
    
    //Besoin d'un item de toucher de soie
    stack||{ench:[{id: 33s}]} 
    
    //outil de tinkers fortune
    stack|tconstruct|{ench:[{id: 35s}]} 
    
    stack|minecraft:iron_sword|{ench:[{id: 17s}]}
    stack|minecraft:iron_sword:*|{ench:[{id: 17s}]}