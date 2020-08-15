# Etapes Waila

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Les étapes Waila permettent de restreindre les aspects du hud Waila/Hwyla par un système de progression personnalisé. Pour plus d'informations, consultez la page des mods [ici](https://minecraft.curseforge.com/projects/waila-stages)

## Méthodes

Masque toute la cabine, à moins que le joueur ait la scène.

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

Masque une ligne spécifique dans le hud waila, à moins que le joueur ait la scène.

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```