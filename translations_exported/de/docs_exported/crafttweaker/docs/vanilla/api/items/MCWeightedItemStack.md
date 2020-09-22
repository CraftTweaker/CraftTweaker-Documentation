# MCWeightedItemStack

Ein ItemStack mit einer Chance, in der Regel für die Rezeptausgabe. <p> Vorsichtig, wenn der Stapel verwendet wurde, um den WeightedStack zu erstellen war veränderbar, dann wird der Größensatz auch den ursprünglichen Stapel mutieren!

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Implementierte Schnittstellen
MCWeightedItemStack implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Konstrukteure
Erstellt manuell den gewichteten Artikelstack. Normalerweise können Sie den Operator oder `.weight(weight)` Methode von IItemStack verwenden, obwohl
```zenscript
neue crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, Gewicht als Doppel);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                                              | Beschreibung                             |
| --------- | ----------------------------------------------------------------- | ---------------------------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel                               |
| gewicht   | double                                                            | Die Chance, zwischen 0 (0%) und 1 (100%) |



## Methoden
### gewicht

Erstellt einen neuen Gewichteten Stapel mit dem angegebenen Gewicht

 Rückgaben: `Ein neuer Gewichteter Gegenstandstapel`

Rückgabetyp: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter     | Type   | Beschreibung    |
| ------------- | ------ | --------------- |
| neues Gewicht | double | Der Prozentsatz |



## Eigenschaften

| Name          | Type                                                              | Hat Getter | Hat Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile | String                                                            | true       | false      |
| stapeln       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| gewicht       | double                                                            | true       | false      |

## Operatoren
### MUL

Legt den Betrag des Gegenstands fest. <p> Wenn der ursprüngliche Stack veränderbar war, mutiert auch die Größe des Originalstapels.

 Rückgaben: `Ein neuer Gewichteter Gegenstandstapel`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount als int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parameter    | Type | Beschreibung         |
| ------------ | ---- | -------------------- |
| neuer Betrag | int  | Die neue Stapelgröße |
### MOD

Erstellt einen neuen Gewichteten Stapel mit dem angegebenen Prozentsatz

 Rückgaben: `Ein neuer Gewichteter Gegenstandstapel`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % Neugewicht als int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parameter     | Type | Beschreibung    |
| ------------- | ---- | --------------- |
| neues Gewicht | int  | Der Prozentsatz |

