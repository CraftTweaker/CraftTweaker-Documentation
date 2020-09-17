# Konwersja pozycji na gaz

Począwszy od Mekanism 9.7.5 możliwe jest obecnie posiadanie niestandardowego przedmiotu konwersji gazu w różnych maszynach.

Jeśli chcesz zmienić dowolną wartość wbudowanych konwersji, zaleca się, aby najpierw usunąć konwersję, a następnie dodać ją z powrotem zamiast ją nadpisać. Zapewnia to prawidłowe usunięcie wszystkich danych zgodnie z pkt 9.7. nie posiada określonego wyjścia/obsługi tego, co się dzieje, gdy element jest wymieniony dwukrotnie.

## Dodanie

```zenscript
mods.mekanism.GasConversion.register(Składnik składnika, IGasStack);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Usuwanie

```zenscript
mods.mekanism.GasConversion.unregister(Składnik zanieczyszczeń, gaz IGasStack);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Usuwanie wszystkich konwersji

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```