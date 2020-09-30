# MCWeightedItemStack

Ein ItemStack mit einer Chance, in der Regel für die Rezeptausgabe. <p> Vorsichtig, wenn der Stapel verwendet wurde, um den WeightedStack zu erstellen war veränderbar, dann wird der Größensatz auch den ursprünglichen Stapel mutieren!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Implemented Interfaces
MCWeightedItemStack implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Erstellt manuell den gewichteten Artikelstack. Normalerweise können Sie den Operator oder `.weight(weight)` Methode von IItemStack verwenden, obwohl
```zenscript
neue crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, Gewicht als Doppel);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                                              | Beschreibung                             |
| --------- | ----------------------------------------------------------------- | ---------------------------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel                               |
| weight    | double                                                            | Die Chance, zwischen 0 (0%) und 1 (100%) |



## Methoden
### weight

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



## Properties

| Name          | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

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

