# IItemDefinition

Obiekt IItemDefinition jest bezpośrednim odniesieniem do danego przedmiotu.  
Różni się od [IItemStack](/Vanilla/Items/IItemStack/) ponieważ odnosi się tylko do przedmiotu, nie zawiera żadnych metainformacji ani wartości NBT!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.IItemDefiniation;`

## Jak uzyskać jeden

Najprostszym sposobem jest [IItemStack](/Vanilla/Items/IItemStack/), ale możesz również uzyskać listę wszystkich zarejestrowanych IIDefinitions w grze i zrobić z tym coś.

```zenscript
//IItemStack Zengetter "definicja" -> pojedyncza IIDefinition
val itemDefinition = <minecraft:stone>.definiation;

//IGame zengetter "items" -> LIST!
Lista definicji sztuk walnych = gra.items;
```

## Co z tym zrobić

### ZenGetters i bezparametrowe ZenMethods

| ZenGetter          | Co to robi                                                                                                           | Typ zwrotu                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| id                 | Zwraca ID elementu                                                                                                   | ciąg znaków                                                     |
| Nazwa              | Zwraca niezlokalizowaną nazwę elementu                                                                               | ciąg znaków                                                     |
| ores               | Zwraca wszystkie wpisy rudy zawierające ten przedmiot. Może również zawierać wpisy rudy odnoszące się do podpozycji. | `Lista<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| właściciel         | Zwraca nazwę modyfikacji, do której należy ten przedmiot.                                                            | ciąg znaków                                                     |
| domyślna instancja |                                                                                                                      | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| kreatywna zakładka |                                                                                                                      | [Karta ICreative](/Vanilla/CreativeTabs/ICreativeTab/)          |
| kreatywne Zakładki |                                                                                                                      | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)           |
| Bloki canItemEdit  |                                                                                                                      | bool                                                            |
| itemEnchantability |                                                                                                                      | odcień                                                          |
| subItems           |                                                                                                                      | Lista<[IItemStack](/Vanilla/Items/IItemStack/)\>               |

### ZenSetters i inne metody próżniowe

| ZenSetter/ZenMethod                    | Typ parametru                                          |
| -------------------------------------- | ------------------------------------------------------ |
| kreatywna zakładka                     | [Karta ICreative](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | brak                                                   |
| setContainerItem(IItemDefinition item) | IItemDefinition                                        |

### Metody ZenMethods

- `def.makeStack(meta);` Tworzy [IItemStack](/Vanilla/Items/IItemStack/) z danymi metadanych. Metadane są nieregularnymi i OPCJONALNYmi.
- `def.setHarvestLevel(Typ String, poziom int);` Zmienia poziom zbiorów przedmiotu na odpowiedni typ i poziom
- `def.getSubItems(creativeTab);` Zwraca listę <[IItemStack](/Vanilla/Items/IItemStack/)\> ze wszystkimi podpozycjami dla podanej [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/).
- `def.getItemBurntime(item);` Zwraca int reprezentujący -1 (logika Vanilla zostanie zastosowana), 0 (nie przetapiana) lub wypalony czas