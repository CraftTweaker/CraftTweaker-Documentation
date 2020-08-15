# Элементы:

Предметы - это требуемый тип, представленный CompatSkills и позволяющий вращать вещи, стоящие за хранением конкретного предмета/NBT-Value/Mod-Item в вашем главном или вне помещений. Пункт синтаксис является следующим:

    Пример:
    // Добавляет требование о том, что вы имеете ЛЮБОЙ элемент из указанного мода.
    stack|modid
    
    // Добавляет требование о наличии указанного элемента с Meta 0
    stack|modid:item
    
    // Добавляет требование о наличии указанного элемента с указанным Meta (* = Wildcard Metadata)
    stack|modid:item:meta
    
    // Добавляет требование о том, чтобы вы обладали ЛЮБЫМ пунктом с указанными NBT-данными
    stack|||NBT as JSON
    
    // Добавляет требование о том, что вы держите ЛЮБЫЙ элемент из указанного мода с указанными NBT-данными.
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