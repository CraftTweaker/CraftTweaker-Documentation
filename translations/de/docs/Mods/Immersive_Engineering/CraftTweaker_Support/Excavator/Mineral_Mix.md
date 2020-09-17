# Mineral-Mix

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. ein Array zu casten). Also seien Sie sicher als entschuldigen und fügen Sie den Import `importieren mods.immersiveengineering.MineralMix;`.

## Fehlerchance

Du kannst die Fehlerchance für den Mineralmix mit der FailChance [ZenSetter/Getter] auf dem Objekt einstellen und bekommen.

## Erhalte Mineral

| Benötigt | Type | Datentyp |
| -------- | ---- | -------- |
| Benötigt | Name | string   |

```zenscript
//Beispiel:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## Erz hinzufügen

| Benötigt | Type   | Datentyp |
| -------- | ------ | -------- |
| Benötigt | Erz    | string   |
| Benötigt | Hannes | string   |

```zenscript
mineralMixObject.addOre("EreIron", 0.5);
```

Sie müssen die oredict Namen verwenden.

## Entferne Erz

| Benötigt | Type | Datentyp |
| -------- | ---- | -------- |
| Benötigt | Erz  | string   |

```zenscript
mineralMixObject.removeOre("oreIron");
```

## Fehler-Chance Getriebe/Setter

### Beispiel

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## Volles Beispiel

```zenscript
//Beispiel:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering. xcavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0. );

//Initial Fail Chance drucken
print(Iron.failChance);

//Setze die Fehlerchance auf 25%
Eisen. ailChance = 0.25;

//Drucken der Fehlerchance
print(Eisen. ailChance);

//Setze die Fehlerchance auf 50%
Iron.failChance = 0.5;

//Finale Fehlerchance drucken
print(Iron.failChance);
```