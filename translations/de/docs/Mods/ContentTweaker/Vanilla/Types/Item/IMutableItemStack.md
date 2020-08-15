# MutableItemStack

Ein veränderbarer Gegenstandsstapel ist ein spezielles [IItemStack](/Vanilla/Items/IItemStack/) Objekt, das nur von [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/)abgerufen werden kann.  
Das bedeutet alle Methoden von [IItemStack](/Vanilla/Items/IItemStack/)und die von [Zutaten](/Vanilla/Variable_Types/IIngredient/)!

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.MutableItemStack;`

## ZenMethoden

### Menge

Die Anzahl eines Stapels ist die Anzahl der Items in diesem Stapel!

| ZenMethode          | Parametertyp | Beschreibung                                      |
| ------------------- | ------------ | ------------------------------------------------- |
| setCount(Anzahl)    | int          | Legt die Anzahl des Stapels auf `Anzahl` fest     |
| wachsen (zählen)    | int          | Erhöht die Anzahl der Stapel um `Anzahl`          |
| schrumpfen (Anzahl) | int          | Verringert die Anzahl des Stapels um die `Anzahl` |

### Schaden

`schad(int betrag, ICTPlayer Spieler)`

Parameter:

- int Betrag → Die Menge an Schadenspunkten, um dem Gegenstand zu geben
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) Spieler → Spieler/Entität, der den Gegenstand beschädigt