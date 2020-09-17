# Chłodzenie

Kierownik chłodni nie należy do żadnej konkretnej maszyny, ale zarządza wartościami chłodziwa dla wszystkich pozostałych maszyn.  
Na przykład Dynamo Energetyki wykorzystuje wartości chłodnicze, podobnie jak Dynamo Magmatyczne z dostarczonym wzmocnieniem zbiornika Ientropowego.

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.Coolant;
```

## Dodaj Chłodzenie

Użyj tego, aby zarejestrować nowy chłodziwo do menedżera.  
CoolantRF musi być nieujemny, a współczynnik chłodzący musi wynosić od 1 do 100 (włącznie).  
Jeśli te zakresy nie zostaną spełnione, chłodziwo nie zostanie zarejestrowane!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack płyn chłodzącyRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Te są dwiema z wartości:
//mods. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```

## Usuń Chłodzenie

Użyj tego, aby usunąć istniejący chłodziwo z menedżera.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```