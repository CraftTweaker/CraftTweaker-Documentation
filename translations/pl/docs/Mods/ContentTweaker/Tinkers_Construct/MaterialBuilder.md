# Konstruktor materiałów

Za pomocą tego pakietu możesz tworzyć materiały, z którymi możesz tworzyć narzędzia!

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.tconstruct.MaterialBuilder;`

## Tworzenie materiału

Przede wszystkim musisz utworzyć Budowniczego Materiałów.  
Można to zrobić za pomocą metody tworzenia statycznego.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(identyfikator ciągu);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Pamiętaj, że musisz zarejestrować materiał po dokonaniu zmian.  
Można to zrobić z metodą `rejestru` , która zwróci [Reprezentację Materiałową](/Mods/ContentTweaker/Tinkers_Construct/Material/) nowego materiału.

```zenscript
myMat.register();
```

## Właściwości

Możesz ustawić i pobrać te właściwości używając `myMaterial.name`.

| Własność                | Typ                                              | W podpozycjach220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 220410, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041010, 22041011, 220410101010101010101010101010, 2204101010101010101010, 22041010, 2204101010101010, 22041010101010101010101010, 22041010101010, 220410101010101010101010, 22041010, 22041010, 22041010, 22041010, |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifier              | ciąg znaków                                      | Unikalna nazwa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| kolor                   | odcień                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| hidden                  | bool                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ciecz                   | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | Produkcja hutnictwa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| rzemieślnik             | bool                                             | Może być utworzony w konstruktorze części                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| przekreślalny           | bool                                             | Może być utworzony przy użyciu rzutów. Wymaga ustawienia płynu!                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Element reprezentatywny | [IItemStack](/Vanilla/Items/IItemStack/)         | Pokazuj przedmiot w podręczniku                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Reprezentatywna         | [IOreDictentry](/Vanilla/OreDict/IOreDictEntry/) | Pokaż, jeśli reprezentatywny Element jest pusty                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| odłamek                 | [IItemStack](/Vanilla/Items/IItemStack/)         | Używany zamiast przedmiotu odłamka naleźnika w konstruktorze części.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| localizedName           | ciąg znaków                                      | Wyświetlana nazwa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Obliczone właściwości

### Lokalizator elementu

Możesz użyć tej funkcji do obliczenia nazw materiałów, jeśli potrzebujesz tego przypadku.  
Używa [Reprezentacji Materiałowej](/Mods/ContentTweaker/Tinkers_Construct/Material/) tego materiału i nazwy narzędzia, którego nazwa została zmieniona (np. "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Dodaj przedmioty Material

Jeśli używasz podanego przedmiotu w konstruktorze części, możesz ustawić, ile punktów materiałowych nada lub ile przedmiotów zostanie naprawionych.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeed, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(element IItemStack);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `element` to element, który jest dopasowany. Możesz użyć [Warunków Elementu](/Vanilla/Items/Item_Conditions/) , ale bez Transformatorów. 
- `wartość` to ilość elementów, które są dopasowane. Możesz podzielić je na wszystkie gniazda dostarczające narzędzia, co pozwala również przejść powyżej 64. W drugim przykładzie powyżej potrzeba dodatkowo 4 żelaznych bloków. Domyślnie do 1.
- `amountmatch` to ilość punktów materiałowych dodanych na `potrzebną ilość`. W drugim przykładzie powyżej cztery żelazne bloki dają dwa punkty materiałowe. Domyślnie do 144 (jedna wartość wejściowa/jednego materiału).
- Jeśli użyjesz funkcji `usuń`, usunie ona wszystkie składniki cechy, które pasują do elementu.

## Cechy materiałowe

Możesz dodać cechę do materiału.  
Wszystkie elementy wykonane z tego materiału będą miały tę cechę.  
Używa ciągu z identyfikatorem cechy, i opcjonalny `ciąg zależności` określający typy produktów, na które cechy powinny mieć wpływ.  
Alternatywnie, możesz użyć [Reprezentacja Cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/), chociaż to działa tylko wtedy, gdy cecha jest już zainicjowana przez czas uruchomienia CoT (najprawdopodobniej tylko dla niestandardowych cech). Możliwe wartości dla `zależności` to:

- `null` (domyślnie) → Wszystkie elementy, chyba że dep ma już inne cechy.
- `"głowa"`
- `"uchwyt"`
- `"ek"`
- `"naciśnij"`
- `"sznurki"`
- `"Pocisk rakietowy"`
- `"wał wału"`
- `"fletching"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

Możesz również usunąć cechy materiałowe (co jest szczególnie przydatne podczas wykonywania wsadowych materiałów).  
Usunąłeś je za pomocą ich ciągu identyfikacyjnego i opcjonalnej zależności.  
Jeśli opuścisz zależność lub użyjesz `null` wszystkie cechy z tym identyfikatorem zostaną usunięte.

```zenscript
//myMaterial.remove(identyfikator ciągu znaków, zależność @Opcjonalna ciągu znaków);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Statystyki Materiałów

Aby TiCon mógł zbudować materiały, musi znać statystyki materiałowe.  
Tylko typy narzędzi, których statystyka została dodana, zostaną zbudowane!

```zenscript
<br />myMat.addHeadMaterialStats(wytrzymałość intów, prędkość pływania, obrażenia zadawane przez ataki pływające, poziom plonów);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(Modyfikator pływaka, wytrzymałość intów);
myMat. emoveHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat. emoveBowMaterialStats();


myMat.addBowStringMaterialStats(Modyfikator zmienny);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(Modyfikator zmiennoprzecinkowy, premiusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(dokładność zmiennoprzecinka, modyfikacja zmiennoprzecinkowa);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
MremoveProjectiMaterialStats();
```

## Przykład

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterials(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat. ddMaterialTrait("blasting", "head");

//null (lub nie określając tego parametru) oznacza, że jest to domyślna cecha.
//Domyślne cechy są zapytane tylko wtedy, gdy do tego typu materiału nie są dodawane żadne inne cechy.
//W tym przypadku gęsta cecha będzie tylko na narzędziach, ponieważ sznurki i głowice mają już inne cechy.
testMat.addMaterialTrait("dense", null);

//Faulty, powinien być błędny, ale tylko podczas uruchamiania, w takim razie ciągi zostaną sprawdzone.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```