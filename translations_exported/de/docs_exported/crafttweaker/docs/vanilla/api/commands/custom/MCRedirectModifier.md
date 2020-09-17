# MCRedirectModifizierer

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Konstrukteure
```zenscript
new crafttweaker.api.commands.custom.MCRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| Parameter | Type                                                                                                                                                                                                                                                                  | Beschreibung                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| lustig    | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | Keine Beschreibung angegeben |



## Methoden
### bewerben

Typ zurückgeben: Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(Kontext als crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------------- | ---------------------------- |
| kontext   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Keine Beschreibung angegeben |


### gleich

Rückgabetyp: boolesch

```zenscript
myMCRedirectModifier.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### hashCode

Rückgabetyp: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

Rückgabetyp: String

```zenscript
myMCRedirectModifier.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCRedirectModifier == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

