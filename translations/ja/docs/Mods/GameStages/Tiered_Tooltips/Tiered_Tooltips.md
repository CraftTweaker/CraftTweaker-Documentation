# 段階的ツールヒント

この mod は [ItemStages](https://minecraft.curseforge.com/projects/item-stages) へのバニティアドオンです。 Tiered TooltipsはForgeの新しいRenderTooltipEventと、エンドユーザーがアイテムのツールチップの色を変更できるようにする賢いロジックを使用します。 どちらのステージでのアイテムに限定されているかに基づきます Modの詳細はこちら [](https://minecraft.curseforge.com/projects/tiered-tooltips)をご覧ください。

### 1.0.4 以降

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips.colorStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```

### 1.0.2 以降

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String background, String borderStart, String borderEnd);
mods.TieredTooltips.colourStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colourStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```