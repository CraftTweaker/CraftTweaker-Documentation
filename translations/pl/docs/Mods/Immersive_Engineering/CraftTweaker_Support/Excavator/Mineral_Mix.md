# Miks mineralny

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy). Więc lepiej być bezpiecznym niż przepraszamy i dodać import `mods.immersiveengineering.MineralMix;`.

## Szansa na niepowodzenie

Możesz zdobyć i ustawić szansę niepowodzenia Mineralmix używając Szansy na Niepowodzenie [ZenSetter/Getter] na obiekcie.

## Zdobądź Minerały

| Wymagane | Typ      | Typ danych  |
| -------- | -------- | ----------- |
| Wymagane | Nazwisko | ciąg znaków |

```zenscript
//Example:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral ("Iron_Ore");
```

## Dodaj rudę

| Wymagane | Typ    | Typ danych  |
| -------- | ------ | ----------- |
| Wymagane | Ruda   | ciąg znaków |
| Wymagane | Szansa | ciąg znaków |

```zenscript
mineralMixObject.addOre("oreżelaz", 0.5);
```

Będziesz musiał użyć nazw rekinów.

## Usuń rudę

| Wymagane | Typ  | Typ danych  |
| -------- | ---- | ----------- |
| Wymagane | Ruda | ciąg znaków |

```zenscript
mineralMixObject.removeOre("oreżelaz");
```

## Szansa na awarię/Ustawienie

### Przykład

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0,5;
```

## Pełny przykład

```zenscript
//Example:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Uzyskaj Mineral Mix
mods.immersiveengineering. xcavator.addMineral ("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral ("Iron_Ore");

Żelazonin.addOre("oreIron", 0. );

//Print Initial Fail Forance
print(Iron.failChance);

//Set The Fail Szance to 25%
Żelaza. ailSzance = 0.25;

//Print Out The Fail Szance
(druk Żelaza). ailChance);

//Set The Fail Szance to 50%
Iron.failSzance = 0.5;

//Print Final Fail Szance
(Print.failChance);
```