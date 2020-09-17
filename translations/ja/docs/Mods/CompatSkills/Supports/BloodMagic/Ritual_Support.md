# 儀式的なサポート

## 儀式:

これは儀式の活性化のための特定の要件を満たしていない場合、儀式の活性化をキャンセルします。

### コマンド:

現在、儀式ハンドラーによって使用される儀式的な文字列をすべてダンプするためのゲーム内コマンドがあります。 コマンドは以下の通りです: /ct ritialDump そしてすべての儀式の文字列を CraftTweaker.logに出力します。

### 1.4.0より前:

#### 構文

    空白の例:
    mods.compatskills.RitualHandler.addRitualLock(失敗メッセージ、文字列の儀式、文字列... 要件)
    
    テスト例:
    mods.compatskills.RitualHandler.addRitualLock(「儀式が有効になると、期待される結果を達成することはできません」、「儀式Crushing」、「reskillable:building|15」、「reskillable:magic|7」、「stage|test」、「adv|minecraft:fusry/plant_seed」)
    

### Post-1.4.0:

CompatSkills 1.4.0の時点で、いくつかの新しいZenMethodsが追加され、既存の構文に変更が加えられています。 また、儀式サポートとバインディングサポートが正常に機能しない問題も修正しました。

#### 構文

    空白の例:
    mods.compatskills.RitualHandler.addRitualLock(String儀式, String... requirements);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... requirements);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);
    
    テスト例:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.RitualHandler.addRitualCostLock(500, "reskillable:magic|7");
    mods.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### エラー メッセージ

バインディングのサポートと同様に、エラーメッセージは CrT メソッドで設定された文字列の代わりにローカライズ可能な文字列に移動されました。 これにより、リソースパックの作成者が、希望する文字列をより簡単にローカライズして変更できるようになります。

    compatskills.bloodmagic.ritialError=儀式が起動すると、期待される結果は得られません
    

他のいくつかの変更は、例えば、デフォルトのエラーメッセージがプレーヤーにステータスチャットメッセージの一部として表示されるようになりました。 これは、メッセージがプレイヤーにのみ表示され、誰もが見ることができるチャットで印刷されていないことを意味します。 これはまた、チャットで要件とともに表示されることを意味します。 これにより、プレイヤーはロックから何が欠けているのかを識別しやすくなります。