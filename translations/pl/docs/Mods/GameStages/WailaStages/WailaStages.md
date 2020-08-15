# Etapy Waila

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy Waila pozwalają na ograniczenie aspektów hud Waila/Hwyla przez niestandardowy system progresji. Aby uzyskać więcej informacji, sprawdź stronę modów [tutaj](https://minecraft.curseforge.com/projects/waila-stages)

## Metody

Ukrywa cały hud, chyba że gracz ma scenę.

```zenscript
// mods.WailaStages.addWailaStage(etap string);
mods.WailaStages.addWailaStage("one");
```

Ukrywa określoną linię w hudach waila, chyba że gracz ma scenę.

```zenscript
// mods.WailaProgression.addRequirement(etap ciągu, prefiks string); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```