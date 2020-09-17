# Salis Mundus

Ten pakiet pozwala na dodawanie obsługi konwersji do obsługi salis mundus thaumcraft.  
Te osoby obsługujące są wywoływane, gdy klikniesz blok na świecie z salis Thaumcraft mundus, aby zmienić je na coś innego.

Jeśli ten wynik będzie blokiem, zostanie on umieszczony na świecie, jeśli nie zostanie wyrzucony jako pozycja.

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
import mods.thaumcraft.SalisMundus;
```

## Dodaj przepisy

Możesz określić [IBlock](/Vanilla/Blocks/IBlock/) lub [IreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
Jeśli nie określisz badań, ten przepis będzie zawsze możliwy, jeśli zdecydujesz się określić ciąg badań, musisz odblokować badania w celu przekształcenia w pracę.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Usuń przepisy

Możesz również usunąć wszystkie przepisy, które zwracają pasujący element.  
Ta obsługa sprawdza, czy podany parametr pasuje do wyjścia itemStack, więc możesz również usunąć wszystkie przepisy używając wieloskładnikowego składnika `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Usuwa WSZYSTKIE zarejestrowane uchwyty
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Usuwa tylko obsługujące tygiel
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```