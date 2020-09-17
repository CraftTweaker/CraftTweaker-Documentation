# ステージロック

## ステージロック

GameStagesサポートのこの部分では、一連の要件の背後にある特定のステージをロックできます。 つまり、ステージのロック解除時にステージの設定要件が一致しない場合に限ります。 ロック解除をキャンセルし、チャットにエラーメッセージを投稿します このチャットメッセージはサーバー全体ではなく、プレイヤー固有です。

### 構文

    // Blank Example:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // テスト例:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.GameStageLocks.addGameStageLock("bana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLockage("punakes", "reskillable:agility|13");