# Waila-Phasen

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Waila Stages erlaubt es, Aspekte des Waila/Hwyla Hud durch ein benutzerdefiniertes Progression System zu beschränken. Für weitere Informationen, schaue dir die Mod-Seite [hier an](https://minecraft.curseforge.com/projects/waila-stages)

## Methoden

Versteckt den gesamten Hud, es sei denn, der Spieler hat die Bühne.

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("ein");
```

Versteckt eine bestimmte Linie in der Waila Hud, es sei denn, der Spieler hat die Bühne.

```zenscript
// mods.WailaProgression.addRequirement(String-Bühne, String-Präfix); 
mods.WailaProgression.addRequirement("eine", "Power:"); 
```