# Kowadło

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Anvil;
```

## Dodanie

```zenscript
Anvil.addRecipe(String registryName, IIngredient Input, IItemStack output, int minTier, String umiejętności, String... forgeRules);
```
- Wejście nie może być ustawione. Kąty akceptują tylko jeden przedmiot na miejsce.
- dane wejściowe muszą być wykute (zapoznaj się z [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) , aby zarejestrować zdolność do wykuwania przedmiotu).
- Poziomy dokładności to 0 = Kamień, 1 = Miedź, 2 = Brąz, 3 = stal nieobrobiona plastycznie, 4 = Stal, 5 = stal czarna i 6 = stal czerwona/niebieska.
- Typ umiejętności jest kategorią umiejętności, do której wykuwanie powinno się przyczynić. Prawidłowe wpisy to: `generalne`, `narzędzia`, `broń`, `pancerz`lub null. Jeśli typ umiejętności to `narzędzia`, `broń`, lub `zbroi` , wtedy przedmiot wyniku będzie miał do niego zastosowany bonus umiejętności.
- Przepis musi mieć 1, 2 lub 3 reguły. Reguły składają się z typu (`HIT`, `DRAW`, `PUNCH`, `POBIERZ`, `UPSET`lub `SHRINK`), po której następuje zamówienie (`JEJ`, `NOT_LAST`, `OSTATNIO` `SECOND_LAST`, `THIRD_LAST`), oddzielone podkreśleniem. Na przykład `HIT_ANY`, `DRAW_SECOND_LAST`, i `UPSET_NOT_LAST` są poprawnymi nazwami reguł.

## Usuwanie

```zenscript
Anvil.removeRecipe(wyjście IItemStack);
Anvil.removeRecipe(string registryName);
```