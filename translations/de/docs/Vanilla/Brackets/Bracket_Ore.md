# Klammerhandler des Wörterbuchs

Der Ore Wörterbuch Bracket Handler gibt dir Zugriff auf die Ore Wörterbücher im Spiel.

Ore Dictionarys werden im Bracket Handler des ErzWörterbuchs wie folgt referenziert:

```zenscript
<ore:orename>
<ore:ingotIron>
```

Returns an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>` If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that. Bitte lesen Sie im [ErzWörterbuch](/Vanilla/OreDict/IOreDictEntry/) nach, um weitere Informationen darüber zu erhalten, was mit ihnen zu tun ist.

# Alle registrierten Wörterbücher abrufen

Du kannst den folgenden Befehl verwenden, um alle registrierten Wörterbücher in das CraftTweaker Log auszugeben

    /ct oredict
    /crafttweaker oredict