# Samen

Samen sind Dinge, die du aus dem Stanzen hohen Grases bekommst.

## Alle Seeds im Log drucken

Dieser Befehl wird alle registrierten Seeds in das Log ausgeben.

Muss von einem Spieler oder einer Konsole ausgeführt werden, kann nicht in einer zs-Datei geschrieben werden.

    1.12
    /ct Seeds
    
    vor 1.12
    /mt Seeds
    

## Seed Drop hinzufügen

Fügt `Element` als Seed Drop hinzu.  
**Gewichte sind relativ zum Rasensaatgut, der ein Gewicht von 10 (<unk> 10%)!**

```zenscript
vanilla.seeds.addSeed(item);
```

`Gegenstand` ist ein [gewichtetes Gegenstandstapel](/Vanilla/Items/WeightedItemStack/). Was bedeutet das? Es bedeutet lediglich, dass Sie ihm einen Prozentsatz wie folgt geben müssen:

```zenscript
//fügt Karotten mit einem Gewicht von 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Einen Seed Drop entfernen

Stoppt `Element` als Seed Drop.

```zenscript
vanilla.seeds.removeSeed(item);
```

`Element` ist ein [Igredient](/Vanilla/Variable_Types/IIngredient/).

## Alle registrierten Seeds abrufen

Gibt alle Gegenstände als [gewichteten Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) Liste zurück.

```zenscript
val seedList = vanilla.seeds.seeds;

für Artikel in seedList {
    print("Item: " ~ item. tack.displayName ~ " || Chance: " ~ item.percent ~ "%");
}
```