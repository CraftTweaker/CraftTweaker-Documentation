# Wailaステージ

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 Waila Stages は、Waila/Hwyla hud の側面をカスタム進行システムによって制限することを可能にします。 詳細はこちら [をご覧ください](https://minecraft.curseforge.com/projects/waila-stages)

## メソッド

ステージを持たない限り、ハド全体を隠します。

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

ステージがある場合を除き、waila hud内の特定のラインを非表示にします。

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```