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
    
    // Adds the requirement of you holding the specified item with meta 0 and the specified NBT-data
    stack|modid:item|NBT as JSON
    
    // Adds the requirement of you holding the specified item with the specified Meta and the specified NBT-data
    stack|modid:item:meta|NBT as JSON
    
    
    
    // Working Examples:
    stack|minecraft
    stack|minecraft:iron_pickaxe
    stack|minecraft:iron_pickaxe:*
    
    //Needs a silk touch item
    stack||{ench:[{id: 33s}]} 
    
    //fortune tinkers tool
    stack|tconstruct|{ench:[{id: 35s}]} 
    
    stack|minecraft:iron_sword|{ench:[{id: 17s}]}
    stack|minecraft:iron_sword:*|{ench:[{id: 17s}]}