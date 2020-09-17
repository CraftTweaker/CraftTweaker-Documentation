# Zaawansowane przepisy

## Pakiet

```zenscript
importuj mods.ic2.AdvRecipes;
```

## Typy przepisów
Istnieje kilka rodzajów przepisów:

### Kształtowane przepisy
Kształtowane przepisy są przepisami, gdzie ma to znaczenie, do których elementów dołącza się miejsce. Na przykład, nie możesz tylko zorganizować 7 różnych rozmiarów stosów żelaznych sztabek w celu stworzenia żelaznych nogów. Kształt ma znaczenie, a więc jest to przepis.

### Bezkształtne przepisy
Bezkształtne przepisy są przepisami, w których tylko przedmioty umieszczane w siatki wytwarzania, podczas gdy kształt nie ma znaczenia. Na przykład barwnik niebieski i żółty tworzą barwnik zielony. Ten przepis nie troszczy się o to, gdzie umieścisz dany przedmiot.

## Dodaj przepisy

### dodany
```zenscript
mods.ic2.AdvRecipes.addShaped(wyjście,wejście);
```

Tworzy to kształt receptury dla `wyjścia` , używając `wejść` jako składników.

`wyjście` jest [IItemStack](/Vanilla/Items/IItemStack/)  
`wejścia` jest [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (patrz poniżej)

`wejścia` to dwuwymiarowy [ISkładnik](/Vanilla/Variable_Types/IIngredient/) Tablica.  
Więc przepis na żelazne nogawice zostałby napisany jako `[[żelazo,żelazo,żelazo],[żelazo,null,żelazo],[żelazo, ull,iron]]`  
Jeśli szło to mylić, spróbuj rozdzielić tablice na jedną tablicę na linię
```zenscript
żelazo walna = <minecraft:iron_ingot>;
walcze nogawice = <minecraft:iron_leggings>;

Zaawansowane przepisy. ddShaped(nogy,
 [[żelaza * 5,żelaza * 7,żelaza * 5],
  [żelazo * 3,null, żelazo * 3],
  [żelazo, null, żelazo]]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(wyjście,wejścia)
```

Tworzy to bezkształtny przepis na `wyjście` , używając `wejść` jako składników.

`wyjście` jest [IItemStack](/Vanilla/Items/IItemStack/)  
`wejścia` są [Składnikiem](/Vanilla/Variable_Types/IIngredient/)[] (np. [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(wyjście IItemStack, składniki IIngredient[]);
mods.ic2.AdvRecipes.addHiddenShaped(wyjście IItemStack, IIngredient[][] składniki);
```

Tworzy to kształtowy lub bezkształtny przepis na `wyjście` , używając `wejść` jako ukrytych składników. 
