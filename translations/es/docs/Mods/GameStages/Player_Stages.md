# Etapas del jugador

La API de GameStages expande la funcionalidad [IPlayer](/Vanilla/Players/IPlayer/) de CraftTweaker para permitirte revisar y modificar las etapas de un jugador.

## Llamar a los métodos

Como este es un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), puede simplemente llamar a los métodos en cualquier objeto [IPlayer](/Vanilla/Players/IPlayer/) o cualquiera de sus subtipos.

## Métodos

### Buscar gamestages

Los métodos devuelven booleanos.

```zenscript
// Comprueba si el reproductor tiene la etapa pasada.
//player.hasGameStage(String stage);
player.hasGameStage("uno");



// Comprueba si el jugador tiene alguna de las etapas pasadas. Sólo lo necesitan.
//player.hasAnyGameStages(String... stages);
player.hasAnyGameStages("one", "dos");



// Comprueba si el jugador tiene todas las etapas pasadas.
//player.hasAllGameStages (String... niveles);
player.hasAllGameStages ("uno", "dos");
```

### Añadir o quitar un juego

Los métodos retornan vacío (nada).

```zenscript
// Desbloquea una etapa para un jugador.
//addGameStage(String stage);
addGameStage(String stage);


// Bloquea una etapa para un jugador.
//removeGameStage(String stage);
removeGameStage(String stage);
```