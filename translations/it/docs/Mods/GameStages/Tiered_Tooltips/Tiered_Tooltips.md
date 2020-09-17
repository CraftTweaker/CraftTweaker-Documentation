# Suggerimenti A Livelli

Questa mod è una vanity addon a [ItemStages](https://minecraft.curseforge.com/projects/item-stages). Tiered Tooltips utilizza il nuovo RenderTooltipEvent in Forge insieme ad alcune logiche intelligenti per consentire all'utente finale di cambiare il colore del suggerimento di un oggetto, sulla base di quale fase detto articolo è limitato a. Maggiori informazioni sulla mod possono essere trovate [qui](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 e segg.

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "000000"); // RGB Valori Hex
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Valori Hex
```

### 1.0.2 e prima

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String background, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colourStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```