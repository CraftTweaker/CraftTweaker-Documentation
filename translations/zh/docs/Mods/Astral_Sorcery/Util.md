# 其他功能（Util）

其他功能相关包允许你通过传入的参数获取指定的材料（[IIngredient](/Vanilla/Variable_Types/IIngredient/)）。

## 导入相关包

万一你需要导入相关包，方法如下：

    import mods.astralsorcery.Utils;
    

## 返回水晶石的材料

以下方法会返回包含着满足所有指定条件的星辉魔法水晶石的材料变量。

    //Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);
    //hasToBeCelestial 需要天体水晶
    //hasToBeAttuned 需要共鸣的水晶石
    
    val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient