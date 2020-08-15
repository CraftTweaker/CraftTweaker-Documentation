# Gepunktete Tooltips

Dieser Mod ist ein Vanity-Addon für [Artikel](https://minecraft.curseforge.com/projects/item-stages). Tiered Tooltips verwenden das neue RenderTooltipEvent in Schmiede zusammen mit einer cleveren Logik, um es dem Endbenutzer zu ermöglichen, die Farbe des Tooltips eines Gegenstands zu ändern, basierend darauf, auf welcher Etappe der Artikel beschränkt ist. Weitere Informationen zum Mod findest du [hier](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 und höher

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "0000"); // RGB Hex Werte
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Werte
```

### 1.0.2 und früher

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String background, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("one", "2969d1", "cccccc", "0000"); // RGB Hex Werte
mods.TieredTooltips.colourStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Werte
```