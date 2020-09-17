# Wielopoziomowe podpowiedzi

Ten mod jest niesamowitym dodatkiem do [ItemStages](https://minecraft.curseforge.com/projects/item-stages). Wielopoziomowe podpowiedzi używają nowego RenderTooltipEvent w Forge wraz ze sprytną logiką, aby umożliwić użytkownikowi końcowemu zmianę koloru podpowiedzi elementu, w oparciu o który etap dany przedmiot jest ograniczony. Więcej informacji na temat modu można znaleźć [tutaj](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 i później

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```

### 1.0.2 i wcześniej

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String back, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("jeden, "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colourStage("dwa", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```