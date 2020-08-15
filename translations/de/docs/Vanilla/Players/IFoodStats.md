# IFoodStats

Die IPlayer-Schnittstelle ermöglicht es Ihnen, bestimmte Informationen über die Lebensmittelstatistiken eines Spielers anzuzeigen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetter

| ZenGetter       | ZenSetter      | Type    |
| --------------- | -------------- | ------- |
| Food-Level      | Food-Level     | int     |
| sättigunglevel  | sättigunglevel | float   |
| brauche Nahrung |                | boolean |

## ZenMethoden

#### Statistiken hinzufügen

Stornierungsfunktion. Nimmt eine Int und einen Float als Input-Parameter.

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

Stornierungsfunktion. Nimmt ein [IPlayer](/Vanilla/Players/IPlayer/) Objekt als Eingabeparameter.

```zenscript
stats.onUpdate(IPlayer Player);
```

#### asNBT

Gibt ein IData Objekt zurück, das die foodStats repräsentiert.

```zenscript
stats.asNBT();
Statistiken als crafttweaker.data.IData;
```

#### Erschöpfung hinzufügen

Stornierungsfunktion. nimmt einen Float als Eingabeparameter.

```zenscript
stats.addExhaustion(float exhaustion);
```