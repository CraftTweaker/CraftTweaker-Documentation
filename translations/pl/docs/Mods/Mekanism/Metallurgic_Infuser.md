# Metallurgic

Od Mekanism 9.7.0 jest teraz możliwe oglądanie wszystkich ciągów receptur Metallurgic Infuser za pomocą polecenia `/ct mekrecipes metallurgicInfuser`

## Ciąg typu infuzji

Zarówno dodawanie, jak i usuwanie przepisów wymagają ciągu „typu infuzji”. Domyślne przykłady z Mekanizmu to:

| Typ wlewu  | Dodane przez |
| ---------- | ------------ |
| "KARBON"   | Mekanizm     |
| "TIN"      | Mekanizm     |
| "DIAMOND"  | Mekanizm     |
| „REDSTONA” | Mekanizm     |
| „FUNGI”    | Mekanizm     |
| „BIO”      | Mekanizm     |
| "OBSIDIAN" | Mekanizm     |

Jeśli ktoś z innych modów rejestruje nowy typ infuzji, ten typ może być użyty w CraftTweaker, jak również pod warunkiem, że nazwa zarejestrowanego typu jest dokładnie określona. UWAGA: *nie jest* możliwe zdefiniowanie **nowych** typów ** z CraftTweaker

Od Mekanism 9.7.0 jest teraz możliwe przeglądanie wszystkich zarejestrowanych infuzji (w tym tych z innych modyfikacji) za pomocą polecenia `/ct infuseTypes`

## Dodanie

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

Od Mekanism 9.7.0 możliwe jest stosowanie IIngredients jako inputStack zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 możliwe jest obecnie usunięcie wszystkich przepisów dotyczących wyrobu metalurgicznego. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```