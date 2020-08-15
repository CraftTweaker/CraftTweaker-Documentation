# 沉浸式工程

## 积分：

感谢Skysom帮助引导我完成这个任务，并允许我从MultiblockStages重编他的一些代码！

## 解释：

“沉浸式工程支持”目前包括：

- 倾倒所有 IE 多块字符串名称的命令。 
    - 命令为：/ct iMultiBlocks
- 使用基于Crtax的语法多块通关。

### 语法：

    空白示例：
    mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, String... 默认要求)；
    
    工作示例：
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "我害怕这太复杂对于像你这样的idiot来说！""reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:harmry/plant_seed");