# ステージのロック解除

## ロック解除可能

GameStagesサポートのこの部分は、後のフォームに焦点を当てます。 ゲームステージをアンロックするためのAka "Dummy Traits"。

## リソース情報:

新しいダミー特性を作成するとき、いくつかの不足していることに気づくでしょう:

- 非ローカライズ名
- ローカライズされていない説明
- アイコンがありません

これはリソースを必要とするものが原因です。 現在の段階では、コンパットスキルは、ネイティブにこれらを提供する能力を提供していません。 これにはいくつかの方法があります

- 独自のリソース・ローダーが付属するBASEを使用してください(BASEの動作によりContentTweakerが存在する場合にのみ動作します)。
- LumienがResourceLoader を使用します。

ローカリゼーションはかなり簡単に進みます。

    assets/compatskills/lang/en_us.lang
    
    en_us.lang = 英語の翻訳
    

ただし、トレイトアイコンのテクスチャパスは以下の通りです。

    assets/compatskills/textures/unlockables/name.png
    
    もし名前が "banana" の場合、パスは次のようになります:
    
    assets/compatskills/textures/unlockables/banana.png
    

### 構文

    空白の例:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(ゲームステーション、文字列名、int x、int y、文字列スキル名、int cost、@Optional String... defaultRequirements);
    
    Working Example(s):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("b", "b", 0, 1, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:gathering", 3, "trait|compatskills:b");