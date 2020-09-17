# Trank Klammer Handler

Der Trank Bracket-Handler gibt dir Zugriff auf die Tränke im Spiel. Es ist nur möglich Tränke im Spiel zu registrieren so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn du die Mods Tränke in einem Trank Klammerhandler referenzierst.

Tränke werden im Trank Klammerhandler wie folgt referenziert:

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

Wenn der Trank gefunden wird, wird ein ITrank Objekt zurückgegeben. Weitere Informationen dazu finden Sie im [entsprechenden Wiki-Eintrag](/Vanilla/Potions/IPotion/).

# Alle registrierten Tränke erhalten

Du kannst den folgenden Befehl verwenden, um alle registrierten Tränke im CraftTweaker Log auszugeben

    /ct Tränke
    /crafttweaker Tränke