::since{version=1.1.0}
# SimpleJeiCategory

Represents the basic and simplest implementation of a custom [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).<strong>For the script writers:</strong> you should never ever reference this class: use either a specific type or [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).<strong>For the mod developers:</strong> it is highly suggested to use this class as a base to implement a custom category, as it gets rid of most of the boilerplate and also provides a constructor that already follows the requirements outlined in [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.SimpleJeiCategory;
```


## Interfacce Implementate
SimpleJeiCategory implements the following interfaces. That means all methods defined in these interfaces are also available in SimpleJeiCategory

- [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory)

## Proprietà

| Nome       | Tipo                                                      | Ha Getter | Ha Setter | Descrizione                                                                                                                    |
| ---------- | --------------------------------------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| background | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) | sì        | no        | Gets the [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that serves as the background for recipes of this category. |

