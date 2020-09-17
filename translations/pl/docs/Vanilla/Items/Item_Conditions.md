# Warunki Produktu

Czasami normalne przedmioty nie będą go przecięte:

Czasami chcemy być w stanie określić przepisy, które działają tylko wtedy, gdy element wejściowy spełnia pewne warunki.

Czasami chcemy być w stanie określić receptury, które będą produkowały specjalny przedmiot, czy to z NBT-Tag, czy z wartością obrażeń lub innymi.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.IItemCondition;`

## Warunki wejścia

Te elementy będą miały wpływ na przedmioty, których możesz użyć, aby stworzyć wynikowy przedmiot. Pamiętaj, że możesz mieszać modyfikatory, aby wymieszać obrażenia i znacznik NBT, na przykład

```zenscript
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "Nie my wszyscy maślą?"}});
```

### Obrażenia

#### każde obrażenia

Wartość obrażeń od przedmiotów wejściowych nie ma znaczenia dla przepisu

```zenscript
obiekt.jakiekolwiek obrażenia()
```

#### tylko uszkodzone

Element wejściowy musi zostać uszkodzony

```zenscript
item.onlyDamaged();
```

#### Uszkodzone co najmniej

Wartość obrażeń od przedmiotów wejściowych musi być co najmniej określona `wartość`  
`wartość` jest wartością int

```zenscript
element.onlyDamageAtLeast(wartość);
```

#### Najwięcej obrażeń

Wartość obrażeń od przedmiotów wejściowych musi być maksymalnie równa podanej wartości ``  
`Wartość` jest wartością int

```zenscript
item.onlyDamageAtMost(wartość);
```

#### Obrażenia pomiędzy

Wartość obrażeń elementu wejściowego musi być pomiędzy gatunkiem `wartość1` i `wartość2`  
`Wartość1` jest int  
`Wartość2` jest wartością int

```zenscript
item.onlyDamageBetween(wartość1, wartość2);
```

### Zdobądź przedmioty z powrotem lub wyraźnie zabronić ponownego użycia przedmiotu

Czasami potrzebujesz przepisu, w którym odzyskasz część swoich wpisów.  
Poprzez zastosowanie `transformDamage(int)` możesz utworzyć takie przepisy.

#### obrażenia transformacyjne

Element wejściowy otrzyma `wartości` punktów obrażeń, a otrzymasz je z powrotem, chyba że ulegnie zniszczeniu podczas procesu wytwarzania.  
`wartość` jest wartością int

```zenscript
Obrażenia transformacji (wartość);
```

### Znaczniki NBT

Czasami chcesz, aby Twoje składniki potrzebowały konkretnego tagu NBT. Receptura nie jest ważna jeśli przedmiot ma inne tagi NBT niż te, które zostały określone, Więc kilof z konkretnym lorem może być zaczarowany!

Jeśli używasz `withTag` jei wyświetli je poprawnie, jeśli używasz `tylkoWithTag`, jei wyświetli tylko beztagowny przedmiot!

Oto jak to robisz: `NBTTag` jest twoimi danymi NBT

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {name: "Pickle the Pickleberry"}}});
<minecraft.iron_pickaxe>.withTag({display: {name: "Pickle the Pickleberry"}});
```

## Modyfikatory wyjściowe

Jeśli możesz określić warunki wejściowe, nie jest to tak trudne do zdefiniowania również warunki wyjściowe lub raczej modyfikatory wyjściowe.

### Obrażenia

Twój przedmiot wyjściowy będzie miał `wartość` punktów obrażeń.  
`Wartość` jest liczbą całkowitą.

```zenscript
element.withDamage(wartość);
```

### Znaczniki NBT

Twój element wyjściowy będzie miał `NBTTag` jako NBT-Ttag.  
`NBTTag` jest twoimi danymi NBT

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}})
```

## Rejestrowanie własnego elementu Warunki

Możesz również dodać swoje warunki. Są to specjalne funkcje, które akceptują pozycję [](/Vanilla/Items/IItemStack/) jako pojedynczy parametr.

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

Funkcja musi zwracać bool który jest prawdziwy, jeśli przedmiot odpowiada warunkowi.