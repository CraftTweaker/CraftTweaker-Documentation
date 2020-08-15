# Articoli:

Gli elementi sono un requisito di tipo introdotto da CompatSkills e consente di cancellare le cose dietro tenere un elemento specifico/NBT-Value/Mod-Item nel vostro Main o Off-Hand. La sintassi della voce è la seguente:

    Esempio:
    // Aggiunge il requisito di avere QUALSIASI elemento dal mod specificato.
    stack<unk> modid
    
    // Aggiunge il requisito di tenere l'elemento specificato con Meta 0
    stack<unk> modid:item
    
    // Aggiunge il requisito di tenere l'elemento specificato con il Meta specificato (* = Wildcard Metadata)
    stack<unk> modid:item:meta
    
    // Aggiunge il requisito di tenere in mano qualsiasi elemento con i dati NBT-specificati
    stack<unk> <unk> <unk> NBT come JSON
    
    // Aggiunge il requisito di tenere in mano ANY elemento dalla mod specificata con i dati NBT-specificati.
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