# Mob ステージ

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 Mob ステージでは、モブのスポーンをカスタムの進行システムに設定できます。 Modの動作の詳細については、こちら [をご覧ください](https://minecraft.curseforge.com/projects/mob-stages)

## グローバルオプション

Mob用の新しいグローブエントリを作成します。 Mobごとに1つのグローバルエントリしか存在できません。

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Mobの置き換えを追加します。 近くに有効なプレイヤーがいないため、Mobがスポーンできなかった場合、その場所に置き換えられたMobが生成されます。

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

有効なプレイヤーを検索する範囲を設定します。 デフォルトの範囲は512ブロックなのでオプションです。

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

スポーナーがステージチェックをオーバーライドできるようにします。 デフォルトは false です。 有効なプレイヤーがいなくても、スポーナーはこのMobで動作します。

```zenscript
// mods.MobStages.toggleSpawners(String entityId, boolean allow);
mods.MobStages.toggleSpawners("minecraft:zombie", true);
```

## 寸法特有のオプション

寸法特有のオプションはグローバルオプションとほぼ同じです しかし、彼らは最後にもう一つ引数を追加します。これは整数次元の id です。 ディメンション固有のエントリは、そのディメンションのグローバルエントリを上書きします。 次元ごとに、Mobごとに1つのエントリしか持つことができません。

## スクリプト例

```zenscript
// Creepers require stage one to spawn
mods.MobStages.addStage("one", "minecraft:creeper");

// Skeleton require stage two, or any spawner
mods.MobStages.addStage("two", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Spidersにはステージ3が必要です。
mods.MobStages.addStage("three", "minecraft:spider", -1);

// Zombies require ステージ 4 in the nher, and are replaced by bats if they can't
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombi", -1);
mods.MobStages.addReplacement("minecraft:zombi", "minecraft:bat", -1);
```