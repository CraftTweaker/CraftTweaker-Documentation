# Artikel:

Items sind ein von CompatSkills eingeführter Anforderungs-Typ und ermöglichen es dir, Dinge hinter dem Halten eines bestimmten Gegenstands/NBT-Wertes/Mod-Item in deiner Haupt- oder Off-Hand zu verlegen. Die Artikelsyntax lautet wie folgt:

    Beispiel:
    // Fügt die Anforderung hinzu, dass Sie KEINE Elemente von der angegebenen Mod halten.
    stack|modid
    
    // Fügt die Anforderung hinzu, dass Sie das angegebene Element mit Meta 0
    stack|modid:item
    
    // Fügt die Anforderung hinzu, dass Sie das angegebene Element mit dem angegebenen Meta halten (* = Wildcard Metadaten)
    stack|modid:item:meta
    
    // Fügt die Anforderung hinzu, dass Sie KEINE Gegenstände mit den angegebenen NBT-Daten halten
    stack|||NBT als JSON
    
    // Fügt die Anforderung hinzu, dass Sie KEINE Gegenstände aus dem angegebenen Mod mit den angegebenen NBT-Daten halten.
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