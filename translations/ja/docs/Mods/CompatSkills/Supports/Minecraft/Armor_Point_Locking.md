# アーマー値のロック

## 機能:

このタイプのロックは、要件の背後にある一定量の防具ポイントを提供する防具を使用する能力をロックします。 これは、鎧が0を提供する場合を意味します。 以下の例のように、5つのアーマーポイントは、エンド(Aka Dim 1)でのみ使用可能であることの後ろにロックできます!

## 構文

    mods.compatskills.ArmorLock.addArmorLock(二重装甲, 文字列... requirements);
    
    mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");