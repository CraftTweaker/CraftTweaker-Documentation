# Reprezentacja Cechy

Reprezentacja Cechy reprezentuje Cechę Konstrukcji Tinkerów.  
Możesz uzyskać taki obiekt od [Kreatora Cech](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) lub [Klawiatury Cechy](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/).

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.tconstruct.Cecha`

## ZenGetter

| ZenGetter  | Typ         |
| ---------- | ----------- |
| identifier | ciąg znaków |
| polecenie  | ciąg znaków |

## Dodawanie elementów cechy

Jeśli łączysz dany składnik z narzędziem w kuźni narzędzi, możesz zastosować cechę jako modyfikator.

```zenscript
//myTrait.addModifierItem(IIngredient item, @Optional(1) int amountNeeed, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `element` to element, który jest dopasowany. Możesz użyć [Warunków Elementu](/Vanilla/Items/Item_Conditions/) , ale bez Transformatorów. 
- `wartość` to ilość elementów, które są dopasowane. Możesz podzielić je na wszystkie gniazda dostarczające narzędzia, co pozwala również przejść powyżej 64. W powyższym przykładzie potrzebne są 4 żelazne bloki za każdym razem. Domyślnie do 1.
- `amountmatch` to ilość punktów cechy dodanych na `kwot`. W powyższym przykładzie cztery żelazne bloki dają dwa punkty cechy. Domyślnie do 1.

## Uzyskiwanie dostępu do danych cech

Dane cechy to dane, które należą do cechy i są obiektBound. Jako takie, możesz dostarczyć [IItemStack](/Vanilla/Items/IItemStack/) i pobrać obiekt [TraitDataReprezentacja](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/)

    Wal myTraitData = myTrait.getData(itemWithTrait);