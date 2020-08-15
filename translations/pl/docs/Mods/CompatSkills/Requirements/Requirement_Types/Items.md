# Elementy:

Przedmioty są wymaganymi typami wprowadzonymi przez CompatSkills i umożliwiają bramkowanie rzeczy za trzymaniem określonego przedmiotu/NBT-Value/Mod-Item w głównym lub wyłączonym miejscu. Składnia elementu jest następująca:

    Przykład:
    // Dodaje wymaganie, aby trzymać JAKO element z określonego modu.
    stack|modid
    
    // Dodaje wymóg trzymania określonego przedmiotu w Meta 0
    stack|modid:item
    
    // Dodaje wymóg trzymania określonego przedmiotu z określonym Meta (* = Metadata)
    stack|modid:item:meta
    
    // Dodaje wymóg trzymania produktu z określonym stosem NBT
    .||NBT jako JSON
    
    // Dodaje wymóg trzymania produktu z określonego modu z określonymi danymi NBT.
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