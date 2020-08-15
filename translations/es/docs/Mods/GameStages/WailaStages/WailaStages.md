# Etapas de Waila

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Waila Stages permite restringir aspectos del hud Waila/Hwyla mediante un sistema de progresión personalizado. Para más información, echa un vistazo a la página de mod [aquí](https://minecraft.curseforge.com/projects/waila-stages)

## Métodos

Oculta todo el tubo, a menos que el jugador tenga el escenario.

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("uno");
```

Oculta una línea específica en el hud del waila a menos que el jugador tenga el escenario.

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("uno", "Power:"); 
```