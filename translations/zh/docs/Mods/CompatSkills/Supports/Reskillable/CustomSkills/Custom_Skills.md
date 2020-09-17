# 自定义技能

## 积分：

感谢Kindlich撰写大部分自定义内容实现！

## 自定义技能：

### 实现语法：

    示例：
    mods.compatskills.skillerator.createSkill(名字，String backgroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String name Location,String backgroundLocation)
    
    "createSkill" auto-assigns the ComppatSkills ModID to the name Resource location。
    例如：
    mods.compatskills.Skiller Creator.createSkillard("banana", "textures/blocks/stonebrick.png");
    
    内部返回是否会:
    "compatskills:banana" 作为技能的资源位置名称。
    
    第二个没有分配的ModID意味着您可以插入自己的ModID。
    mods.compatskills.skillator.createNewSkill("pokemon:showing", "textures/blocks/stonebrick.png")
    

### ZenProperties

| 参考       | 属性名称 | 二． 执行情况 |
|:-------- |:---- | ------- |
| CrTSkill | 名称   | 查看下     |

    // 将技能创建为变量
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick. ng");
    
    // 硬件将名称设置为“Banana”
    // 请注意这使得无法通过 .lang文件进行本地化！
    banana.name = “Banana”
    

### ZenSetters/ZenGetters

| 方法类型   | 方法名称                  | 值                   |
|:------ |:--------------------- | ------------------- |
| Setter | setLevelCap           | 取一个整数               |
| 获取器    | getLevelCap           | 返回整数                |
| Setter | 启用设置                  | 取一个布尔值              |
| 获取器    | get启用                 | 返回一个布尔值             |
| Setter | setSkillPointInterval | 取一个整数               |
| Setter | setBaseLevelCost      | 取一个整数               |
| 获取器    | getBaseLevelCost      | 返回整数                |
| 获取器    | getName               | 返回本地化字符串名称          |
| Setter | setLevelStaggering    | 使用一个字符串[]，查看配置以获取示例 |
| 获取器    | 获取LevelStaging        | 返回字符串 []            |
| Setter | setHidden             | 取一个布尔值              |
| 获取器    | isHidden              | 返回一个布尔值             |

### 本地化 & 资源位置参考：

    Skill Icons：
    
    Either：
    
    - mods.compatskills.Skillator.createSkillates技能(名字, String backgroundlocation)；
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.Skillcreator。 reateNewSkills (String nameLocation，String backgroundLocation)；
        - customResourceLocation:textures/skills/skillname.png
    
    
    Localizations are placed in
    
    - compatskills:lang/locale-Code.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

前往此链接查看所有可能的 Locale-Codes！ [游戏百科的 Minecraft 语言页面](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")