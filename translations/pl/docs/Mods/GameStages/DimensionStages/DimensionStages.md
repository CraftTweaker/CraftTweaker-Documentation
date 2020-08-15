# Etapy Wymiaru

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy wymiaru umożliwiają dostęp do wymiarów za niestandardowymi systemami progresji ustawionymi przez twórcę paczki modów. Jeśli gracz nie ma dostępu do sceny, nie będzie mógł wejść w ten wymiar. Ich zwierzęta domowe oraz pociski, mocowania i upuszczone przedmioty nie będą również mogły wchodzić w ograniczony wymiar. Więcej informacji na temat Etapów Wymiaru [znajdziesz tutaj](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(etap string, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```