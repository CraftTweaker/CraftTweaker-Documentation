# Items:

Items is a Requirement-Type introduced by CompatSkills and allows you to gate things behind holding a specific Item/NBT-Value/Mod-Item in either your Main or Off-Hand. The Item Syntax is as follows:

    Example:
    // Adds the requirement of you holding ANY item from the specified mod.
    stack|modid
    
    // Adds the requirement of you holding the specified item with Meta 0
    stack|modid:item
    
    // Adds the requirement of you holding the specified item with the specified Meta (* = Wildcard Metadata)
    stack|modid:item:meta
    
    // Adds the requirement of you holding ANY item with the specified NBT-data
    stack||NBT as JSON
    
    // Adds the requirement of you holding ANY item from the specified mod with the specified NBT-data.
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