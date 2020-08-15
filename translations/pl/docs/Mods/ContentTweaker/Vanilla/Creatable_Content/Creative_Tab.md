# Karta Kreatywna

Pozwala to na dodawanie kreatywnych kart do gry!

## Tworzenie obiektu ICreativeTab

Zanim będziesz mógł dodać kartę, musisz utworzyć reprezentację, która pozwoli ustawić właściwości zakładki, którą chcesz dodać.  
To gdzie znajduje się [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) w:

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, Item)
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Ciąg znaków jest w każdej z trzech metod identyczny: jest to niezlokalizowana nazwa, którą będzie później miała zakładka.  
Drugim parametrem jest symbol, na którym karta będzie się znajdować później (e. . wiadro lawy dla "miski").  
Możesz zdecydować, kogo chcesz użyć reprezentacji przedmiotu, stołu elementów, prezentacji blokowej lub funkcji itemStackSupplier.

## Wywołanie istniejącego obiektu ICreativeTab

Możesz również wywołać [istniejącą kartę kreatywną](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) , chociaż nie możesz zmienić żadnej z jej właściwości.  
Dlaczego to potrzebujesz, pytasz?  
Będziesz tego potrzebował jeśli chcesz dodać nowo utworzony blok lub element do istniejącej karty!

## Właściwości

Możesz dzwonić i ustawić wszystkie te właściwości za pomocą zwykłej karty ZenGetters i ZenSetters  
`. nlocalizedName = "hh";`  
Zauważ, że prawdopodobnie nie będziesz potrzebował Ustawień, ponieważ te właściwości są już inicjowane do twoich pożądanych wartości podczas tworzenia obiektu ICreativeTab.  
Także nie możesz ustawić ani uzyskać właściwości z istniejącej ICreativeTab(takich, które pobrałeś za pomocą [Bracket handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| Nazwa Właściwości | Typ                                                                                                     | Wymagane | Wartość domyślna | Opis/Uwagi                    |
| ----------------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------------- | ----------------------------- |
| unlocalizedName   | ciąg znaków                                                                                             | TAK      |                  | Nazwa karty „Kreatywna karta” |
| stos ikon         | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | TAK/NIE  |                  | Ikona karty Creative          |
| iconStackSupplier | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | NIE/TAK  | null             | Określa coś?                  |

## Rejestrowanie kreatywnej karty

Musisz wywołać tę metodę, aby zarejestrować kreatywną kartę w grze!  
W przeciwnym razie nic się nie stanie!  
Po wywołaniu tej funkcji nie możesz wyrejestrować karty ani zmieniać jej właściwości!

```zenscript
tab.register();
```

## Przykładowy skrypt

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```