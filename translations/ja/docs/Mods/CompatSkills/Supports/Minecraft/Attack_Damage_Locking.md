# 攻撃ダメージロック

## 機能:

この機能は、プレイヤーが一定量以上の攻撃ダメージを与える武器/ツールを使用する能力をロックします。 これは以下の例のように、攻撃ダメージ0.75以上の武器は最終的にのみ使用できます。

For reference: 1 Damage = 0.5 Hearts You can see a quick reference guide to damage under [This Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## 構文

    mods.compatskills.DamageLock.addDamageLock(二重ダメージ, 文字列... 要件);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");