# カスタムスキル & 特性

## クレジット:

クレジットは、カスタムコンテンツの実装のほとんどを書くためにKindlichに出ています!

## カスタム形質:

### 実装構文:

    例:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... 要件)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTskill parentSkill, int cost, @Optional String... 要件)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... 要件)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTskill parentSkill, int cost, @Optional String... 要件)
    
    
    "traitName" VS "traitLocation" はスキルと同じです。
    
    「Crtskill parentSkill」はスキルブラケットハンドラーです。
    
    
    So a functional Example would be:
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test1 = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### ZenProperties

| 参照       | プロパティ名 | 実装        |
|:-------- |:------ | --------- |
| CrTTrait | 名前     | 以下をご覧ください |
| CrTTrait | 説明     | 以下をご覧ください |

    // Creates the trait as a variable
    var trait = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5"); 
     // Hard-Sets the name to "Test"
    
    // Hard-Sets the name to "Test"
    // 注意してください。
    trait.name = "Test"
    
    // Hard-sets the description to "Hello, Im a Description"
    // Be aware this makes localization through .lang files not possible!
    trait.description = "Hello, I'm a Description"
    

### ZenSetters/ZenGetters

| メソッドタイプ | メソッド名          | 値                          |
|:------- |:-------------- | -------------------------- |
| Setter  | setEnabled     | ブール値を取る                    |
| Getter  | getEnabled     | ブール値を返す                    |
| Getter  | getName        | トレイトのローカライズされた文字列名を返します。   |
| Getter  | getDescription | トレイトのローカライズされた文字列の説明を返します。 |
| Getter  | retrieveIcon   | リソースの場所を返します               |
| Setter  | 変更アイコン         | リソースの位置文字列を取得します。          |

### 地域化 & リソース場所の参照:

    トレイトアイコン:
    
    Either:
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

このリンクに移動して、可能なすべてのLocale-Codeを表示します！ [GamepediaのMinecraft言語ページ](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")