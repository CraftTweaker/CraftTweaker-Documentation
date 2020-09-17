# Level-Lock サポート

## PSA:

この機能はReskillableでのLevelUpイベントのキャンセルを無効にします。 levelUp(); メソッドを直接呼び出す一部の Mod はロックをバイパスします！ Scavenge:ReskillableとTogetherForeverのようなMODが含まれています！

## Level-Lock サポート

Level-Lock サポートはスカイソムがある日DMで作ったジョークから来た奇妙な機能です。 この機能は完全にそれを実装するのに十分なサディストのためのものです! このゲートは、設定されたレベルまでの進歩ではなく、「から行く」レベルになります!

CTSkill = [スキルブラケットハンドラ](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### 構文

    // Blank Example:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill skill, int level, String... defaultRequirements);
    
    // Test Example:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:gating", 3, "adv|minecraft:farry/plant_seed");