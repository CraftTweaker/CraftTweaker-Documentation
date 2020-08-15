# ブラッドマジック

**This Support is WIP** **If Something Breaks, please open an issue on the issue tracker!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## バインディング:

プレイヤーが要件を満たしていない場合、特定のアイテムのBlood Magicのアイテムバインドはキャンセルされます。

### 構文

    空白の例:
    mods.compatskills.BindHandler.addBindLock(失敗メッセージの文字列、IItemStack スタック、文字列... requirements);
    
    テスト例:
    mods.compatskills.BindHandler.addBindLock("隠されていないダークエネルギーがあなたの周りを旋回し、その下に" <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:fusry/plant_seed");
    

## 儀式:

プレイヤーが条件を満たしていない場合、儀式の起動をキャンセルします。

### 構文

    空白の例:
    mods.compatskills.RitualHandler.addRitualLock(失敗メッセージ、文字列の儀式、文字列... 要件)
    
    テスト例:
    mods.compatskills.RitualHandler.addRitualLock(「儀式が有効になると、期待される結果を達成することはできません」、「儀式Crushing」、「reskillable:building|15」、「reskillable:magic|7」、「stage|test」、「adv|minecraft:fusry/plant_seed」)