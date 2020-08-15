# Tiered Tooltips

Этот мод является надстройкой к [этапам предмета](https://minecraft.curseforge.com/projects/item-stages). Tiered Tooltips использует новое событие RenderTooltipEvent в Forge вместе с некоторой умной логикой, чтобы позволить конечному пользователю изменить цвет подсказки предмета, на какой стадии этот пункт ограничен. Более подробную информацию о моде можно найти [здесь](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 и более поздние

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```

### 1.0.2 и выше

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String Background, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```