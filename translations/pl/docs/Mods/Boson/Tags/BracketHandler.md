# Obsługa nawiasów

Obsługa nawiasów jest jedynym sposobem na uzyskanie tagu.

## Składnia
Składnia tego uchwytu nawiasów jest niezwykle łatwa do podążania, a jednocześnie umożliwia wiele różnych możliwości, w których znacznik powinien być zwracany przez uchwyt nawiasu.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

W powyższym fragmencie kodu części we wszystkich kapslach są bitami, które są konfigurowalne przez dewelopera i reprezentują cel , który zostanie zwrócony.

`TYPE` identyfikuje [typ tagu](/Mods/Boson/Tags/TagType/) , który zostanie utworzony. Typ musi być jednym z mnemoników identyfikujących typ tagu. Odnieś się do połączonej strony listy ważnych typów tagów.

`NAMESPACE` identyfikuje przestrzeń nazwy tagu, tj. identyfikator modyfikacji który posiada tag. W większości przypadków przestrzeń nazw będzie `wykuć` lub `minecraft`, ale możliwe jest również użycie innych spacji nazwowych. . dla tagów specyficznych dla moda.

`NAZWA` reprezentuje nazwę tagu, który powinien zostać uzyskany.

Zobacz sekcję zachowania, aby wiedzieć, co zwróci ten uchwyt nawiasu.

## Zachowanie
W odróżnieniu od innych uchwytów nawiasu, które są obecne w CraftTweaker, zachowanie tego uchwytu nawiasów różni się od się w zależności od tego, który ładujący obsługuje skrypt, w którym znajduje się uchwyt nawiasu.

### Obciążenie `tagów`
If the bracket handler is referenced in a script loaded by the [`tags` loader](/Mods/Boson/Loaders/Tags/), it will return a [`Tag`](/Mods/Boson/Tags/Tag/). Pozwala to na manipulację elementami, które znajdują się w samym tagu . Aby uzyskać więcej informacji, należy zapoznać się z dokumentacją klasy.

### Obciążenie `preinit`
Jeśli uchwyt nawiasów jest odwołany do skryptu załadowanego przez ładowarkę `preinit` , to zrzuci wyjątek, ponieważ tagi są ładowane później w cyklu życia Minecraft, a mianowicie tuż przed rejestracją receptur.

### Co drugi ładunek
Jeśli uchwyt nawiasów jest odsyłany w skrypcie załadowanym przez któregokolwiek z pozostałych ładujących, łącznie z domyślnym `epizodem przepis` , a następnie zwróci [`TagSkładnik`](/Mods/Boson/Tags/TagIngredient/). To nie pozwala na manipulację zawartością tagu, ale pozwala na użycie tagu w recepturach i innych metodach, które wymagają instancji [`ISkładnik`](/Vanilla/Variable_Types/IIngredient/) jako parametru.

## Przykładowe użycie

Ten pierwszy przykład pokazuje użycie `TagSkładnika` do dodania nowego przepisu. Zauważ, że użyto tagu `elementów` :

```zenscript
Val tagIngredient = <tag-items:forge:ingots/iron>;
recipes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

Ten drugi przykład pokazuje manipulację blokami `tagu` typu ``:

```zenscript
#tagi loadera
tag val = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" jako NameSpacedString);
```
