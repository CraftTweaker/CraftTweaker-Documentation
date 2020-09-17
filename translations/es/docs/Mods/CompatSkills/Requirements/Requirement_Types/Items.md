# Elementos:

Los artículos es un tipo de requerimiento introducido por CompatSkills y le permite poner las cosas detrás de la posesión de un ítem/NBT-Valor/Mod-Item en su principal o fuera de mano. La sintaxis del artículo es la siguiente:

    Ejemplo:
    // Agrega el requisito de sostener CUALQUIER elemento del mod especificado.
    stack|modid
    
    // Añade el requisito de mantener el elemento especificado con Meta 0
    stack|modid:item
    
    // Añade el requisito de mantener el elemento especificado con el Meta especificado (* = Wildcard Metadata)
    stack|modid:item:meta
    
    // Añade el requisito de mantener cualquier elemento con el NBT-data
    stack||NBT como JSON
    
    // Añade el requisito de mantener cualquier elemento desde el mod especificado con los datos NBT.
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