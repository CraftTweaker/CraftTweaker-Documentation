# Mod-Lock Tsinfer

## 模式锁定

这被添加为1.2.0中的配置能力，现在已经安装了一个 CrT ZenMethod来支持它。 这也可以通过前面提到的配置完成。

Mod-Locks 允许您锁定特定模组中的所有物品应用于特定锁定。

### 语法：

    // 空白示例
    mods.compatskills.ModLock.addModLock(String modId, String... 锁定);
    
    // 工作示例:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    以上锁定将锁定来自模组"minecraft"的所有东西，锁定在"Building 4"