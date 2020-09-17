# 自定义技能 & 特性

## 积分：

感谢Kindlich撰写大部分自定义内容实现！

## 自定义特性：

### 实现语法：

    示例：
    mods.compatskills.TraitCreator.createTrait(tring traitname, int x, int y, String skilless location, int cost, @Optional String... 要求)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, int cost, @Optional String... 要求)
    mods.compatskills.TraitCreator.createNewTrait(tring traitlocation, int x, int y, String skilless location, int cost, @Optional String... 要求)
    mods.compatskills.TraitCreator.createNewTrait(tring traitlocation, int x, int y, CrTSkill parentSkill, int cost, int cost, @Opinion String... 要求)
    
    
    "特性名称" VS "特性位置" 与技能相同。
    
    "CrTSkill parentSkill" 是技能级处理器。
    
    
    所以一个功能示例将是：
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskess:banana", 1, "compatskills:banana|5");
    var test1 = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = mods. ompatskills.TraitCreateTrait("brochen:test", 2, 3, "compatskess:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreateTrait("brochen:test", 2, 3, "<skill:compatskills:banana>"compskills:banana|5");
    

### ZenProperties

| 参考       | 属性名称 | 二． 执行情况 |
|:-------- |:---- | ------- |
| CrTTrait | 名称   | 查看下     |
| CrTTrait | 描述   | 查看下     |

    // 将特性创建为变量
    var 特性= mods.compatskills.TraitCreator。 ReateTrait("test", 2, 3, "compatskess:banana", 1, "compatskills:banana|5");
    
    // Hard-将名称设置为“测试”
    // 请注意这使得无法通过 .lang 文件进行本地化！
    trait.name = "测试"
    
    // 将描述设置为“你好，我是描述”
    // 请注意这使得无法通过 .lang文件进行本地化！
    trait.description = "你好，我是一个描述"
    

### ZenSetters/ZenGetters

| 方法类型   | 方法名称    | 值             |
|:------ |:------- | ------------- |
| Setter | 启用设置    | 取一个布尔值        |
| 获取器    | get启用   | 返回一个布尔值       |
| 获取器    | getName | 返回特性的本地化字符串名称 |
| 获取器    | 获取描述    | 返回特性的本地化字符串描述 |
| 获取器    | 检索图标    | 返回资源位置        |
| Setter | 更改图标    | 使用资源位置字符串     |

### 本地化 & 资源位置参考：

    特性Icons:
    
    Either:
    
    - mods.compatskills.TraitCreateTraitCreator.createTrait(tring traitName, int x, int y, String skilling location, inter cost, @Opinion String... 要求);
        - 编程技能:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation,int x, int y, String skilles-location,int cost,@Optional String... 要求);
        - customResourceLocation:textures/unlockables/traitname.png
    
    
    本地化被放置在:
    
    - compatskills:lang/locale-Code.lang
    
    或
    
    - customResourceLocation:lang/localeCode.lang
    

前往此链接查看所有可能的 Locale-Codes！ [游戏百科的 Minecraft 语言页面](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")