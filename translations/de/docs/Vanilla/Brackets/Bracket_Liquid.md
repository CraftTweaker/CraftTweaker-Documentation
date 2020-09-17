# Flüssige Klammerhandler

Der flüssige Bracket Handler gibt Ihnen Zugang zu den Flüssigkeiten im Spiel. Es ist nur möglich, im Spiel registrierte Flüssigkeiten zu erhalten so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn Sie die Flüssigkeiten des Mods in einem flüssigen Bracket Handler referenzieren.

Flüssigkeiten werden im Liquid Bracket Handler wie folgt angeführt:

```zenscript
<liquid:liquidname> ODER <fluid:liquidname>

<liquid:lava> ODER <fluid:lava>
```

Wird die Flüssigkeit gefunden, wird ein ILiquidStack Objekt zurückgegeben. Weitere Informationen dazu finden Sie im [entsprechenden Wiki-Eintrag](/Vanilla/Liquids/ILiquidStack/).

# Alle registrierten Flüssigkeiten abrufen

Du kannst den folgenden Befehl verwenden, um alle registrierten Flüssigkeiten im CraftTweaker Log auszugeben

    /ct liquids
    /crafttweaker liquids