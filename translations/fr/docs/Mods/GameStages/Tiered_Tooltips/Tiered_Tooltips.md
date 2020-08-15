# Info-bulles à paliers

Ce mod est un addon de vanité à [ItemStages](https://minecraft.curseforge.com/projects/item-stages). Les info-bulles à niveau utilisent le nouveau RenderTooltipEvent dans Forge avec une logique intelligente pour permettre à l'utilisateur final de changer la couleur de l'infobulle d'un objet, sur la base de quelle étape ce point est restreint. Plus d'informations sur le mod peuvent être trouvées [ici](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 et plus tard

```zenscript
//mods.tieredtooltips.colorStage(String stageName, background ground, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.tieredtooltips.colorStage("two", "7fbf8200", "7fc43700", "32752202"); // Valeurs ARGB Hex
```

### 1.0.2 et antérieur

```zenscript
//mods.TieredTooltips.colourStage(String stageName, background ground, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colourStage("two", "7fbf8200", "7fc43700", "32752202"); // Valeurs ARGB Hex
```