# Fasi Di Waila

Questa mod è un addon per l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Waila Stages permette che gli aspetti del Waila/Hwyla hud siano limitati da un sistema di progressione personalizzato. Per maggiori informazioni, consulta la pagina delle mod [qui](https://minecraft.curseforge.com/projects/waila-stages)

## Metodi

Nasconde l'intero fango, a meno che il giocatore non abbia il palco.

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

Nasconde una linea specifica nel fango waila, a meno che il giocatore non abbia il palco.

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```