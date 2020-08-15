# 项目：

项目是由 Compatsky 引入的要求类型，允许您在您的主或非主体中将持有特定项目/NBT值/模式项目的背后门。 项目语法如下：

    示例：
    // 添加您从指定的模组持有任何物品的要求。
    moded
    
    // 添加您使用Meta 0
    stack|修改：项目
    
    // 添加使用指定元数据持有指定项目的要求
    stack|修改：您使用指定元数据持有指定项目的要求 
     stack|修改：item:meta
    
    // 添加您使用指定的 NBT-数据持有指定项目的要求
    stack|NBT 为 JSON
    
    // 添加您使用指定模组使用指定的 NBT数据持有指定项目的要求
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