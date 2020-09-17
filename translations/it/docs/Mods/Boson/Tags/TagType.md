# `TagType`

Un `TagType` identifica il tipo di elementi che possono essere memorizzati all'interno di un dato [`Tag`](/Mods/Boson/Tags/Tag/). Ospita anche alcuni dati aggiuntivi di sola lettura che identificano un certo set di mnemonici che aiutano a identificare un tipo in un modo più umano-amichevole.

## Dettagli Classe
La classe è situata nel pacchetto `net.thesilkminer.mc.boson.zen.tag` , rendendo `net.thesilkminer.mc.boson.zen.tag.TagType` il suo nome completamente qualificato per l'importazione.

## Creare una nuova istanza
Non è possibile creare una nuova istanza di un tipo di tag grezzo da CraftTweaker. È tuttavia possibile ottenere il tipo di un determinato tag `` tramite le sue proprietà. Fare riferimento alla documentazione [per `Tag`](/Mods/Boson/Tags/Tag/) per ulteriori informazioni.

### Istanze conosciute `TagType`
Boson per impostazione predefinita crea già un certo insieme di tipi di tag, che può essere utilizzato in [staffe handlers](/Mods/Boson/Tags/BracketHandler/) per ottenere istanze di `Tag`s o `TagIngredient`s. Questi mnemonici sono scritti nella tabella che segue:

| Mnemonico  | Oggetti Memorizzati                                |
| ---------- | -------------------------------------------------- |
| `blocchi`  | [`IBlockState`](/Vanilla/Blocks/IBlockState/)      |
| `fluidi`   | (non attualmente accessibile tramite CraftTweaker) |
| `elementi` | [`IItemStack`](/Vanilla/Items/IItemStack/)         |

## Proprietà
Un `TagType` fornisce accesso in sola lettura a un certo insieme di proprietà, come illustrato nella tabella seguente:

| Nome Proprietà      | Tipo                                                                   | Descrizione                                                                                        |
| ------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `directoryName`     | `stringa`                                                              | Nome della directory in cui il tag JSONs è in un data-pack                                         |
| `nome`              | `stringa`                                                              | Mnemonica che identifica il tipo di tag specificato; utilizzata nei gestori delle parentesi di tag |
| `classType`         | [`Classe`](/Mods/Boson/Reflection/Class/)                              | Tipo di oggetti memorizzati nel tag                                                                |
| `converterFunction` | [`Funzione<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Converte i nomi in elementi tag                                                                    |
