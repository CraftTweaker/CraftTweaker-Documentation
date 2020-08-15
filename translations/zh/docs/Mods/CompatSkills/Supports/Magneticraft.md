# 磁力合成器

## 解释：

磁力学支持目前包括：

- 一个用于倾倒所有磁头多块字符串名称的命令。 
    - 命令为：/ct magMultiBlocks
- 使用基于Crtax的语法多块通关。

### 语法：

    空白示例：
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... 默认要求)；
    
    工作示例：
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "我害怕这太复杂对于像你这样的idiot来说！", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:harmry/plant_seed", "stage|test");