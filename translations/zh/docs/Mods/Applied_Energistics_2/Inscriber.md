# 压印器（Inscriber）

### 导入

    import mods.appliedenergistics2.Inscriber;
    

### 添加配方

当 `inscribe（压印）` 布尔值为 真 时，将不会消耗底部和顶部物品。

    Inscriber.addRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);
    //output 输出
    //input 输入
    //inscribe 压印
    //topInbut 顶部输入（可选）
    //bottomInput 底部输入（可选）
    
    //将鸡蛋变成生成 凋零骷髅，不消耗凋零骷髅头颅
    Inscriber.addRecipe(&lt;minecraft:spawn_egg:5&gt;, &lt;minecraft:egg&gt;, true, &lt;minecraft:skull:1&gt;);
    
    //用面包、可可豆和糖制成曲奇。 消耗所有输入的物品
    Inscriber.addRecipe(&lt;minecraft:cookie&gt;, &lt;minecraft:minecraft:bread&gt;, false, &lt;minecraft:dye:3&gt;, &lt;minecraft:sugar&gt;);
    

### 移除配方

    Inscriber.removeRecipe(IItemStack output);
    //output 输出
    
    //移除硅板的配方
    Inscriber.removeRecipe(&lt;appliedenergistics2:material:20&gt;);