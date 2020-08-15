# IEnchantmentDefinicja

IEnchantmentDefinition jest rzeczywistym zaklęciem, nie posiada poziomu, ale możesz go użyć do pobrania informacji o zaklęciu.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.enchantments.IEnchantmentDefiniation;`

## Pobieranie takiego obiektu

Możesz pobrać taki obiekt z [Obsługi zaklęć](/Vanilla/Brackets/Bracket_Enchantment/) lub z obiektu [Zaklęć](/Vanilla/Enchantments/IEnchantment/).

## ZenGetters/ZenSetters

| ZenGetter         | ZenSetter | Typ         |
| ----------------- | --------- | ----------- |
| id                |           | odcień      |
| Nazwa             | Nazwa     | ciąg znaków |
| maksymalny poziom |           | odcień      |
| minLevel          |           | odcień      |
| dozwoloneOnbooki  |           | boolean     |
| Zaklęcie Skarbów  |           | boolean     |
| isCurse           |           | boolean     |
| registryName      |           | ciąg znaków |

## Metody ZenMethods

### Nie można zastosować

Sprawdza, czy zaklęcie może być umieszczone na elemencie.  
Pierwsza metoda sprawdza ogólnie, drugi sprawdza, czy przedmiot może być zaklęty do tego zaklęcia za pomocą stołu zaklęcia.  
Zarówno zwraca bool, jak i wymaga [IItemStack](/Vanilla/Items/IItemStack/) jako parametru wejściowego.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

Sprawdza, jaką zaklęcie musi mieć przedmiot, aby zaklęć na danym poziomie.  
Obie metody zwracają intę i przyjmują poziom zaklęcia jako parametr int.

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### Nazwa tłumaczona

Zwraca przetłumaczoną nazwę (np. "smite IV").  
Zwraca ciąg znaków i wymaga poziomu zaklęcia jako parametr int.  
To samo co [Zaklęcie Ichantentu](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(poziom int);
```

### utwórz zaklęcie

Dając EnchantmentDefinition poziom, możesz zrobić z niego [Zaklęcie](/Vanilla/Enchantments/IEnchantment/):

```zenscript
ench.makeEnchantment(poziom int);
ench * poziom;
```

### Porównaj z innymi obiektami IEnchantmentDefinition

Możesz użyć operatora `==` , aby sprawdzić, czy dwa zaklęcia są takie same.  
Oznacza to, że mają ten sam identyfikator.

```zenscript
if(enchA == enchB)
    print("Same!");
```

## Przykład

```zenscript
importuj crafttweaker.enchantments.IEnchantmentDefiniation;
zaimportuj crafttweaker.data. Data;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

mapa var jako IData = {};

dla ench w tablicy {
    mapa += ench. akeEnchantment(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```