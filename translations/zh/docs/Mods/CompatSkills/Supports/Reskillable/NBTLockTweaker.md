# NBT-Lock Tweaker

## NBT锁定

NBT-锁定仅适用于Compatskills 1.4.0+，目前是最强大的功能。 您可以锁定特定的 NBT-Tags，或者只限于给定的 mod-id 或者在游戏中的每个项目。

这意味着发现包含NBT标签的任何项目都将应用于它。

### 语法：

    // 空白示例：
    mods.compatskills.NBTLock.addGenericNBTLock(IData tag, String... 已锁定)
    mods.compatskills.NBTLock.addModNBTLock(String modId, IData tag, String... 已锁定)
    
    //// 工作示例：
    // 锁定丝绸之路
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // 锁定未破坏(没有指定级别)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:greating|6");
    

这有一些强有力的影响。 这意味着您作为一个包制造商可以锁定：

- 墨盒材料
- Tinker 修饰符
- 附属机构
- 能源价值

只要你知道它使用的NBT标签，就更多了！