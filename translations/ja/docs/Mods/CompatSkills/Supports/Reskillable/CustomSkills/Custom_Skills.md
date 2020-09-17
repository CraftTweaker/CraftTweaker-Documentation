# カスタムスキル

## クレジット:

クレジットは、カスタムコンテンツの実装のほとんどを書くためにKindlichに出ています!

## カスタムスキル:

### 実装構文:

    例:
    mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)
    
    "createSkill" は名前リソースの場所に CompatSkills ModID を自動的に割り当てます。
    例えば:
    mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    内部でリターン:
    "compatskills:banana" スキルのリソースロケーション名として。
    
    2つ目にはModIDが割り当てられていないので、自分で挿入できます。
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### ZenProperties

| 参照       | プロパティ名 | 実装        |
|:-------- |:------ | --------- |
| CrTSkill | 名前     | 以下をご覧ください |

    // Creates the skill as a variable
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    // Hard-Sets the name to "Banana"
    // Be aware this makes localization through .lang files not possible!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| メソッドタイプ | メソッド名                 | 値                       |
|:------- |:--------------------- | ----------------------- |
| Setter  | setLevelCap           | 整数を取る                   |
| Getter  | getLevelCap           | 整数を返す                   |
| Setter  | setEnabled            | ブール値を取る                 |
| Getter  | getEnabled            | ブール値を返す                 |
| Setter  | setSkillPointInterval | 整数を取る                   |
| Setter  | setBaseLevelCost      | 整数を取る                   |
| Getter  | getBaseLevelCost      | 整数を返す                   |
| Getter  | getName               | ローカライズされた文字列名を返します      |
| Setter  | setLevelStaggering    | 文字列を取る[]、例の設定を参照してください。 |
| Getter  | getLevelStaggering    | 文字列を返します[]              |
| Setter  | setHidden             | ブール値を取る                 |
| Getter  | isHidden              | ブール値を返す                 |

### 地域化 & リソース場所の参照:

    Skill Icons:
    
    Either:
    
    - mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

このリンクに移動して、可能なすべてのLocale-Codeを表示します！ [GamepediaのMinecraft言語ページ](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")