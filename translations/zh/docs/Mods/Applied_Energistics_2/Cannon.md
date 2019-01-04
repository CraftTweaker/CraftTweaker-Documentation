# 物质炮（Cannon）

### 导入

    import mods.appliedenergistics2.Cannon;
    

### 添加

为物质炮添加弹药类型。 重量指的是材料的（大致）原子质量。

    Cannon.registerAmmo(IItemStack ammo, double weight);
    
    Cannon.registerAmmo(&lt;minecraft:bone&gt;, 40.07);
    //ammo 弹药
    //weight 重量