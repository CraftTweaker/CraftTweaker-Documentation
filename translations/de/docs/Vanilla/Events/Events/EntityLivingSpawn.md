# EntityLivingSpawnEvent

Das EntityLivingSpawn Event wird gefeuert, wenn eine EntityLivingSpawn versucht, einer Welt beizutreten oder sie zu verlassen.  
Es hat eine Unterklasse, die EntityLivingExtendedSpawnEvent die auch eine [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) Referenz enthält.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker. vent.EntityLivingSpawnEvent`  
`crafttweaker. vent.EntityLivingExtendedSpawnEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

EntityLivingSpawn Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter                 | Type                                                             |
| ------------------------- | ---------------------------------------------------------------- |
| `Welt`                    | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                       | float                                                            |
| `y`                       | float                                                            |
| `z`                       | float                                                            |
|                           |                                                                  |
| `Spawner` (nur erweitert) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Event-Funktionen

Das Despawn-Event bietet auch drei Funktionen um das Ergebnis zu ändern:

| ZenMethode  | Beschreibung                                        |
| ----------- | --------------------------------------------------- |
| `zulassen`  | Erzwingt die Entität zum (de)spawnen                |
| `verwerfen` | Erzwingt die Entität nicht zu (de)spawnen           |
| `passieren` | Setzt das Ereignis-Ergebnis auf den Standardzustand |