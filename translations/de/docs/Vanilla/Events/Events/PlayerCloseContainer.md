# PlayerCloseContainer

Das PlayerCloseContainer Event wird gefeuert, wenn ein Spieler einen Container schließt.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerCloseContainerEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerCloseContainer Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                                  |
| ---------- | -------------------------------------------- |
| `behälter` | [IContainer](/Vanilla/Container/IContainer/) |
