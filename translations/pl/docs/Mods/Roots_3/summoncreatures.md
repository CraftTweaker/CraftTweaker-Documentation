
### Klasa

```zenscript
import mods.roots.SummonCreatures;
```

#### Metody

```zenscript
Unieważnij addEntity(
  IEntityDefinition entity // the entity to be applied
  IIngredient[] składniki // / lista składników używanych do wezwania
);
```


---


```zenscript
Unieważnij removeEntity(
  IEntityDefinition entity // element do usunięcia z przywołania za pomocą receptury
);
```


---


```zenscript
void removeLifeEssence(
  IEntityDefinition entity // the entity to remove life esence for
);
```


---


```zenscript
void addLifeEssence(
  IEntityDefinition entity // the entity to add life essence for
);
```


---


```zenscript
Unikać clearLifeEssence();
```


---


### Przykłady

```zenscript
importuj mods.roots.SummonCreatures;

// Wyczyść wszystkie automatycznie generowane Essences dodane przez
// Mapę zbiorów Zwierzętów
Przywołania. learLifeEssence();

// Dodaj przepis, aby przywołać kurczaka używając 3 przedmiotów
Przywołania Twórców. ddEntity(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// Usuń kciuka dodanego przez przykład zbiorów zwierzęcia
// z listy Esencji Życia (przypuszczając, że nie został wyczyszczony)
Przywołania. emoveLifeEssence(<entity:minecraft:enderman>);

// Ręcznie dodaj zdolność spadania esencji dla smoka płci
Przywołania. ddLifeEssence(<entity:minecraft:ender_dragon>);

// Usuń domyślny przepis dla krów
SummonCreatures.removeEntity(<entity:minecraft:cow>);
```
