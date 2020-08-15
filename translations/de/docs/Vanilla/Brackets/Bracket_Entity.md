# Entitäts-Klammerhandler

Der Entitätsklasse-Handler gibt dir Zugang zu den Entitäten (z.B. Mobs, Kacheln usw.) im Spiel. Es ist nur möglich Entitäten im Spiel zu registrieren so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn du die Mobs des Mobs in einem Entity Bracket Handler referenzierst.

Entitäten werden auf diese Weise im Entitäts-Handler referenziert:

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

Wenn das Mob/Entity gefunden wird, wird ein IEntityDefinition-Objekt zurückgegeben. Weitere Informationen dazu finden Sie im [entsprechenden Wiki-Eintrag](/Vanilla/Entities/IEntityDefinition/).

# Alle registrierten Objekte abrufen

Du kannst den folgenden Befehl verwenden, um alle registrierten Entitäten im CraftTweaker Log auszugeben

    /ct entities
    /crafttweaker entities