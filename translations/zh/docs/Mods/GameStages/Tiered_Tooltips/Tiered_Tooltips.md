# 分层工具提示

这个模组是 [项目阶段](https://minecraft.curseforge.com/projects/item-stages) 的虚拟添加。 层级工具提示在Forge中使用了新的 RenderTooltipEvent 以及一些聪明逻辑，使最终用户能够更改物品的工具提示颜色。 根据哪个阶段所述物品仅限于此。 更多关于模组的信息可以在这里找到 [](https://minecraft.curseforge.com/projects/tiered-tooltips)。

### 1.0.4及以后的

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "0000"); // RGB Hex Values
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Value
```

### 1.0.2 及更早的

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("one", "2969d1", "cccccc", "0000"); // RGB Hex Values
mods.TieredTooltips.colourStage(“two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```