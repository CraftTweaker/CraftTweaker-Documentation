# Maszyna stołowa

## Pakiet

```zenscript
import mods.ic2.CanningMachine;
```

### Lista identyfikatorów efektów
* 1: Głód (Rotten Flesh) (80% szansy)
* 2: Trucizna (Spider oczy)
* 3: Głód (dziki kurczak) (30% szans)
* 4: Złote Jabłko
* 5: Notch Jabłko
* 6: Owoce Corus

## Metody

### Zarejestruj Przedmioty dla Efektu (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... dane wejściowe);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... wejścia** Dane wejściowe otrzymujące jedzenie mogą być skuteczne.
- **int id** Efekt ID, który chcesz zastosować do określonych elementów. Poniższe ważne dawki efektu są następujące:

### Usuń Efekt Id (int id, usuwanie logiczne)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, Boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** Efekt ID, który chcesz usunąć z wypełnionej puszki. Poniżej znajduje się prawidłowe id efektu.
- **Usuwanie boolean** Czy usunąć elementy z tego efektu. Obecnie ta wartość logiczna może nie działać.

### Zarejestruj wartość paliwa (int fuelValue, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //wcześniej miał wartość 2548.
```

- **int fuelValue** Ile paliwa wynosi określony przedmiot.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Element do rejestracji tej wartości paliwa. Może to być nawet pozycje z istniejącymi wartościami, w którym to przypadku poprzednio określona wartość zostanie nadpisana. Uwaga: musi być stosem przedmiotów, żaden rekord nie jest dozwolony.

### Rejestr mnożnika paliwa (mnożnik paliwa typu float, wejście IItemStack)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **Mnożnik paliwa float** Jaki procent poprzedniej wartości wejściowej jest zwiększany. na przykład 1 = 100%, 0,5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Element do rejestracji mnożnika paliwa. Może to być nawet pozycje z istniejącymi mnożnikami, w którym to przypadku wcześniej określony mnożnik zostanie nadpisany. Uwaga: musi być stosem przedmiotów, żaden rekord nie jest dozwolony.

### Usuń Paliwo Produktu (wejściowe IItemStack)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Element który ma zostać usunięty z wejścia dla paliwa.

Zobacz [tutaj](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) aby uzyskać informacje na temat działania pojemników paliwowych.

### Dodaj recepturę (wyjście IItemStack, wypełnienie IIngredient, pojemnik IItemStack)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(wyjście IItemStack, wypełnienie IIngredient filler, IItemStack container);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** produkt
- **[IItemStack](/Vanilla/Items/IItemStack/) kontener** itemstack do "filled"
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wypełniacz** Składnik, który jest napełniany do pojemnika

