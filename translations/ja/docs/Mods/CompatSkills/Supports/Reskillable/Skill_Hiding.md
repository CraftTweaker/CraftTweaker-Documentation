# スキルの非表示/ロック解除

このロックでは、プレイヤーがスキルを確認するための要件を満たすまでスキルを非表示にできます。 これは、カスタムパックに「クラス」スキルを追加する場合など、いくつかの限定されたユースケースがあります。たとえば、「エンジニア」である人が「Mage」スキルページを見るか、またはアクセスできるようにしたくない場合です。

## 構文

    空白の例:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill skill, String... デフォルト要件);
    
    動作例:
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");