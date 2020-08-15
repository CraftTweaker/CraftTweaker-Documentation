# XUTweaker

El paquete XUTweaker añade varios métodos de utilidad estática.

## Importando el paquete

Si desea acortar las llamadas a métodos o encontrar cualquier problema puede que necesite importar el paquete.  
Puede hacerlo utilizando

```zenscript
importar extrauportunidades2.Tweaker.XUTweaker;
```

## Métodos

### Permitir vuelo de supervivencia

Permite volar para todos los jugadores, permanentemente.

```zenscript
extrautionties2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Desactivar Portales del Nether

Evita que los portales del Nether (y todos los portales que usan el PortalSpawnEvent) aparezcan permanentemente.

```zenscript
extrautionties2.Tweaker.XUTweaker.disable)[video] Portals();
```

### Comprueba si un jugador es un jugador falso

Devuelve un booleano indicando si el jugador es un jugador falso.

Requiere un argumento [IPlayer](/Vanilla/Players/IPlayer).

```zenscript
extrautionties2.Tweaker.XUTweaker.isPlayerFake(player);
```

### Abrir una pantalla de libros para el reproductor

Intenta abrir la pantalla del libro escrito al jugador dado.

Devuelve un booleano indicando si el comando fue ejecutado correctamente.  
Requiere un argumento [IPlayer](/Vanilla/Players/IPlayer) .  
También requiere un argumento de cadena[] que serán las páginas.

```zenscript
extrauChancellas2.Tweaker.XUTweaker.openBookScreen(jugador, páginas);
extrauutities2.Tweaker.XUTweaker.openBookScreen(player, ["Page 1", "Page 2"]);
```