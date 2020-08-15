# Spielerfortschritt

Das PlayerAdvancement Event wird gefeuert, wenn ein Spieler eine Erweiterung erhält.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerAdvancementEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerAdvancement Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter | Rückgabetyp |
| --------- | ----------- |
| `id`      | string      |

## Id

Abgesehen von der Funktionalität, die der PlayerEvent anzeigt, können Sie die Erweiterungs-ID als String erhalten.

Dies kann zum Beispiel eine Zeichenkette wie folgt sein

```zenscript
"minecraft:story/mine_diamond"
```