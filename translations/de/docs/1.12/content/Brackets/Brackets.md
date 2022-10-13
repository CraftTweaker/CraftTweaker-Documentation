# Bracket-Handler

ZenScript nutzt sogennante "Brackets", um auf verschiedene Ingame-Objekte wie Items, Entities und OreDicts zuzugreifen.

## Wie man Brackets verwendet

In diesem Fall nutzt ZenScript die beiden Zeichen `<` und `>`. Alles was innerhalb der beiden Zeichen steht, wird als Bracket angesehen.

Ein Beispiel für die Nutzung eines Brackets ist das Referenzieren eines bestimmten Ingame-Items.

## Beispiele

Ein Beispiel für ein [Item-Bracket](/Vanilla/Brackets/Bracket_Item/) wäre:

```zenscript
<minecraft:apple>
```

Damit kannst du das `Apfel`-[Item](/Vanilla/Items/IItemStack/) referenzieren.

Ein Beispiel für ein [OreDict-Bracket](/Vanilla/Brackets/Bracket_Ore/) wäre:

```zenscript
<ore:ingotIron>
```

Damit kannst du ein [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) für `ingotIron` referenzieren.