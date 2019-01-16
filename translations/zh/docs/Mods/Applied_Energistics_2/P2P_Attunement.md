# P2P 调谐

### 导入

    import mods.appliedenergistics2.Attunement;
    

### 用于调谐的物品

将一个物品堆或者模组 ID 设置为用于调谐到一种 P2P 通道的物品。 只有在没有找到物品堆（IItemstack）时才会使用模组 ID 寻找。

### ME P2P

    Attunement.attuneME(IItemStack IItemStack);
    Attunement.attuneME(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    
    Attunement.attuneME(&lt;appliedenergistics2:controller&gt;);
    Attunement.attuneME("actuallyadditions");
    

### 物品 P2P

    Attunement.attuneItem(IItemStack IItemStack);
    Attunement.attuneItem(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    

### 流体 P2P

    Attunement.attuneFluid(IItemStack IItemStack);
    Attunement.attuneFluid(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    

### 红石 P2P

    Attunement.attuneRedstone(IItemStack IItemStack);
    Attunement.attuneRedstone(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    

### RF P2P

    Attunement.attuneRF(IItemStack IItemStack);
    Attunement.attuneRF(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    

### EU P2P

    Attunement.attuneIC2(IItemStack IItemStack);
    Attunement.attuneIC2(String modID);
    //IItemStack 物品堆
    //modID 模组 ID
    

### 光 P2P

    Attunement.attuneLight(IItemStack IItemStack);
    Attunement.attuneLight(String modID);
    //IItemStack 物品堆
    //modID 模组 ID